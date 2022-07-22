import React from "react";
import CloseWindow from "../../../buttons/CloseWindow";
import Battery from "./Battery";

// img
import batteryEmpty from "../../../../assets/navbars/topnavbar/battery-empty.svg";
import volume from "../../../../assets/navbars/topnavbar/audio-volume-high.svg";

const Details = () => {
	return (
		<div className="settings-details window-template">
			<div className="settings-details__header">
				<Battery context="details" />
				<CloseWindow />
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
						{/* <img src={batteryEmpty} alt="language" /> */}
						<p>Français</p>
					</div>
				</button>
			</div>
		</div>
	);
};

export default Details;
