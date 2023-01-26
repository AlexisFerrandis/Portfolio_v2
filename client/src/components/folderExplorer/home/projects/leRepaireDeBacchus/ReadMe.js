import React, { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Rnd } from "react-rnd";
import CloseWindow from "../../../../buttons/CloseWindow";

// img
import lrdbIco from "../../../../../assets/folder/projects/lerepairedebacchus/bacchus.jpg";
import htmlIco from "../../../../../assets/components/technologies/html.svg";
import cssIco from "../../../../../assets/components/technologies/css.svg";
import sassIco from "../../../../../assets/components/technologies/sass.svg";
import jsIco from "../../../../../assets/components/technologies/javascript.svg";
import reactIco from "../../../../../assets/components/technologies/react.svg";
import mongoIco from "../../../../../assets/components/technologies/mongodb.svg";

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
				width: 345,
				height: 670,
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
						<img src={lrdbIco} alt="logo" className="icon" />
						<p>Info.txt</p>
					</div>
					<CloseWindow closeWindow={(e) => dispatch({ type: "SET_DESACTIVE_WINDOW", payload: "lrdbReadMe" })} />
				</div>

				<div className={darkMode ? "readme-template__body dark-mode info-html" : "readme-template__body info-html"}>
					<div className="container">
						<h1>Le Repaire de Bacchus</h1>
						<h2>{lang === "Fr" ? "Site vitrine et interface d'administration" : "Showcase site and its administration interface"}</h2>
						<div className="gray-separator"></div>

						<h3>{lang === "Fr" ? "Projet" : "Project"}</h3>
						<p>{lang === "Fr" ? "En coopération avec le responsable PAO et l’équipe de communication, création d’un site vitrine responsive respectant les contraintes SEO et gardant son nom de domaine d'origine, en méthode agile." : "In cooperation with the DTP manager and the communication team, creation of a responsive showcase site respecting SEO constraints and keeping its original domain name, using an agile method."}</p>
						<br />
						<p>{lang === "Fr" ? "Mise en place d'une carte interactive en échange avec l'API de Google Maps pour localiser les différents établissements." : "Implementation of an interactive map in exchange with the Google Maps API to locate the different establishments."}</p>
						<br />
						<p>{lang === "Fr" ? "Création d'une interface d'administration pour ajouter, modifier ou supprimer les textes et images du site." : "Creation of an administration interface to add, modify or delete the texts and images of the site."}</p>
						<br />
						<p>{lang === "Fr" ? "Génération de QR Codes pointant vers la page avis des établissements disposés en boutique." : "Generation of QR Codes pointing to the reviews page of establishments in the shop."}</p>
						<br />
						<div className="gray-separator"></div>

						<h3>Technologies</h3>
						<div className="icons-container">
							<img src={htmlIco} alt="html" className="icon" />
							<img src={cssIco} alt="css" className="icon" />
							<img src={sassIco} alt="sass" className="icon" />
							<img src={jsIco} alt="javascript" className="icon" />
							<img src={reactIco} alt="react" className="icon" />
							<img src={mongoIco} alt="mongodb" className="icon" />
						</div>
					</div>
				</div>
			</div>
		</Rnd>
	);
};

export default ReadMe;
