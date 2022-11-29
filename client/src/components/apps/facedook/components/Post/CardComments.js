import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addComment, getPosts } from "../../actions/post.actions";
// import FollowHandler from "../Profil/FollowHandler";
import { isEmpty, timestampParser } from "../Utils";
import EditDeleteComment from "./EditDeleteComment";

import CommentLikeButton from "./CommentLikeButton";

// img 
import planePicto from "../../assets/picto/paper-plane-solid.svg"
import likePicto from "../../assets/picto/post-like.svg"

const CardComments = ({ post }) => {
	const [text, setText] = useState("");

	const usersData = useSelector((state) => state.usersReducer);
	const userData = useSelector((state) => state.userReducer);
	const dispatch = useDispatch();

	const handleComment = (e) => {
		e.preventDefault();

		if (text) {
			dispatch(addComment(post._id, userData._id, text, userData.pseudo))
				.then(() => dispatch(getPosts()))
				.then(() => setText(""));
		}
	};

	const displayUsersProfilPage = (id) => {
		dispatch({ type: "ACTIVE_USER_PROFIL", payload: id });
		dispatch({ type: "ACTIVE_PAGE", payload: "usersProfilPage" });
	}

	return (
		<div className="comments-container">
			{post.comments.length > 0 && <h5>Plus pertinent ⏷</h5>}
			{userData._id && (
				<>
					<div className="user-comment-form">
						<div className="user-pic">
							<img crossOrigin="anonymous" src={process.env.REACT_APP_API_URL + userData.picture} alt="user-pic" />
							<div className="green-dot"></div>
						</div>
						<form action="" onSubmit={handleComment} className="comment-form">
							<input className="comment-template" type="text" name="text" onChange={(e) => setText(e.target.value)} value={text} placeholder="Écrivez un commentaire..." />
							<button className={text ? "send-btn" : "inactif-btn"} type="submit" value="envoyer">
								<img src={planePicto} alt="send" />
							</button>
						</form>
					</div>
					<p className="press-enter">Appuyez sur Entrée pour publier votre commentaire.</p>
				</>
			)}
			<div className="comments-list">
				{post.comments.map((comment) => {
					return (
						<div className="comment-item" key={comment._id}>
							<div className={comment.commenterId === userData._id ? "comment-container client" : "comment-container"}>
								<div className="left-part">
									<div onClick={() => displayUsersProfilPage(comment.commenterId)}>
										<img
											crossOrigin="anonymous"
											src={
												!isEmpty(usersData[0]) &&
												usersData
													.map((user) => {
														if (user._id === comment.commenterId) return process.env.REACT_APP_API_URL + user.picture;
														else return null;
													})
													.join("")
											}
											alt="commenter-pic"
										/>
									</div>
								</div>
								<div className="editor-container comment-template">
									<div className="comment-header">
										<div className="pseudo">
											<h6>{comment.commenterPseudo}</h6>
											{/* {comment.commenterId !== userData._id && <FollowHandler idToFollow={comment.commenterId} type={"card"} />} */}
										</div>
									</div>
									<p>{comment.text}</p>
								</div>
								<EditDeleteComment comment={comment} postId={post._id} />
							</div>
							<div className="comment-interactions">
								<CommentLikeButton comment={comment} postId={post._id} increment={comment.likers.length} />
								{comment.asBeenModified && <span className="modified">Modifié</span>}
								<span className="date">{timestampParser(comment.timestamp)}</span>
								{comment.likers.length > 0 && (
									<div className="comment-likes">
										<div className="likes-count">
											<img src={likePicto} alt="like" />
											<span>{comment.likers.length}</span>
										</div>
									</div>
								)}
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default CardComments;
