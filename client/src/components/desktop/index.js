import React from "react";

// img
import desktopWpp from "../../assets/desktop/desktop_wpp.jpg";
import TopNavBar from "../navbars/topnavbar/TopNavBar";

const index = () => {
	return (
		<div id="desktopInterface">
			<img className="desktop-wpp" src={desktopWpp} alt="desktopWpp" />
			<TopNavBar />
		</div>
	);
};

export default index;
