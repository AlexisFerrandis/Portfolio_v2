import React from "react";

import Clock from "./Clock";
import Settings from "./Settings";

const TopNavBar = () => {
	return (
		<div className="top-nav-bar">
			<div className="top-nav-bar__left"></div>
			<div className="top-nav-bar__date">
				<Clock />
			</div>
			<div className="top-nav-bar__settings">
				<Settings />
			</div>
		</div>
	);
};

export default TopNavBar;
