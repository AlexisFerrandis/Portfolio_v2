import React from "react";
import { useSelector } from "react-redux";

// img
import folder from "./../../assets/navbars/principalnavbar/folder-yellow.svg";
import home from "./../../assets/folder/user-home-symbolic.svg";

import documentsIco from "./../../assets/folder/folder-open-symbolic.svg";
import appsIco from "./../../assets/folder/applications-engineering-symbolic.svg";
import picturesIco from "./../../assets/folder/folder-pictures-symbolic.svg";
import musicIco from "./../../assets/folder/emblem-music-symbolic.svg";
import videoIco from "./../../assets/folder/video-x-generic-symbolic.svg";
import gamesIco from "./../../assets/folder/applications-games-symbolic.svg";
import contactIco from "./../../assets/folder/contact-new-symbolic.svg";

const Header = () => {
	const lang = useSelector((state) => state.globalVariablesReducer.language);
	const folderPath = useSelector((state) => state.folderPathReducer.path);

	return (
		<div>
			<div className="folder-explorer__header--title">
				<img src={folder} alt="folder" className="folder-ico" />
				{folderPath === "home" && (
					<div className="text">
						<img src={home} alt="home" className="header-ico" />
						<p>{folderPath}</p>
					</div>
				)}
				{folderPath === "projects" && (
					<div className="text">
						<img src={documentsIco} alt="projects" className="header-ico" />
						<p>{folderPath}</p>
					</div>
				)}
				{folderPath === "apps" && (
					<div className="text">
						<img src={appsIco} alt="pictures" className="header-ico" />
						<p>Applications</p>
					</div>
				)}
				{folderPath === "pictures" && (
					<div className="text">
						<img src={picturesIco} alt="pictures" className="header-ico" />
						<p>{lang === "Fr" ? "Images" : "Pictures"}</p>
					</div>
				)}
				{folderPath === "music" && (
					<div className="text">
						<img src={musicIco} alt="music" className="header-ico" />
						<p>{lang === "Fr" ? "Musique" : "Music"}</p>
					</div>
				)}
				{folderPath === "videos" && (
					<div className="text">
						<img src={videoIco} alt="videos" className="header-ico" />
						<p>{lang === "Fr" ? "Vidéos" : "Videos"}</p>
					</div>
				)}
				{folderPath === "games" && (
					<div className="text">
						<img src={gamesIco} alt="games" className="header-ico" />
						<p>{lang === "Fr" ? "Jeux" : "Games"}</p>
					</div>
				)}
				{folderPath === "contact" && (
					<div className="text">
						<img src={contactIco} alt="contact" className="header-ico" />
						<p>Contact</p>
					</div>
				)}
			</div>
		</div>
	);
};

export default Header;
