import React from "react";

const CTA = ({ closeWindow }) => {
	return (
		<div className="close-window-btn-container" onClick={closeWindow}>
			<button className="close-btn">
				{/* <img src={cross} alt="close" /> */}
			</button>
		</div>
	);
};

export default CTA;
