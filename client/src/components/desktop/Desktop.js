import React from "react";
import { useSelector } from "react-redux";

// img
// import desktopWpp from "../../assets/desktop/desktop_wpp.jpg";
import desktopWpp from "../../assets/desktop/desktop_wpp.webp";
import desktopWppDark from "../../assets/desktop/desktop_wpp_dark.jpg";
// import desktopLogo from "../../assets/logos/logo-full.png";
import desktopLogo from "../../assets/logos/logo-full.webp";

import PrincipalNavBar from "../navbars/principalnavbar/PrincipalNavBar";
import TopNavBar from "../navbars/topnavbar/TopNavBar";
import Brightness from "./Brightness";
import Windows from "./Windows";

const Desktop = () => {
	const darkMode = useSelector((state) => state.globalVariablesReducer.darkMode);

	return (
		<div id="desktopInterface">
			<div className="app-delimitation" id="appDelimitation"></div>
			<Windows />
			<Brightness />
			<div>
				<img className="desktop-wpp" src={darkMode ? desktopWppDark : desktopWpp} alt="desktop wallpaper" id="desktopWpp"/>
				{/* {darkMode ? <img className="desktop-wpp dark-wpp" src={desktopWppDark} alt="desktop wallpaper" />: <img className="desktop-wpp light-wpp" src={desktopWpp} alt="desktop wallpaper" />} */}
			</div>
			<img className={darkMode ? "desktop-logo dark-logo" : "desktop-logo"} src={desktopLogo} alt="desktop logo" />
			<TopNavBar />
			<PrincipalNavBar />
		</div>
	);
};

export default Desktop;
