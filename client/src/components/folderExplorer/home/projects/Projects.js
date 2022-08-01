import React, { useState } from "react";

// projects
import LeRepaireDeBacchus from "./leRepaireDeBacchus/LeRepaireDeBacchus";

// img
import documentsFolder from "../../../../assets/folder/folder-adwaita.svg";

const Projects = ({ path }) => {
	const [projectFolder, setProjectFolder] = useState(true);
	const [projectActif, setProjectActif] = useState(false);

	const [leRepaireDeBacchus, setLeRepaireDeBacchus] = useState(false);

	const handleProjectsPath = (e) => {
		e.preventDefault();

		setProjectFolder(false);
		setLeRepaireDeBacchus(false);

		switch (e.target.id) {
			case "leRepaireDeBacchus":
				setLeRepaireDeBacchus(true);
				path("Le Repaire de Bacchus");
				break;

			default:
				setProjectFolder(true);
				break;
		}
	};

	return (
		<div className="container">
			{projectFolder && (
				<div className="folder" onDoubleClick={(e) => handleProjectsPath(e)} id="leRepaireDeBacchus">
					<img src={documentsFolder} alt="projects" className="folder-pic" />
					<p>Le Repaire de Bacchus</p>
				</div>
			)}
			{/* set is project actif do desactiv it when reclick on project */}
			{leRepaireDeBacchus && <LeRepaireDeBacchus />}
		</div>
	);
};

export default Projects;
