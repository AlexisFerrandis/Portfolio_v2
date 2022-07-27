import React, { useEffect } from "react";
import { useSelector } from "react-redux";

const Brightness = () => {
	const globalVariables = useSelector((state) => state.globalVariablesReducer);

	useEffect(() => {
		document.getElementsByClassName("desktop-brightness-container")[0].style.backgroundColor = `rgba(0,0,0,${(100 - globalVariables.brightness) / 100 - 0.3})`;
	});

	return <div className="desktop-brightness-container"></div>;
};

export default Brightness;
