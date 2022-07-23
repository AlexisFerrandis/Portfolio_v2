import React from "react";
import CloseWindow from "../../../buttons/CloseWindow";
import Battery from "./Battery";

// img
import volume from "../../../../assets/navbars/topnavbar/audio-volume-high.svg";
import sunflower from "../../../../assets/navbars/topnavbar/sunflower.svg";
import gear from "../../../../assets/navbars/topnavbar/gear.svg";
import github from "../../../../assets/navbars/topnavbar/github.svg";
import envelope from "../../../../assets/navbars/topnavbar/envelope.svg";

const Details = ({ closeWindow }) => {
	return (
		<div className="settings-details window-template">
			<div className="settings-details__header">
				<Battery context="details" />
				<CloseWindow closeWindow={closeWindow} />
			</div>
			<div className="settings-details__content">
				<button className="menu-navigation-btn-container">
					<div className="menu-btn">
						<img src={volume} alt="volume-level" />
						<input type="range" defaultValue="35" min="0" max="100" id="range" />
					</div>
				</button>
				<button className="menu-navigation-btn-container">
					<div className="menu-btn">
						<img src={sunflower} alt="light-level" className="sunflower" />
						<input type="range" defaultValue="75" min="0" max="100" id="range" />
					</div>
				</button>
				<button className="menu-navigation-btn-container">
					<div className="menu-btn">
						<p>Français</p>
						<p>Anglais</p>
					</div>
				</button>
				<button className="menu-navigation-btn-container">
					<div className="menu-btn">
						<img src={gear} alt="settings" className="footer-ico" />
						<img src={envelope} alt="send message" className="footer-ico" />
						<img src={github} alt="github" className="footer-ico" />
					</div>
				</button>
			</div>
		</div>
	);
};

export default Details;
