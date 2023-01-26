import React, { useRef } from "react";
import { Rnd } from "react-rnd";
import { useSelector } from "react-redux";

import Header from "./Header";
import CloseWindow from "../buttons/CloseWindow";
import Content from "./Content";
import NavBar from "./NavBar";

const FolderExplorer = ({ closeWindow }) => {
	const nodeRef = useRef(null);
	const darkMode = useSelector((state) => state.globalVariablesReducer.darkMode);

	const handleZindex = (e) => {
		const windows = document.querySelectorAll(".draggable-z-index");
		for (let i = 0; i < windows.length; i++) {
			windows[i].style.zIndex = 99;
		}
		e.target.closest(".draggable-z-index").style.zIndex = 100;
	}

	return (
		<Rnd
			default={{
				x: document.documentElement.clientWidth / 2 - 360 / 2,
				y: 100,
				width: document.documentElement.clientWidth / 2,
				height: 350,
			}}
			minWidth={365}
			minHeight={300}
			maxWidth={600}
			disableDragging={false}
			bounds={".app-delimitation"}
			enableResizing={{ bottomRight: true, bottomLeft: true }}
			dragHandleClassName={"folder-explorer__header"}
			cancel={"img, btn, .close-window-btn-container"}
			className={"draggable-z-index"}
		>
			<div ref={nodeRef} className="window-template folder-explorer" onClick={(e) => {handleZindex(e)}} >
				<div className="folder-explorer__header">
					<Header />
					<CloseWindow closeWindow={closeWindow} />
				</div>

				<div className="folder-explorer__body">
					<div className="folder-explorer__body--navbar">
						<NavBar />
					</div>

					<div className={darkMode ? "folder-explorer__body--content dark-mode" : "folder-explorer__body--content"}>
						<Content />
					</div>
				</div>
			</div>
		</Rnd>
	);
};

export default FolderExplorer;
