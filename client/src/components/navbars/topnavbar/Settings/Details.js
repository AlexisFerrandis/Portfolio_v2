import React from "react";
import { useDispatch, useSelector } from "react-redux";

import CloseWindow from "../../../buttons/CloseWindow";
import Battery from "./Battery";
import Volume from "./Volume";
import Language from "./Language";

// img
import batteryFull from "../../../../assets/navbars/topnavbar/battery-full.svg";
import moon from "../../../../assets/navbars/topnavbar/moon.svg";
import sunflower from "../../../../assets/navbars/topnavbar/sunflower.svg";
// import gear from "../../../../assets/navbars/topnavbar/gear.svg";
import github from "../../../../assets/navbars/topnavbar/github.svg";
import linkedin from "../../../../assets/navbars/topnavbar/linkedin.svg";
import envelope from "../../../../assets/navbars/topnavbar/envelope.svg";

const Details = ({ closeWindow }) => {
	const dispatch = useDispatch();
	const globalVariables = useSelector((state) => state.globalVariablesReducer);
	const darkMode = useSelector((state) => state.globalVariablesReducer.darkMode);
	// const activesWindows = useSelector((state) => state.activesWindowsReducer);

	const handleBrightnessModification = (e) => {
		dispatch({ type: "SET_BRIGHTNESS", payload: e.target.value });
	};

	const handleDarkModeModification = (e) => {
		dispatch({ type: "SET_DARK_MODE", payload: !globalVariables.darkMode });
	};

	// const handleSettingsDisplay = (e) => {
	// 	e.preventDefault();
	// 	dispatch({ type: "SET_ACTIVE_WINDOW", payload: "Folder" });
	// };

	const handleContactDisplay = (e) => {
		e.preventDefault();
		dispatch({ type: "SET_ACTIVE_WINDOW", payload: "contactPage" });
	};

	return (
		<div className={darkMode ? "settings-details window-template dark-moded" : "settings-details window-template"}>
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
						<div className={globalVariables.darkMode ? "dark-mode dark-mode-active" : "dark-mode"} onClick={handleDarkModeModification}>
							<img src={moon} alt="dark-mode" className="details" />
							{globalVariables.language === "Fr" ? "Mode sombre" : "Dark mode"}
						</div>
					</div>
				</button>

				<div className="settings-details__content--setting">
					<div className="setting">
						<div className="footer-ico">
							<img src={envelope} alt="send message" onClick={(e) => handleContactDisplay(e)} />
						</div>
						{/* <div className="footer-ico">
							<img src={gear} alt="settings" onClick={(e) => handleSettingsDisplay(e)} />
						</div> */}
						<div className="footer-ico">
							<a href="https://github.com/AlexisFerrandis" target="_blank" rel="noreferrer">
								<img src={github} alt="github" />
							</a>
						</div>
						<div className="footer-ico">
							<a href="https://fr.linkedin.com/in/alexis-ferrandis-5b5343106" target="_blank" rel="noreferrer">
								<img src={linkedin} alt="linkedin" />
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Details;
