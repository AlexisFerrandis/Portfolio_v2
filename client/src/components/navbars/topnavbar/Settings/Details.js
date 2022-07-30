import React from "react";
import { useDispatch, useSelector } from "react-redux";

import CloseWindow from "../../../buttons/CloseWindow";
import Battery from "./Battery";
import Volume from "./Volume";
import Language from "./Language";

// img
import batteryFull from "../../../../assets/navbars/topnavbar/battery-full.svg";
import sunflower from "../../../../assets/navbars/topnavbar/sunflower.svg";
import gear from "../../../../assets/navbars/topnavbar/gear.svg";
import github from "../../../../assets/navbars/topnavbar/github.svg";
import envelope from "../../../../assets/navbars/topnavbar/envelope.svg";

const Details = ({ closeWindow }) => {
	const dispatch = useDispatch();
	const globalVariables = useSelector((state) => state.globalVariablesReducer);

	const handleBrightnessModification = (e) => {
		dispatch({ type: "SET_BRIGHTNESS", payload: e.target.value });
	};

	return (
		<div className="settings-details window-template">
			<div className="settings-details__header">
				{navigator.userAgent.includes("Firefox") ? (
					<div className="settings-img">
						<img src={batteryFull} alt="battery-charging" className="details" />
						<p>{100}%</p>
					</div>
				) : (
					<Battery context="details" />
				)}
				<CloseWindow closeWindow={closeWindow} />
			</div>
			<div className="settings-details__content">
				<Volume context="details" />
				<button className="settings-details__content--setting">
					<div className="setting">
						<img src={sunflower} alt="brightness-level" className="sunflower" />
						<input type="range" min="0" max="100" id="range" defaultValue={globalVariables.brightness} onChange={handleBrightnessModification} />
					</div>
				</button>
				<Language context="details" />
				<button className="settings-details__content--setting">
					<div className="setting">
						<div className="footer-ico">
							<img src={gear} alt="settings" />
						</div>
						<div className="footer-ico">
							<img src={envelope} alt="send message" />
						</div>
						<div className="footer-ico">
							<img src={github} alt="github" />
						</div>
					</div>
				</button>
			</div>
		</div>
	);
};

export default Details;

// import React from "react";
// import CloseWindow from "../../../buttons/CloseWindow";
// import Battery from "./Battery";

// // img
// import gear from "../../../../assets/navbars/topnavbar/gear.svg";
// import github from "../../../../assets/navbars/topnavbar/github.svg";
// import envelope from "../../../../assets/navbars/topnavbar/envelope.svg";
// import Volume from "./Volume";
// import Brightness from "./Brightness";

// const Details = ({ closeWindow }) => {
// 	return (
// 		<div className="settings-details window-template">
// 			<div className="settings-details__header">
// 				<Battery context="details" />
// 				<CloseWindow closeWindow={closeWindow} />
// 			</div>
// 			<div className="settings-details__content">
// 				<Volume />
// 				<Brightness />
// 				<button className="menu-navigation-btn-container">
// 					<div className="menu-btn">
// 						<p>Français</p>
// 						<p>Anglais</p>
// 					</div>
// 				</button>
// 				<button className="menu-navigation-btn-container">
// 					<div className="menu-btn">
// 						<img src={gear} alt="settings" className="footer-ico" />
// 						<img src={envelope} alt="send message" className="footer-ico" />
// 						<img src={github} alt="github" className="footer-ico" />
// 					</div>
// 				</button>
// 			</div>
// 		</div>
// 	);
// };

// export default Details;
