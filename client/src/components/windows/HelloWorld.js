import React, { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Rnd } from "react-rnd";
import CloseWindow from "./../buttons/CloseWindow";

// img
import logoLetter from "./../../assets/logos/logo-letter.png"
import locIco from "./../../assets/components/icons/location-dot-solid.svg"
import logo from "./../../assets/logos/logo-name.png"

const HelloWorld = () => {
	const dispatch = useDispatch();
	const nodeRef = useRef(null);

	const darkMode = useSelector((state) => state.globalVariablesReducer.darkMode);
	// const lang = useSelector((state) => state.globalVariablesReducer.language);

	return (
		<Rnd
			default={{
				x: document.documentElement.clientWidth / 2 - 345 / 2,
				y: document.documentElement.clientHeight / 2 - 550 / 2,
				width: 345,
				height: 550,
			}}
			minWidth={300}
			minHeight={300}
			disableDragging={false}
			bounds={".app-delimitation"}
			enableResizing={{ bottomRight: true, bottomLeft: true }}
			dragHandleClassName={"readme-template__header"}
			cancel={".close-window-btn-container, p"}
		>
			<div ref={nodeRef} className="window-template readme-template hello-world">
				<div className="readme-template__header">
					<div className="readme-template__header--title">
						<img src={logoLetter} alt="logo" className="icon" />
						<p>Alexis.html</p>
					</div>
					<CloseWindow closeWindow={(e) => dispatch({ type: "SET_DESACTIVE_WINDOW", payload: "helloWorld" })} />
				</div>

				<div className={darkMode ? "readme-template__body dark-mode" : "readme-template__body"}>
					<div className="content">
						<img className="logo" src={logo} alt="Alexis Ferrandis logo" />
						<h2>Développement Web</h2>
						<p className="localisation">
							<img className="localisation" src={locIco} alt="localisation" />
							Paris, France
						</p>
						<div className="info">
							<h3>Bienvenue sur mon portfolio,</h3>
							<p>
								<br />
								N'hésitez pas à parcourir les différents dossiers du bureau pour découvrir mes applications et projets.
								<br />
								<br />
								Pour des missions en freelance, vous pouvez m'envoyer un <a href="mailto:alexisferrandis@protonmail.com">email</a>, ou visiter la page de contact.
								<br />
								<br />
								Merci pour votre visite 🙂
							</p>
						</div>
					</div>
				</div>
			</div>
		</Rnd>
	);
};

export default HelloWorld;
