import React from "react";
import { useDispatch, useSelector } from "react-redux";

const Language = ({ context }) => {
	const dispatch = useDispatch();
	const globalVariables = useSelector((state) => state.globalVariablesReducer);

	const setFrench = (e) => {
		dispatch({ type: "SET_LANGUAGE", payload: "Fr" });
		// localStorage.setItem("language", "Fr")
	};

	const setEnglish = (e) => {
		dispatch({ type: "SET_LANGUAGE", payload: "En" });
		// localStorage.setItem("language", "En")
	};

	return (
		<>
			{context === "details" ? (
				<button className="settings-details__content--setting">
					<div className="setting">
						<p className={globalVariables.language === "Fr" ? "active-language" : ""} onClick={setFrench}>
							{globalVariables.language === "Fr" ? "Français" : "French"}
						</p>
						<p className={globalVariables.language === "En" ? "active-language" : ""} onClick={setEnglish}>
							{globalVariables.language === "Fr" ? "Anglais" : "English"}
						</p>
					</div>
				</button>
			) : (
				<div className="settings-img language-container">{globalVariables.language === "Fr" ? "Fr" : "En"}</div>
			)}
		</>
	);
};

export default Language;
