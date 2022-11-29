import React, { useState } from "react";
import { useSelector } from "react-redux";
import FormText from "./FormInputs";

import videoPicto from "../../assets/picto/video-solid.svg"
import picPicto from "../../assets/picto/file-image-solid.svg"
import moodPicto from "../../assets/picto/face-laugh-solid.svg"

const NewPostForm = () => {
	const userData = useSelector((state) => state.userReducer);

	const [textFormModification, setTextFormModification] = useState(false);
	const [propsToDisplay, setPropsToDisplay] = useState("");

	const handlePostFormDisplay = (e) => {
		// switch ?
		if (e.target.className.includes("vanilla")) {
			setPropsToDisplay("vanilla");
		} else if (e.target.className.includes("video")) {
			setPropsToDisplay("video");
		} else if (e.target.className.includes("pic")) {
			setPropsToDisplay("pic");
		} else if (e.target.className.includes("mood")) {
			setPropsToDisplay("mood");
		}

		setTextFormModification(true);
	};

	return (
		<>
			{textFormModification ? <FormText textFormModification={setTextFormModification} display={propsToDisplay} /> : null}
			<div className="post-form-container window-container">
				<div className="header-form">
						<div className="user-pic">
							<img className="profil-pic" crossOrigin="anonymous" src={process.env.REACT_APP_API_URL + userData.picture} alt="user-img"  />
						</div>
					<div className="vanilla-input" onClick={handlePostFormDisplay}>
						<p className="vanilla-props">Quoi de neuf, {userData.pseudo} ?</p>
					</div>
				</div>
				<div className="grey-separator"></div>
				<div className="footer-form">
					<div className="complexe-input video-props" onClick={handlePostFormDisplay}>
						<img className="video-picto" src={videoPicto} alt="video" />
						Ajouter une vidéo
					</div>
					<div className="complexe-input pic-props" onClick={handlePostFormDisplay}>
						<img className="image-picto" src={picPicto} alt="pic" />
						Photo
					</div>
					<div className="complexe-input mood-props" onClick={handlePostFormDisplay}>
						<img className="mood-picto" src={moodPicto} alt="emotion" />
						Humeur/Activité
					</div>
				</div>
			</div>
		</>
	);
};

export default NewPostForm;
