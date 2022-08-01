import React from "react";
import { useSelector } from "react-redux";

// img
import documentsFolder from "../../../../assets/folder/folder-adwaita.svg";

const Projects = () => {
	const lang = useSelector((state) => state.globalVariablesReducer.language);

	const handleProjectsPath = (e) => {
		console.log("fire");
	};

	return (
		<div className="container">
			<div className="folder" onDoubleClick={(e) => handleProjectsPath(e)} id="projects">
				<img src={documentsFolder} alt="projects" className="folder-pic" />
				<p>Le Repaire de Bacchus</p>
			</div>
		</div>
	);
};

export default Projects;
