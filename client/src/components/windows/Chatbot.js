import React, { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Rnd } from "react-rnd";

import CloseWindow from "./../buttons/CloseWindow";

// img
import ChatBotApp from "../apps/chatbot/ChatBotApp";

const Chatbot = () => {
	const dispatch = useDispatch();
	const nodeRef = useRef(null);

	const darkMode = useSelector((state) => state.globalVariablesReducer.darkMode);

	return (
		<Rnd
			default={{
				x: document.documentElement.clientWidth / 2 - 360 / 2,
				y: 42,
				width: 360,
				height: document.documentElement.clientHeight - 142,
			}}
			minWidth={360}
			minHeight={420}
			maxHeight={700}
			disableDragging={false}
			bounds={".app-delimitation"}
			enableResizing={false}
			dragHandleClassName={"readme-template__header"}
			cancel={".close-window-btn-container, p"}
		>
			<div ref={nodeRef} className="window-template readme-template app-chatbot">
				<div className="readme-template__header">
					<div className="readme-template__header--title">
						<div className="icon">🤖</div>
						<p>Chatbot</p>
					</div>
					<CloseWindow closeWindow={(e) => dispatch({ type: "SET_DESACTIVE_WINDOW", payload: "chatbot" })} />
				</div>

				<div className={darkMode ? "readme-template__body chatbot-window dark-mode" : "readme-template__body chatbot-window"}>
					<div className="content">
						<ChatBotApp />
					</div>
				</div>
			</div>
		</Rnd>
	);
};

export default Chatbot;
