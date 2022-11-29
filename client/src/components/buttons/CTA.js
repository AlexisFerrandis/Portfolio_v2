import React from "react";
import { useSelector } from "react-redux";

const CTA = ({ ctaAction, ctaValue }) => {
	const darkMode = useSelector((state) => state.globalVariablesReducer.darkMode);

	return (
		<div className="cta-container" onClick={ctaAction}>
			<button className={darkMode ? "cta-btn-dark-mode" : "cta-btn"}>
				{ctaValue}
			</button>
		</div>
	);
};

export default CTA;
