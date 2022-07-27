import React, { useState } from "react";

import Battery from "./Battery";
import Details from "./Details";
import Volume from "./Volume";

// img
import network from "../../../../assets/navbars/topnavbar/network-wireless.svg";
import Language from "./Language";

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
				<Battery />
			</div>
			{detailsDisplay && <Details closeWindow={handleSettinsModal} />}
		</>
	);
};

export default Settings;
