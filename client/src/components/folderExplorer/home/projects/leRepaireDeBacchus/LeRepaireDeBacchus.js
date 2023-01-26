import React, { useState } from "react";
import { useDispatch } from "react-redux";

// img
import lrdbLogo from "../../../../../assets/folder/projects/lerepairedebacchus/bacchus.jpg";
import readMe from "../../../../../assets/folder/projects/text-x-po.svg";
import externalLink from "../../../../../assets/components/icons/export.png"

// video
import lrdbPreview from "../../../../../assets/folder/projects/lerepairedebacchus/bacchus-preview.mp4";

const LeRepaireDeBacchus = () => {
	const dispatch = useDispatch();
	const [videoPlaying, setVideoPlaying] = useState(false);

	const openText = (e) => {
		dispatch({ type: "SET_ACTIVE_WINDOW", payload: "lrdbReadMe" });
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
					<video src={lrdbPreview} autoPlay loop onEnded={endPreview} className="video-preview" />
				</div>
			)}
			<div className="folder" onClick={() => window.open("https://www.lerepairedebacchus.com/", "_blank")} onMouseEnter={startPreview} onMouseLeave={endPreview}>
				<img src={lrdbLogo} alt="Le Repaire de bacchus" className="folder-pic" />
				<p>Le Repaire de Bacchus</p>
				<div className="redirection lrdb">
					<img src={externalLink} alt="Redirige vers le site Le Repaire de Bacchus" />
				</div>
			</div>
			<div className="folder" onClick={(e) => openText(e)}>
				<img src={readMe} alt="projects" className="folder-pic" />
				<p>Info.txt</p>
			</div>

			
		</div>
	);
};

export default LeRepaireDeBacchus;
