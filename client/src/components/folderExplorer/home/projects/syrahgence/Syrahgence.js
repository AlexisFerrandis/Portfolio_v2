import React, { useState } from "react";
import { useDispatch } from "react-redux";

// img
import bllogo from "../../../../../assets/folder/projects/syrahgence/icon.png";
import readMe from "../../../../../assets/folder/projects/text-x-po.svg";
import externalLink from "../../../../../assets/components/icons/export.png"

// video
import sypreview from "../../../../../assets/folder/projects/syrahgence/preview.mp4";

const Syrahgence = () => {
	const dispatch = useDispatch();
	const [videoPlaying, setVideoPlaying] = useState(false);

	const openText = (e) => {
		dispatch({ type: "SET_ACTIVE_WINDOW", payload: "syrahgenceReadMe" });
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
					<video src={sypreview} autoPlay loop onEnded={endPreview} className="video-preview" />
				</div>
			)}

			<div className="folder" onClick={() => window.open("https://syrahgence.fr/", "_blank")} onMouseEnter={startPreview} onMouseLeave={endPreview}>
				<img src={bllogo} alt="Syrahgence" className="folder-pic" />
				<p>Syrahgence</p>
				<br/>
				<div className="redirection syrah">
					<img src={externalLink} alt="Redirige vers le site Le Repaire de bacchus" />
				</div>
			</div>
			<div className="folder" onClick={(e) => openText(e)}>
				<img src={readMe} alt="projects" className="folder-pic" />
				<p>Info.txt</p>
			</div>

			
		</div>
	);
};

export default Syrahgence;
