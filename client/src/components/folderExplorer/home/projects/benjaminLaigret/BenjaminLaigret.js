import React, { useState } from "react";
import { useDispatch } from "react-redux";

// img
import bllogo from "../../../../../assets/folder/projects/benjaminlaigret/icon.jpg";
import readMe from "../../../../../assets/folder/projects/text-x-po.svg";
import externalLink from "../../../../../assets/components/icons/export.png"

// video
import blpreview from "../../../../../assets/folder/projects/benjaminlaigret/benjamin-preview.mp4";

const BenjaminLaigret = () => {
	const dispatch = useDispatch();
	const [videoPlaying, setVideoPlaying] = useState(false);

	const openText = (e) => {
		dispatch({ type: "SET_ACTIVE_WINDOW", payload: "benjaminLaigretReadMe" });
	};

	const startPreview = (e) => {
		setVideoPlaying(true);
	};
	const endPreview = (e) => {
		setVideoPlaying(false);
	};

	return (
		<div className="container">
			{videoPlaying && (
				<div className="video-preview-container">
					<video src={blpreview} autoPlay loop onEnded={endPreview} className="video-preview" />
				</div>
			)}

			<div className="folder" onClick={() => window.open("https://benjaminlaigret.com/", "_blank")} onMouseEnter={startPreview} onMouseLeave={endPreview}>
				<img src={bllogo} alt="Benjamin Laigret" className="folder-pic" />
				<p>Benjamin Laigret</p>
				<div className="redirection bl">
					<img src={externalLink} alt="Redirige vers le site de Benjamin Laigret" />
				</div>
			</div>
			<div className="folder" onClick={(e) => openText(e)}>
				<img src={readMe} alt="projects" className="folder-pic" />
				<p>Info.txt</p>
			</div>

			
		</div>
	);
};

export default BenjaminLaigret;
