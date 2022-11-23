import React from "react";
import { useDispatch, useSelector } from "react-redux";

// img
import documentsFolder from "../../../assets/folder/folder-adwaita.svg";
import appsFolder from "../../../assets/folder/folder-adwaita-projects.svg";
// import picturesfolder from "../../../assets/folder/folder-adwaita-pictures.svg";
// import musicFolder from "../../../assets/folder/folder-adwaita-music.svg";
// import videoFolder from "../../../assets/folder/folder-adwaita-video.svg";
import gamesVolder from "../../../assets/folder/folder-adwaita-games.svg";
import presentationFile from "../../../assets/folder/text-x-authors.svg";

const Home = ({ path }) => {
	const dispatch = useDispatch();
	const lang = useSelector((state) => state.globalVariablesReducer.language);

	const handleProjectsPath = (e) => {
		dispatch({ type: "FOLDER_PATH", payload: e.target.id });
	};

	const openText = (e) => {
		dispatch({ type: "SET_ACTIVE_WINDOW", payload: "helloWorld" });
	};

	return (
		<div className="container">
			<div className="folder" onClick={(e) => handleProjectsPath(e)} id="projects">
				<img src={documentsFolder} alt="projects" className="folder-pic" />
				<p>{lang === "Fr" ? "Projets" : "Projects"}</p>
			</div>

			<div className="folder" onClick={(e) => handleProjectsPath(e)} id="apps">
				<img src={appsFolder} alt="applications" className="folder-pic" />
				<p>Applications</p>
			</div>

			{/* <div className="folder" onClick={(e) => handleProjectsPath(e)} id="pictures">
				<img src={picturesfolder} alt="pictures" className="folder-pic" />
				<p>{lang === "Fr" ? "Images" : "Pictures"}</p>
			</div>

			<div className="folder" onClick={(e) => handleProjectsPath(e)} id="music">
				<img src={musicFolder} alt="projects" className="folder-pic" />
				<p>{lang === "Fr" ? "Musique" : "Music"}</p>
			</div>

			<div className="folder" onClick={(e) => handleProjectsPath(e)} id="videos">
				<img src={videoFolder} alt="projects" className="folder-pic" />
				<p>{lang === "Fr" ? "Vidéos" : "Videos"}</p>
			</div> */}

			<div className="folder" onClick={(e) => handleProjectsPath(e)} id="games">
				<img src={gamesVolder} alt="projects" className="folder-pic" />
				<p>{lang === "Fr" ? "Jeux" : "Games"}</p>
			</div>

			<div className="folder" onClick={(e) => openText(e)}>
				<img src={presentationFile} alt="presentation" className="folder-pic" />
				<p>Alexis.html</p>
			</div>
		</div>
	);
};

export default Home;
