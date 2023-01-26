import React from "react";
import { useDispatch, useSelector } from "react-redux";

// img
import home from "./../../assets/folder/user-home-symbolic.svg";

import documentsIco from "./../../assets/folder/folder-open-symbolic.svg";
import appsIco from "./../../assets/folder/applications-engineering-symbolic.svg";
// import picturesIco from "./../../assets/folder/folder-pictures-symbolic.svg";
// import musicIco from "./../../assets/folder/emblem-music-symbolic.svg";
// import videoIco from "./../../assets/folder/video-x-generic-symbolic.svg";
import gamesIco from "./../../assets/folder/applications-games-symbolic.svg";
import contactIco from "./../../assets/folder/contact-new-symbolic.svg";

const NavBar = () => {
	const dispatch = useDispatch();
	const lang = useSelector((state) => state.globalVariablesReducer.language);
	const folderPath = useSelector((state) => state.folderPathReducer.path);

	const handleNavSelection = (e) => {
		e.preventDefault();
		dispatch({ type: "FOLDER_PATH", payload: e.target.id });
	};

	return (
		<div>
			<div className={folderPath === "home" ? "folder-explorer__body--navbar--item active" : "folder-explorer__body--navbar--item"} onClick={(e) => handleNavSelection(e)} id="home">
				<img src={home} alt="home" className="navbar-ico home-ico" />
				<p>Home</p>
			</div>

			<div className={folderPath === "projects" || folderPath === "leRepaireDeBacchus" || folderPath === "elodiePascal" || folderPath === "benjaminLaigret" || folderPath === "syrahgence" ? "folder-explorer__body--navbar--item active" : "folder-explorer__body--navbar--item"} onClick={(e) => handleNavSelection(e)} id="projects">
				<img src={documentsIco} alt="projects" className="navbar-ico" />
				<p>{lang === "Fr" ? "Projets" : "Projects"}</p>
			</div>
			<div className={folderPath === "apps" || folderPath === "facedook" ? "folder-explorer__body--navbar--item active" : "folder-explorer__body--navbar--item"} onClick={(e) => handleNavSelection(e)} id="apps">
				<img src={appsIco} alt="applications" className="navbar-ico" />
				<p>Applications</p>
			</div>

			{/* <div className={folderPath === "pictures" ? "folder-explorer__body--navbar--item active" : "folder-explorer__body--navbar--item"} onClick={(e) => handleNavSelection(e)} id="pictures">
				<img src={picturesIco} alt="pictures" className="navbar-ico" />
				<p>{lang === "Fr" ? "Images" : "Pictures"}</p>
			</div>
			<div className={folderPath === "music" ? "folder-explorer__body--navbar--item active" : "folder-explorer__body--navbar--item"} onClick={(e) => handleNavSelection(e)} id="music">
				<img src={musicIco} alt="music" className="navbar-ico" />
				<p>{lang === "Fr" ? "Musique" : "Music"}</p>
			</div>
			<div className={folderPath === "videos" ? "folder-explorer__body--navbar--item active" : "folder-explorer__body--navbar--item"} onClick={(e) => handleNavSelection(e)} id="videos">
				<img src={videoIco} alt="videos" className="navbar-ico" />
				<p>{lang === "Fr" ? "Vidéos" : "Videos"}</p>
			</div> */}

			<div className={folderPath === "games" || folderPath === "pokemon" ? "folder-explorer__body--navbar--item active" : "folder-explorer__body--navbar--item"} onClick={(e) => handleNavSelection(e)} id="games">
				<img src={gamesIco} alt="games" className="navbar-ico" />
				<p>{lang === "Fr" ? "Jeux" : "Games"}</p>
			</div>
			<div className={folderPath === "contact" ? "folder-explorer__body--navbar--item active" : "folder-explorer__body--navbar--item"} onClick={(e) => handleNavSelection(e)} id="contact">
				<img src={contactIco} alt="contact" className="navbar-ico" />
				<p>Contact</p>
			</div>
		</div>
	);
};

export default NavBar;
