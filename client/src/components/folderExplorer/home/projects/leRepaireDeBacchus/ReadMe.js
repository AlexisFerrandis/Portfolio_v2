import React, { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Rnd } from "react-rnd";
import CloseWindow from "../../../../buttons/CloseWindow";

// img
import lrdbIco from "../../../../../assets/folder/projects/lerepairedebacchus/bacchus.jpg";

const ReadMe = () => {
	const dispatch = useDispatch();
	const nodeRef = useRef(null);
	const darkMode = useSelector((state) => state.globalVariablesReducer.darkMode);
	return (
		<Rnd
			default={{
				x: 150,
				y: 100,
				width: 210,
				height: 350,
			}}
			minWidth={375}
			minHeight={300}
			disableDragging={false}
			bounds={".app-delimitation"}
			enableResizing={{ bottomRight: true, bottomLeft: true }}
			dragHandleClassName={"window-template__header"}
		>
			<div ref={nodeRef} className="window-template">
				<div className="window-template__header">
					<div className="window-template__header--title">
						<img src={lrdbIco} alt="logo" className="icon" />
						<p>README.md</p>
					</div>
					<CloseWindow closeWindow={(e) => dispatch({ type: "SET_DESACTIVE_WINDOW", payload: "lrdbReadMe" })} />
				</div>

				<div className={darkMode ? "window-template__body dark-mode" : "window-template__body"}>
					<div className="readme-template">LE CONTENU DE LA FENETRE</div>
				</div>
			</div>
		</Rnd>
	);
};

export default ReadMe;
