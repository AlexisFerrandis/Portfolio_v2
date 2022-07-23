import React, { useState } from "react";

import Battery from "./Battery";

// img
import volume from "../../../../assets/navbars/topnavbar/audio-volume-high.svg";
import network from "../../../../assets/navbars/topnavbar/network-wireless-hotspot.svg";
import Details from "./Details";

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
				<div className="settings-img">Fr</div>
				<div className="settings-img network-container">
					<img src={network} alt="network-level" />
				</div>
				<div className="settings-img">
					<img src={volume} alt="volume-level" />
				</div>
				<Battery />
			</div>
			{detailsDisplay && <Details closeWindow={handleSettinsModal} />}
		</>
	);
};

export default Settings;
