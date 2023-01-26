import React, { useState } from "react";
import { useDispatch } from "react-redux";

// img
import eplogo from "../../../../../assets/folder/projects/elodiepascal/favicon.ico";
import readMe from "../../../../../assets/folder/projects/text-x-po.svg";
import externalLink from "../../../../../assets/components/icons/export.png"

// video
import elPreview from "../../../../../assets/folder/projects/elodiepascal/elodie-preview.mp4";

const ElodiePascal = () => {
	const dispatch = useDispatch();
	const [videoPlaying, setVideoPlaying] = useState(false);

	const openText = (e) => {
		dispatch({ type: "SET_ACTIVE_WINDOW", payload: "elodiePascalReadMe" });
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
					<video src={elPreview} autoPlay loop onEnded={endPreview} className="video-preview" />
				</div>
			)}

			<div className="folder" onClick={() => window.open("https://elodiepascal.com/", "_blank")} onMouseEnter={startPreview} onMouseLeave={endPreview}>
				<img src={eplogo} alt="Elodie Pascal" className="folder-pic" />
				<p>Elodie Pascal</p>
				<div className="redirection ep">
					<img src={externalLink} alt="Redirige vers le site d'Elodie Pascal" />
				</div>
			</div>
			<div className="folder" onClick={(e) => openText(e)}>
				<img src={readMe} alt="projects" className="folder-pic" />
				<p>Info.txt</p>
			</div>

			
		</div>
	);
};

export default ElodiePascal;
