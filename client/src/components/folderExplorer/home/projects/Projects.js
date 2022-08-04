import React from "react";
import { useDispatch } from "react-redux";

// img
import documentsFolder from "../../../../assets/folder/folder-adwaita.svg";

const Projects = () => {
	const dispatch = useDispatch();
	const handleProjectsPath = (e) => {
		e.preventDefault();

		dispatch({ type: "FOLDER_PATH", payload: e.target.id });
	};

	return (
		<div className="container">
			<div className="folder" onDoubleClick={(e) => handleProjectsPath(e)} id="leRepaireDeBacchus">
				<img src={documentsFolder} alt="projects" className="folder-pic" />
				<p>Le Repaire de Bacchus</p>
			</div>
		</div>
	);
};

export default Projects;
