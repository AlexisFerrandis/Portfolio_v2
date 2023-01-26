import React, { useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Rnd } from "react-rnd";
import emailjs from "@emailjs/browser";

import CloseWindow from "./../buttons/CloseWindow";

// img
import formIco from "../../assets/folder/internet-mail.svg";

const ContactForm = ({setZIndex, zIndex}) => {
	const dispatch = useDispatch();
	const nodeRef = useRef(null);
	const darkMode = useSelector((state) => state.globalVariablesReducer.darkMode);

	const handleZindex = (e) => {
		const windows = document.querySelectorAll(".draggable-z-index");
		for (let i = 0; i < windows.length; i++) {
			windows[i].style.zIndex = 99;
		}
		e.target.closest(".draggable-z-index").style.zIndex = 100;
	}

    // Input states
	const [name, setName] = useState("web");
	const [compagny, setCompagny] = useState("web");
	const [mail, setMail] = useState("");
	const [message, setMessage] = useState("");
	const [messageSent, setMessageSent] = useState(false);

	// Error states
	const [mailError, setMailError] = useState(false);
	const [messageError, setMessageError] = useState(false);

	const form = useRef();

	// Regex
	function inputValidation() {
		if (mail.length < 24 && (mail.length > 6) & /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(mail)) {
			setMailError(false);
			if (message.length < 300 && message.length > 8) {
				setMessageError(false);
				return true;
			} else {
				setMessageError(true);
				return false;
			}
		} else {
			setMailError(true);
			return false;
		}
	}

	// Handle submit
	const sendEmail = (e) => {
		e.preventDefault();

		if (inputValidation()) {
			emailjs.sendForm("service_138iuww", "template_cgmxww3", form.current, "user_SkGwgFyb1mityhbwFYyle").then(
				(res) => {
					// console.log("Message sent, thank u :)");
					setName(name);
					setCompagny(compagny);
					setMail("");
					setMessage("");
					setMessageSent(true);
				},
				(err) => {
					console.log(err.text);
				}
			);
		}
	};

	return (
		<Rnd
			default={{
				x: document.documentElement.clientWidth / 2 - 360 / 2,
				y: 42,
				width: 360,
				height: 510,
			}}
			minWidth={360}
			minHeight={510}
            maxWidth={620}
			maxHeight={700}
			disableDragging={false}
			bounds={".app-delimitation"}
			enableResizing={{ bottomRight: true, bottomLeft: true }}
			dragHandleClassName={"readme-template__header"}
			cancel={".close-window-btn-container, p"}
			className={"draggable-z-index"}
		>
			<div ref={nodeRef} className="window-template readme-template" onClick={handleZindex}>
				<div className="readme-template__header">
					<div className="readme-template__header--title">
						<img src={formIco} alt="Icone de formulaire" className="icon" />
						<p>Contact</p>
					</div>
					<CloseWindow closeWindow={(e) => dispatch({ type: "SET_DESACTIVE_WINDOW", payload: "contactForm" })} />
				</div>

				<div className={darkMode ? "readme-template__body contact-form-window dark-mode" : "readme-template__body contact-form-window"}>
					<div className="content">
                        <h1>Contact</h1>
                        {/* <h3>Réponse en moins de 24h ⏱️</h3> */}
						<div className="grey-separator"></div>
                        <form ref={form} onSubmit={sendEmail}>
                            <div className="form">
                                <div>
                                    {/* <label htmlFor="name">
                                        Nom <span>*</span> :<br />
                                        <input name="name" type="text" minLength="3" maxLength="24" pattern="[a-z A-Z]{3,24}" placeholder="Paul" value={name} onChange={(e) => setName(e.target.value)} required />
                                        {nameError && <div className="error">Nom invalide.</div>}
                                    </label>
                                    <br />
                                    <label htmlFor="compagny">
                                        Entreprise :<br />
                                        <input name="compagny" type="text" maxLength="24" pattern="[a-z A-Z]{2,24}" placeholder="Hochon" value={compagny} onChange={(e) => setCompagny(e.target.value)} />
                                        {compagnyError && <div className="error">Le nom est invalide.</div>}
                                    </label> */}
                                    <br />
                                    <label htmlFor="mail">
                                        Email <span>*</span> :<br />
                                        <input name="mail" type="text" minLength="1" maxLength="24" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$" placeholder="paulhochon@mail.com" value={mail} onChange={(e) => setMail(e.target.value)} required />
                                        {mailError && <div className="error">L'email est invalide</div>}
                                    </label>
                                    <br />
                                </div>

                                <label htmlFor="message">
                                    Message <span>*</span> :<br />
                                    <textarea name="message" type="text" placeholder="Message..." minLength="12" maxLength="300" value={message} onChange={(e) => setMessage(e.target.value)} required />
                                    {messageError && <div className="error">Le message est trop court</div>}
                                </label>
                                <br />
                            </div>
                            {messageSent && <p className="message-sent">Merci pour votre message, je vous répondrai au plus vite 😀</p>}
                            
                            <div className="cta-container">
                                    <input className={darkMode ? "cta-btn-dark-mode" : "cta-btn"} type="submit" value="Envoyer" />
                            </div>
                        </form>

					</div>
				</div>
			</div>
		</Rnd>
	);
};

export default ContactForm;
