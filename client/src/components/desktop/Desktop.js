import React from "react";
import { useSelector } from "react-redux";

// img
import desktopWpp from "../../assets/desktop/desktop_wpp.jpg";
import desktopWppDark from "../../assets/desktop/desktop_wpp_dark.jpg";
import desktopLogo from "../../assets/logos/logo-full.png";

import PrincipalNavBar from "../navbars/principalnavbar/PrincipalNavBar";
import TopNavBar from "../navbars/topnavbar/TopNavBar";
import Brightness from "./Brightness";
import Windows from "./Windows";

const Desktop = () => {
	const darkMode = useSelector((state) => state.globalVariablesReducer.darkMode);
	console.log(darkMode);

	return (
		<div id="desktopInterface">
			<div className="app-delimitation"></div>
			<Windows />
			<Brightness />
			{darkMode ? <img className="desktop-wpp" src={desktopWppDark} alt="desktop wallpaper" />: <img className="desktop-wpp" src={desktopWpp} alt="desktop wallpaper" />}
			
			<img className="desktop-logo" src={desktopLogo} alt="desktop logo" />
			<TopNavBar />
			<PrincipalNavBar />
		</div>
	);
};

export default Desktop;
