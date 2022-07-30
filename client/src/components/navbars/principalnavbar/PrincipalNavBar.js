import React, { useState } from "react";

import FolderExplorer from "../../folder/FolderExplorer";

//img
import folder from "./../../../assets/navbars/principalnavbar/folder-yellow.svg";
import console from "./../../../assets/navbars/principalnavbar/gnome-console.svg";
import facebook from "./../../../assets/navbars/principalnavbar/facebook.svg";
import netflix from "./../../../assets/navbars/principalnavbar/netflix.svg";
import chat from "./../../../assets/navbars/principalnavbar/gnome-robots.svg";
import games from "./../../../assets/navbars/principalnavbar/game-boy.svg";
import menu from "./../../../assets/navbars/principalnavbar/menu-opener.svg";

const PrincipalNavBar = () => {
	const [openFolder, setOpenFolder] = useState(false);

	const handleFolderOpening = (e) => {
		setOpenFolder(!openFolder);
	};

	return (
		<>
			{openFolder && <FolderExplorer />}
			<div className="principal-nav-bar">
				<div className="principal-nav-bar__icon" onClick={handleFolderOpening}>
					<img src={folder} alt="folder" />
				</div>
				<div className="principal-nav-bar__icon">
					<img src={console} alt="console" />
				</div>
				<div className="principal-nav-bar__icon">
					<img src={facebook} alt="facebook" />
				</div>
				<div className="principal-nav-bar__icon">
					<img src={netflix} alt="netflix" />
				</div>
				<div className="principal-nav-bar__icon">
					<img src={chat} alt="chat" />
				</div>
				<div className="principal-nav-bar__icon">
					<img src={games} alt="video-games" />
				</div>

				<div className="principal-nav-bar__icon menu-icon">
					<img src={menu} alt="menu" />
				</div>
			</div>
		</>
	);
};

export default PrincipalNavBar;
