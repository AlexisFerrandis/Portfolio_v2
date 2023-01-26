import React, { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Rnd } from "react-rnd";
import CloseWindow from "../../../../buttons/CloseWindow";

// img
import blIco from "../../../../../assets/folder/projects/benjaminlaigret/icon.jpg";
import wordpressIco from "../../../../../assets/components/technologies/wordpress.svg";
import reactIco from "../../../../../assets/components/technologies/react.svg";
import canvaIco from "../../../../../assets/components/technologies/canva.png";
import figmaIco from "../../../../../assets/components/technologies/figma.svg";
import gimpIco from "../../../../../assets/components/technologies/gimp.png";

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
				height: 570,
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
						<img src={blIco} alt="logo" className="icon" />
						<p>Info.txt</p>
					</div>
					<CloseWindow closeWindow={(e) => dispatch({ type: "SET_DESACTIVE_WINDOW", payload: "benjaminLaigretReadMe" })} />
				</div>

				<div className={darkMode ? "readme-template__body dark-mode info-html" : "readme-template__body info-html"}>
					<div className="container">
						<h1>Benjamin Laigret</h1>
						<h2>{lang === "Fr" ? "Portfolio professionnel" : "Professional portfolio"}</h2>
						<div className="gray-separator"></div>

						<h3>{lang === "Fr" ? "Projet" : "Project"}</h3>
						<p>{lang === "Fr" ? "Transformation d'un site WordPress en portfolio dynamique pour un graphiste illustrateur." : "Transformation of a WordPress site into a dynamic portfolio for an illustrator / graphic designer."}</p>
						<br />
						<p>{lang === "Fr" ? "Conception UI avec Figma." : "UI designed with Figma."}</p>
						<br />
						<p>{lang === "Fr" ? "Découpage de l'illustration principale avec Gimp pour un effet parallaxe sur la landing page." : "Slicing of the main illustration with Gimp for a parallax effect on the landing page."}</p>
						<br />
						<div className="gray-separator"></div>

						<h3>Technologies</h3>
						<div className="icons-container">
							<img src={wordpressIco} alt="wordpress" className="icon" />
							<img src={figmaIco} alt="figma" className="icon" />
							<img src={gimpIco} alt="gimp" className="icon" />
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
