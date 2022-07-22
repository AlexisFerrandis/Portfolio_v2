import React from "react";

// img
import batteryEmpty from "../../assets/components/buttons/black-cross.svg";

const CloseWindow = () => {
	return (
		<div className="close-window-btn-container">
			<button className="close-btn">
				<img src={batteryEmpty} alt="close" />
			</button>
		</div>
	);
};

export default CloseWindow;
