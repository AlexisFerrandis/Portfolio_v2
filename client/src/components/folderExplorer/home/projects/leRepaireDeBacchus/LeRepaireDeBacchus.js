import React from "react";

// img
import lrdbLogo from "../../../../../assets/folder/projects/bacchus.jpg";
import readMe from "../../../../../assets/folder/projects/text-x-po.svg";

const LeRepaireDeBacchus = () => {
	const openProject = (e) => {
		// console.log(e);
	};

	const openText = (e) => {
		// console.log(e);
	};
	return (
		<div className="container">
			<div className="folder" onDoubleClick={(e) => openProject(e)}>
				<img src={lrdbLogo} alt="Le Repaire de bacchus" className="folder-pic" />
				<p>Le Repaire de Bacchus</p>
			</div>
			<div className="folder" onDoubleClick={(e) => openText(e)}>
				<img src={readMe} alt="projects" className="folder-pic" />
				<p>README.md</p>
			</div>
		</div>
	);
};

export default LeRepaireDeBacchus;
