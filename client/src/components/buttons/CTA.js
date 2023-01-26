import React from "react";
import { useSelector, useDispatch } from "react-redux";

const CTA = ({ ctaValue }) => {
	const dispatch = useDispatch();
	const darkMode = useSelector((state) => state.globalVariablesReducer.darkMode);

	const openText = (e) => {
		dispatch({ type: "SET_ACTIVE_WINDOW", payload: "contactForm" });
	};

	return (
		<div className="cta-container" onClick={(e) => openText(e)}>
			<button className={darkMode ? "cta-btn-dark-mode" : "cta-btn"}>
				{ctaValue}
			</button>
		</div>
	);
};

export default CTA;
