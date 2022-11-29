import React, { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../actions/post.actions";
import { UIdContext } from "./AppContext";
import Card from "./Post/Card";
import { isEmpty } from "./Utils";

const Thread = (props) => {
	const uid = useContext(UIdContext);
	const posts = useSelector((state) => state.postReducer);

	const [loadPost, setLoadPost] = useState(true);
	const [count, setCount] = useState(0);
	const dispatch = useDispatch();

	const [userPosts, setUserPosts] = useState([]);

	// display only profil id thread
	const threadContext = props.context;

	// const loadMore = (e) => {
	// 	if (e.target.scrollTop > e.target.children[0].offsetHeight - 1000) {
	// 		setLoadPost(true);
	// 	}
	// };

	useEffect(() => {
		if (loadPost) {
			dispatch(getPosts(posts.length));
			setCount(count + 1);
			if (count > 2) {
				setLoadPost(false);
			}
		}
		if (threadContext) {
			let array = [];
			// dispatch(getPosts(count));
			for (let i = 0; i < posts.length; i++) {
				if (posts[i].posterId === threadContext) {
					array.push(posts[i]);
				}
			}
			setUserPosts(array);
		}
		

		// const facebookWindow = document.querySelectorAll(".facebook-window");
		// for (let i = 0; i < facebookWindow.length; i ++) {
		// 	facebookWindow[i].addEventListener("scroll", loadMore);
		// 	return () => facebookWindow[i].removeEventListener("scroll", loadMore);
		// }

		// window.addEventListener("scroll", loadMore);
		// return () => window.removeEventListener("scroll", loadMore);
		
	}, [loadPost,  posts, threadContext, dispatch]); //count,

	return (
		<div className="thread-container">
			{threadContext && (
				<ul>
					{!isEmpty(posts[0]) &&
						userPosts.map((post) => {
							return <Card post={post} key={post._id} />;
						})}
				</ul>
			)}
			{!threadContext && (
				<ul>
					{!isEmpty(posts[0]) &&
						posts.map((post) => {
							return <Card post={post} key={post._id} />;
						})}
				</ul>
			)}
			{threadContext && userPosts.length === 0 && (
				<div className="window-container empty-post">
					<h4>Il n'y a pas encore de publication à afficher</h4>

					{uid === threadContext && (
						<div>
							<button className="submit-btn">Publier du contenu</button>
						</div>
					)}
				</div>
			)}
		</div>
	);
};

export default Thread;
