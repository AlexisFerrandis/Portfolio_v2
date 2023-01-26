import React, { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Rnd } from "react-rnd";
import CloseWindow from "../../../../buttons/CloseWindow";

// img
import fbico from "../../../../../assets/folder/applications/facedook/facebook.png";
import reactIco from "../../../../../assets/components/technologies/react.svg";
import sassIco from "../../../../../assets/components/technologies/sass.svg";
import reduxIco from "../../../../../assets/components/technologies/redux.png";
import mongoIco from "../../../../../assets/components/technologies/mongodb.svg";
import expressIco from "../../../../../assets/components/technologies/express.png";


const ReadMe = () => {
	const dispatch = useDispatch();
	const nodeRef = useRef(null);

	const darkMode = useSelector((state) => state.globalVariablesReducer.darkMode);
	const lang = useSelector((state) => state.globalVariablesReducer.language);

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
				x: document.documentElement.clientWidth / 2 - 345 / 2,
				y: document.documentElement.clientHeight / 2 - 620 / 2,
				width: 355,
				height: 600,
			}}
			minWidth={300}
			minHeight={300}
			maxWidth={700}
			disableDragging={false}
			bounds={".app-delimitation"}
			enableResizing={{ bottomRight: true, bottomLeft: true }}
			dragHandleClassName={"readme-template__header"}
			cancel={".close-window-btn-container, p"}
			className={"draggable-z-index"}
		>
			<div ref={nodeRef} className="window-template readme-template" onClick={(e) => {handleZindex(e)}} >
				<div className="readme-template__header">
					<div className="readme-template__header--title">
						<img src={fbico} alt="logo" className="icon" />
						<p>Info.txt</p>
					</div>
					<CloseWindow closeWindow={(e) => dispatch({ type: "SET_DESACTIVE_WINDOW", payload: "facedookReadMe" })} />
				</div>

				<div className={darkMode ? "readme-template__body dark-mode info-html" : "readme-template__body info-html"}>
					<div className="container">
						<h1>Facedook</h1>
						<h2>Lite Facebook Clone</h2>
						<div className="gray-separator"></div>

						<h3>{lang === "Fr" ? "Projet" : "Project"}</h3>
						<p>{lang === "Fr" ? "Version simplifiée de Facebook réalisée avec React et Redux pour le client, Mongo et Node pour le serveur." : "Simplified version of Facebook made with React and Redux for the client, Mongo and Node for the server."}</p>
						<br />
						<p>{lang === "Fr" ? "CRUD pour l'utilisateur et les posts, possibilité de commenter et liker les commentaires." : "CRUD for user and posts, comment post and like comments."}</p>
						<br />
						<p>{lang === "Fr" ? "Intégration de vidéos, images et emojis dans les posts." : "Integration of videos, images and emojis in posts."}</p>
						<br />
						<div className="gray-separator"></div>

						<h3>Technologies</h3>
						<div className="icons-container">
							<img src={reactIco} alt="react" className="icon" />
							<img src={sassIco} alt="sass" className="icon" />
							<img src={reduxIco} alt="redux" className="icon" />
							<img src={expressIco} alt="express" className="icon" />
							<img src={mongoIco} alt="mongo" className="icon" />
						</div>
					</div>
				</div>
			</div>
		</Rnd>
	);
};

export default ReadMe;
