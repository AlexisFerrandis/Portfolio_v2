import React from "react";

// img
import desktopWpp from "../../assets/desktop/desktop_wpp.jpg";
import desktopLogo from "../../assets/logos/logo-full.png";

import PrincipalNavBar from "../navbars/principalnavbar/PrincipalNavBar";
import TopNavBar from "../navbars/topnavbar/TopNavBar";
import Brightness from "./Brightness";
import Windows from "./Windows";

const index = () => {
	return (
		<div id="desktopInterface">
			<div className="app-delimitation"></div>
			<Windows />
			<Brightness />
			<img className="desktop-wpp" src={desktopWpp} alt="desktop wallpaper" />
			<img className="desktop-logo" src={desktopLogo} alt="desktop logo" />
			<TopNavBar />
			<PrincipalNavBar />
		</div>
	);
};

export default index;
