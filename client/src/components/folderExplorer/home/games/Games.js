import React from "react";
import { useDispatch } from "react-redux";

// img
import documentsFolder from "../../../../assets/folder/folder-adwaita.svg";

const Games = () => {
	const dispatch = useDispatch();
	const handleApplicationsPath = (e) => {
		e.preventDefault();

		dispatch({ type: "FOLDER_PATH", payload: e.target.id });
	};

	return (
		<div className="container">
			<div className="folder" onClick={(e) => handleApplicationsPath(e)} id="pokemon">
				<img src={documentsFolder} alt="Applications" className="folder-pic" />
				<p>Pokémon</p>
			</div>
		</div>
	)
};

export default Games;
