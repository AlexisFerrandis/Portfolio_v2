import React from "react";

// img
// import cross from "../../assets/components/buttons/black-cross.svg";

const CloseWindow = ({ closeWindow }) => {
	return (
		<div className="close-window-btn-container" onClick={closeWindow}>
			<button className="close-btn" alt="Fermer la fenêtre" aria-label="Fermer la fenêtre">
				{/* <img src={cross} alt="close" /> */}
			</button>
		</div>
	);
};

export default CloseWindow;
