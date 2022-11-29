import React, { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Rnd } from "react-rnd";

import CloseWindow from "./../buttons/CloseWindow";

import FacedookApp from "./../apps/facedook/FacedookApp"

// img
import logo from "./../../assets/logos/facedook.ico"

const Facedook = () => {
	const dispatch = useDispatch();
	const nodeRef = useRef(null);
	let windowX = document.documentElement.clientWidth / 8;
	let windowWidth = document.documentElement.clientWidth * 0.8;

	const darkMode = useSelector((state) => state.globalVariablesReducer.darkMode);
	if (window.innerWidth < 420) {
		windowX = 10; 
		windowWidth = document.documentElement.clientWidth - 20;
	}

	return (
		<Rnd
			default={{
				x: windowX,
				y: document.documentElement.clientHeight / 10,
				width: windowWidth,
				height: document.documentElement.clientHeight * 0.8,
			}}
			minWidth={360}
			minHeight={400}
			disableDragging={false}
			bounds={".app-delimitation"}
			enableResizing={{ bottomRight: true, bottomLeft: true }}
			dragHandleClassName={"readme-template__header"}
			cancel={".close-window-btn-container, p"}
		>
			<div ref={nodeRef} className="window-template readme-template app-facebook">
				<div className="readme-template__header">
					<div className="readme-template__header--title">
						<img src={logo} alt="logo" className="icon" />
						<p>Facedook</p>
					</div>
					<CloseWindow closeWindow={(e) => dispatch({ type: "SET_DESACTIVE_WINDOW", payload: "facedook" })} />
				</div>

				<div className={darkMode ? "readme-template__body facebook-window dark-mode" : "readme-template__body facebook-window"}>
					<div className="content">
                        <FacedookApp />
					</div>
				</div>
			</div>
		</Rnd>
	);
};

export default Facedook;
