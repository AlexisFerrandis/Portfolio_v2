import React, { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Rnd } from "react-rnd";
import CloseWindow from "../../../../buttons/CloseWindow";

// img
import elIco from "../../../../../assets/folder/projects/elodiepascal/favicon.ico";
import reactIco from "../../../../../assets/components/technologies/react.svg";
import canvaIco from "../../../../../assets/components/technologies/canva.png";
import figmaIco from "../../../../../assets/components/technologies/figma.svg";

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
				height: 560,
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
						<img src={elIco} alt="logo" className="icon" />
						<p>Info.txt</p>
					</div>
					<CloseWindow closeWindow={(e) => dispatch({ type: "SET_DESACTIVE_WINDOW", payload: "elodiePascalReadMe" })} />
				</div>

				<div className={darkMode ? "readme-template__body dark-mode info-html" : "readme-template__body info-html"}>
					<div className="container">
						<h1>Elodie Pascal</h1>
						<h2>{lang === "Fr" ? "Site vitrine" : "Showcase site"}</h2>
						<div className="gray-separator"></div>

						<h3>{lang === "Fr" ? "Projet" : "Project"}</h3>
						<p>{lang === "Fr" ? "Création d'un site de présentation pour une autrice indépendante et la mise en avant de ses romans." : "Creation of a presentation site for Elodie Pascal, an independent author and the highlighting of her novels."}</p>
						<br />
						<p>{lang === "Fr" ? "Suivi de la charte graphique sur Figma et réalisation des illustrations sur Canva." : "Implementation of the graphic charter on Figma and realization of the illustrations on Canva."}</p>
						<br />
						<p>{lang === "Fr" ? "Développement vers une boutique en ligne prochainement." : "Development towards an online store in the coming weeks."}</p>
						<br />
						<div className="gray-separator"></div>

						<h3>Technologies</h3>
						<div className="icons-container">
							<img src={figmaIco} alt="figma" className="icon" />
							<img src={canvaIco} alt="canva" className="icon" />
							<img src={reactIco} alt="react" className="icon" />
						</div>
					</div>
				</div>
			</div>
		</Rnd>
	);
};

export default ReadMe;
