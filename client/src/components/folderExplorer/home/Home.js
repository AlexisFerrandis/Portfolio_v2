import React from "react";
import { useDispatch, useSelector } from "react-redux";

// img
import documentsFolder from "../../../assets/folder/folder-adwaita.svg";
import appsFolder from "../../../assets/folder/folder-adwaita-projects.svg";
// import picturesfolder from "../../../assets/folder/folder-adwaita-pictures.svg";
// import musicFolder from "../../../assets/folder/folder-adwaita-music.svg";
// import videoFolder from "../../../assets/folder/folder-adwaita-video.svg";
import gamesFolder from "../../../assets/folder/folder-adwaita-games.svg";
import contactFolder from "../../../assets/folder/folder-adwaita-image-people.svg"

const Home = ({ path }) => {
	const dispatch = useDispatch();
	const lang = useSelector((state) => state.globalVariablesReducer.language);

	const handleProjectsPath = (e) => {
		dispatch({ type: "FOLDER_PATH", payload: e.target.id });
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
				<img src={gamesFolder} alt="projects" className="folder-pic" />
				<p>{lang === "Fr" ? "Jeux" : "Games"}</p>
			</div>
			<div className="folder" onClick={(e) => handleProjectsPath(e)} id="contact">
				<img src={contactFolder} alt="contact" className="folder-pic" />
				<p>{lang === "Fr" ? "Contact" : "Contact"}</p>
			</div>

		</div>
	);
};

export default Home;
