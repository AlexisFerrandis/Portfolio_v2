import React, { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Rnd } from "react-rnd";
import CloseWindow from "../../../../buttons/CloseWindow";

// img
import pkIco from "../../../../../assets/folder/games/pokemon/pokemon.png";
import audacityIco from "../../../../../assets/components/technologies/audacity.png";
import gimpIco from "../../../../../assets/components/technologies/gimp.png";
import javascriptIco from "../../../../../assets/components/technologies/javascript.svg";


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
						<img src={pkIco} alt="logo" className="icon" />
						<p>Info.txt</p>
					</div>
					<CloseWindow closeWindow={(e) => dispatch({ type: "SET_DESACTIVE_WINDOW", payload: "pokemonReadMe" })} />
				</div>

				<div className={darkMode ? "readme-template__body dark-mode info-html" : "readme-template__body info-html"}>
					<div className="container">
						<h1>{lang === "Fr" ? "Pokémon" : "Pokemon"}</h1>
						<h2>{lang === "Fr" ? "Jeu Vidéo" : "Video Game"}</h2>
						<div className="gray-separator"></div>

						<h3>{lang === "Fr" ? "Projet" : "Project"}</h3>
						<p>{lang === "Fr" ? "Version de Pokémon Emeraude en vanilla Javascript, intégré dans une balise HTML5 canvas." : "Version of Pokémon Emerald in vanilla Javascript, embedded in an HTML5 canvas tag"}</p>
						<br />
						<p>{lang === "Fr" ? "Création d'un scénario, système de combat avancé, de sauvegarde, possibilité d'acheter et d'utiliser des objets et soigner ses Pokémons dans un PokéCenter." : "Creation of a scenario, advanced combat system, backup, possibility to buy and use items and heal your Pokémon in a PokéCenter."}</p>
						<br />
						<p>{lang === "Fr" ? "Manipulation des assets avec Gimp et Audacity pour proposer une expérience unique." : "Asset manipulation with Gimp and Audacity to provide a unique experience."}</p>
						<br />
						<div className="gray-separator"></div>

						<h3>Technologies</h3>
						<div className="icons-container">
							<img src={gimpIco} alt="gimp" className="icon" />
							<img src={audacityIco} alt="audacity" className="icon" />
							<img src={javascriptIco} alt="javascript" className="icon" />
						</div>
					</div>
				</div>
			</div>
		</Rnd>
	);
};

export default ReadMe;
