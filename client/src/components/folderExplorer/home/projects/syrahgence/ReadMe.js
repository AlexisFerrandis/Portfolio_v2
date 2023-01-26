import React, { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Rnd } from "react-rnd";
import CloseWindow from "../../../../buttons/CloseWindow";

// img
import syIco from "../../../../../assets/folder/projects/syrahgence/icon.png";
import reactIco from "../../../../../assets/components/technologies/react.svg";

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
				height: 550,
			}}
			minWidth={300}
			minHeight={300}
			maxWidth={700}
			disableDragging={false}
			bounds={".app-delimitation"}
			enableResizing={{ bottomRight: true, bottomLeft: true }}
			dragHandleClassName={"readme-template__header"}
			className={"draggable-z-index"}
			cancel={".close-window-btn-container, p"}
		>
			<div ref={nodeRef} className="window-template readme-template"  onClick={(e) => {handleZindex(e)}} >
				<div className="readme-template__header">
					<div className="readme-template__header--title">
						<img src={syIco} alt="logo" className="icon" />
						<p>Info.txt</p>
					</div>
					<CloseWindow closeWindow={(e) => dispatch({ type: "SET_DESACTIVE_WINDOW", payload: "syrahgenceReadMe" })} />
				</div>

				<div className={darkMode ? "readme-template__body dark-mode info-html" : "readme-template__body info-html"}>
					<div className="container">
						<h1>Syrahgence</h1>
						<h2>{lang === "Fr" ? "Agence de communication" : "Communication agency"}</h2>
						<div className="gray-separator"></div>

						<h3>{lang === "Fr" ? "Projet" : "Project"}</h3>
						<p>{lang === "Fr" ? "Sur la base d'une maquette proposée par l'entreprise, intégration des composants en méthode agile avec une évolution constante du site web." : "Based on a mockup proposed by the company, integration of components using an agile method with the constant evolution of the website."}</p>
						<br />
						<p>{lang === "Fr" ? "Création d'adresses mails professionnelles pour les membres de l'équipe et liaison des boîtes avec un client web." : "Creation of professional email addresses for team members and linking boxes with a web client."}</p>
						<br />
						<div className="gray-separator"></div>

						<h3>Technologies</h3>
						<div className="icons-container">
							<img src={reactIco} alt="react" className="icon" />
						</div>
					</div>
				</div>
			</div>
		</Rnd>
	);
};

export default ReadMe;
