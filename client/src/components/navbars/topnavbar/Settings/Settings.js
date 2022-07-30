import React, { useState } from "react";

import Battery from "./Battery";
import Details from "./Details";
import Volume from "./Volume";
import Language from "./Language";

// img
import network from "../../../../assets/navbars/topnavbar/network-wireless.svg";
import batteryFull from "../../../../assets/navbars/topnavbar/battery-full.svg";

const Settings = () => {
	const [detailsDisplay, setDetailsDisplay] = useState(false);

	const handleSettinsModal = () => {
		setDetailsDisplay(!detailsDisplay);
	};
	window.addEventListener("click", (e) => {
		if (e.target.classList.contains("desktop-wpp")) {
			setDetailsDisplay(false);
		}
	});

	return (
		<>
			<div className="settings" onClick={handleSettinsModal}>
				<Language />
				<div className="settings-img network-container">
					<img src={network} alt="network-level" />
				</div>
				<Volume />
				{navigator.userAgent.includes("Firefox") ? (
					<div className="settings-img">
						<img src={batteryFull} alt="battery-charging" />
					</div>
				) : (
					<Battery />
				)}
			</div>
			{detailsDisplay && <Details closeWindow={handleSettinsModal} />}
		</>
	);
};

export default Settings;
