import React, { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Rnd } from "react-rnd";
import CloseWindow from "./../buttons/CloseWindow";

// img
import logoLetter from "./../../assets/logos/logo-letter.png"
import locIco from "./../../assets/components/icons/location-dot-solid.svg"
import logo from "./../../assets/logos/logo-name.png"
import logo20 from "./../../assets/logos/logo-name-20.png"
import CTA from "../buttons/CTA";

const HelloWorld = () => {
	const dispatch = useDispatch();
	const nodeRef = useRef(null);

	const darkMode = useSelector((state) => state.globalVariablesReducer.darkMode);
	const lang = useSelector((state) => state.globalVariablesReducer.language);

	return (
		<Rnd
			default={{
				x: document.documentElement.clientWidth / 2 - 345 / 2,
				y: document.documentElement.clientHeight / 2 - 620 / 2 + 10,
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
						
						<img className="logo" src={darkMode ? logo20 : logo} alt="Alexis Ferrandis logo" />
						<h2>{lang === "Fr" ? "Développement Web" : "Web development"}</h2>
						<p className="localisation">
							<img className="localisation" src={locIco} alt="localisation" />
							Paris, France
						</p>
						<div className="info">
							<h3>{lang === "Fr" ? "Bienvenue sur mon portfolio," : "Welcome to my portfolio,"}</h3>
							<p>
								<br />
								{lang === "Fr" ? "Je vous invite à parcourir les dossiers du bureau pour découvrir mes applications." : "I invite you to browse the desktop folders to discover my applications."}
								<br />
								<br />
								{lang === "Fr" ? "N'hésitez pas à m'envoyer un " : "Feel free to send me an "}
								<a href="mailto:alexisferrandis@protonmail.com">email</a>
								{lang === "Fr" ? ", ou visiter la page de contact pour discuter de votre projet." : ", or visit the contact page to discuss your project."}
								<br />
								<br />
								{lang === "Fr" ? "Merci pour votre visite 🙂" : "Thank you for your visit 🙂"}
								
							</p>
						</div>
						<CTA ctaAction={console.log("tt")} ctaValue={"contact"} />
					</div>
				</div>
			</div>
		</Rnd>
	);
};

export default HelloWorld;
