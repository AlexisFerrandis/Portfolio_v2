import React from "react";
import { useDispatch, useSelector } from "react-redux";

// img
import github from "../../../../assets/folder/github.svg";
import linkedin from "../../../../assets/folder/linkedin.svg";
import form from "../../../../assets/folder/internet-mail.svg";
import externalLink from "../../../../assets/components/icons/export.png"



const Contact = () => {
	const dispatch = useDispatch();
	const darkMode = useSelector((state) => state.globalVariablesReducer.darkMode);


	const openText = (e) => {
		dispatch({ type: "SET_ACTIVE_WINDOW", payload: e.target.id });
	};

	return (
		<div className="container">
			<div className="folder" onClick={(e) => openText(e)} id="contactForm">
				<img src={form} alt="presentation" className="folder-pic " />
				<p>Contact</p>
			</div>
			<div className="folder" onClick={() => window.open("https://github.com/AlexisFerrandis", "_blank")} >
				<img src={github} alt="projects" className="folder-pic github" />
				<p>Github</p>
				<br/>
				<div className="redirection github">
					<img src={externalLink} alt="Redirige vers le Github de ce projet." />
				</div>
			</div>
			<div className="folder" onClick={() => window.open("https://www.linkedin.com/in/alexis-ferrandis-5b5343106", "_blank")} >
				<img src={linkedin} alt="projects" className={darkMode ? "folder-pic dark-linkedin" : "folder-pic linkedin"}/>
				<p>Linkedin</p>
				<br/>
				<div className="redirection linkedin">
					<img src={externalLink} alt="Redirige vers le Linkedin d'Alexis." />
				</div>
			</div>
			{/* <div className="folder" onClick={(e) => openText(e)} id="helloWorld">
				<img src={presentationFile} alt="presentation" className="folder-pic" />
				<p>Alexis.html</p>
			</div> */}
		</div>
	);
};

export default Contact;
