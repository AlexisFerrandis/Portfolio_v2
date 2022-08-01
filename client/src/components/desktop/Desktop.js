import React from "react";

// img
import desktopWpp from "../../assets/desktop/desktop_wpp.jpg";
import PrincipalNavBar from "../navbars/principalnavbar/PrincipalNavBar";
import TopNavBar from "../navbars/topnavbar/TopNavBar";
import Brightness from "./Brightness";

const index = () => {
	return (
		<div id="desktopInterface">
			<div className="app-delimitation"></div>
			<Brightness />
			<img className="desktop-wpp" src={desktopWpp} alt="desktopWpp" />
			<TopNavBar />
			<PrincipalNavBar />
		</div>
	);
};

export default index;
