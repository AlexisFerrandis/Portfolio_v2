import React, { useRef, useState } from "react";
import { Rnd } from "react-rnd";
import { useSelector } from "react-redux";

import CloseWindow from "../buttons/CloseWindow";

import Home from "./home/Home";
import Projects from "./home/projects/Projects";
import Pictures from "./home/pictures/Pictures";
import Music from "./home/music/Music";
import Videos from "./home/videos/Videos";
import Games from "./home/games/Games";
import Contact from "./home/contact/Contact";
import Settings from "./home/settings/Settings";

// img
import folder from "./../../assets/navbars/principalnavbar/folder-yellow.svg";
import home from "./../../assets/folder/user-home-symbolic.svg";

import documentsIco from "./../../assets/folder/folder-open-symbolic.svg";
import picturesIco from "./../../assets/folder/folder-pictures-symbolic.svg";
import musicIco from "./../../assets/folder/emblem-music-symbolic.svg";
import videoIco from "./../../assets/folder/video-x-generic-symbolic.svg";
import gamesIco from "./../../assets/folder/applications-games-symbolic.svg";
import contactIco from "./../../assets/folder/contact-new-symbolic.svg";
import settingsIco from "./../../assets/folder/gear.svg";

const FolderExplorer = ({ closeWindow }) => {
	const lang = useSelector((state) => state.globalVariablesReducer.language);
	const darkMode = useSelector((state) => state.globalVariablesReducer.darkMode);

	const nodeRef = useRef(null);

	const [homeDisplay, setHomeDisplay] = useState(true);
	const [projectsDisplay, setProjectsDisplay] = useState(false);
	const [picturesDisplay, setPicturesDisplay] = useState(false);
	const [musicDisplay, setMusicDisplay] = useState(false);
	const [videosDisplay, setVideosDisplay] = useState(false);
	const [gamesDisplay, setGamesDisplay] = useState(false);
	const [contactDisplay, setContactDisplay] = useState(false);

	const [settingsDisplay, setSettingsDisplay] = useState(false);

	const handleNavSelection = (e) => {
		e.preventDefault();

		setHomeDisplay(false);
		setProjectsDisplay(false);
		setPicturesDisplay(false);
		setMusicDisplay(false);
		setVideosDisplay(false);
		setGamesDisplay(false);
		setContactDisplay(false);
		setSettingsDisplay(false);

		switch (e.target.id) {
			case "home":
				setHomeDisplay(true);
				break;
			case "projects":
				setProjectsDisplay(true);
				break;
			case "pictures":
				setPicturesDisplay(true);
				break;
			case "music":
				setMusicDisplay(true);
				break;
			case "videos":
				setVideosDisplay(true);
				break;
			case "games":
				setGamesDisplay(true);
				break;

			case "contact":
				setContactDisplay(true);
				break;
			case "settings":
				setSettingsDisplay(true);
				break;

			default:
				setHomeDisplay(true);
				break;
		}
	};

	return (
		<Rnd
			default={{
				x: document.documentElement.clientWidth / 2 - 610 / 2,
				y: 100,
				width: 610,
				height: 350,
			}}
			minWidth={375}
			minHeight={300}
			disableDragging={false}
			bounds={".app-delimitation"}
			enableResizing={{ bottomRight: true, bottomLeft: true }}
			dragHandleClassName={"folder-explorer__header"}
		>
			<div ref={nodeRef} className="window-template folder-explorer">
				{/* header */}
				<div className="folder-explorer__header">
					<div className="folder-explorer__header--title">
						<img src={folder} alt="folder" className="folder-ico" />
						{homeDisplay && (
							<div className="text">
								<img src={home} alt="home" className="header-ico" />
								<p>Home</p>
							</div>
						)}
						{projectsDisplay && (
							<div className="text">
								<img src={documentsIco} alt="projects" className="header-ico" />
								<p>{lang === "Fr" ? "Projets" : "Projects"}</p>
							</div>
						)}
						{picturesDisplay && (
							<div className="text">
								<img src={picturesIco} alt="pictures" className="header-ico" />
								<p>{lang === "Fr" ? "Images" : "Pictures"}</p>
							</div>
						)}
						{musicDisplay && (
							<div className="text">
								<img src={musicIco} alt="music" className="header-ico" />
								<p>{lang === "Fr" ? "Musique" : "Music"}</p>
							</div>
						)}
						{videosDisplay && (
							<div className="text">
								<img src={videoIco} alt="videos" className="header-ico" />
								<p>{lang === "Fr" ? "Vidéos" : "Videos"}</p>
							</div>
						)}
						{gamesDisplay && (
							<div className="text">
								<img src={gamesIco} alt="games" className="header-ico" />
								<p>{lang === "Fr" ? "Jeux" : "Games"}</p>
							</div>
						)}
						{contactDisplay && (
							<div className="text">
								<img src={contactIco} alt="contact" className="header-ico" />
								<p>Contact</p>
							</div>
						)}
						{settingsDisplay && (
							<div className="text">
								<img src={settingsIco} alt="settings" className="header-ico" />
								<p>{lang === "Fr" ? "Paramètres" : "Settings"}</p>
							</div>
						)}
					</div>
					<CloseWindow closeWindow={closeWindow} />
				</div>

				{/* body */}
				<div className="folder-explorer__body">
					{/* navbar */}
					<div className="folder-explorer__body--navbar">
						<div className={homeDisplay ? "folder-explorer__body--navbar--item active" : "folder-explorer__body--navbar--item"} onClick={(e) => handleNavSelection(e)} id="home">
							<img src={home} alt="home" className="navbar-ico home-ico" />
							<p>Home</p>
						</div>

						<div className={projectsDisplay ? "folder-explorer__body--navbar--item active" : "folder-explorer__body--navbar--item"} onClick={(e) => handleNavSelection(e)} id="projects">
							<img src={documentsIco} alt="projects" className="navbar-ico" />
							<p>{lang === "Fr" ? "Projets" : "Projects"}</p>
						</div>
						<div className={picturesDisplay ? "folder-explorer__body--navbar--item active" : "folder-explorer__body--navbar--item"} onClick={(e) => handleNavSelection(e)} id="pictures">
							<img src={picturesIco} alt="pictures" className="navbar-ico" />
							<p>{lang === "Fr" ? "Images" : "Pictures"}</p>
						</div>
						<div className={musicDisplay ? "folder-explorer__body--navbar--item active" : "folder-explorer__body--navbar--item"} onClick={(e) => handleNavSelection(e)} id="music">
							<img src={musicIco} alt="music" className="navbar-ico" />
							<p>{lang === "Fr" ? "Musique" : "Music"}</p>
						</div>
						<div className={videosDisplay ? "folder-explorer__body--navbar--item active" : "folder-explorer__body--navbar--item"} onClick={(e) => handleNavSelection(e)} id="videos">
							<img src={videoIco} alt="videos" className="navbar-ico" />
							<p>{lang === "Fr" ? "Vidéos" : "Videos"}</p>
						</div>
						<div className={gamesDisplay ? "folder-explorer__body--navbar--item active" : "folder-explorer__body--navbar--item"} onClick={(e) => handleNavSelection(e)} id="games">
							<img src={gamesIco} alt="games" className="navbar-ico" />
							<p>{lang === "Fr" ? "Jeux" : "Games"}</p>
						</div>
						<div className={contactDisplay ? "folder-explorer__body--navbar--item active" : "folder-explorer__body--navbar--item"} onClick={(e) => handleNavSelection(e)} id="contact">
							<img src={contactIco} alt="contact" className="navbar-ico" />
							<p>Contact</p>
						</div>

						<div className="navbar-footer">
							<div className={settingsDisplay ? "folder-explorer__body--navbar--item active" : "folder-explorer__body--navbar--item"} onClick={(e) => handleNavSelection(e)} id="settings">
								<img src={settingsIco} alt="settings" className="navbar-ico" />
								<p>{lang === "Fr" ? "Paramètres" : "Settings"}</p>
							</div>
						</div>
					</div>

					{/* content */}
					<div className={darkMode ? "folder-explorer__body--content dark-mode" : "folder-explorer__body--content"}>
						{homeDisplay && <Home path={handleNavSelection} />}

						{projectsDisplay && <Projects />}
						{picturesDisplay && <Pictures />}
						{musicDisplay && <Music />}
						{videosDisplay && <Videos />}
						{gamesDisplay && <Games />}
						{contactDisplay && <Contact />}
						{settingsDisplay && <Settings />}
					</div>
				</div>
			</div>
		</Rnd>
	);
};

export default FolderExplorer;
