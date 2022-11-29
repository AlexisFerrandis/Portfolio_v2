import React, { useContext } from "react";
import { UIdContext } from "../AppContext";
import LikeButton from "./LikeButton";

import messagePicto from "../../assets/picto/message-regular.svg"
import sharePicto from "../../assets/picto/share-solid.svg";

const PostInteractions = ({ post, showComments }) => {
	const uid = useContext(UIdContext);
	return (
		<>
			{uid && (
				<div className="post-interactions">
					<LikeButton post={post} />

					<div className="interaction" onClick={showComments}>
						<img src={messagePicto} alt="comment" />
						<p>Commenter</p>
					</div>

					<div className="interaction">
						<img src={sharePicto} alt="share" />
						<p>Partager</p>
					</div>
				</div>
			)}
		</>
	);
};

export default PostInteractions;
