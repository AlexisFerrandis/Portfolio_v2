import React, { useState } from "react";
import { useDispatch } from "react-redux";

import FolderExplorer from "../../folderExplorer";

//img
import folder from "./../../../assets/navbars/principalnavbar/folder-adwaita.svg";
import facebook from "./../../../assets/navbars/principalnavbar/facebook.png";
import pokemon from "./../../../assets/navbars/principalnavbar/pokemon.png";
// import chatbot from "./../../../assets/navbars/principalnavbar/chatbot.png";

const PrincipalNavBar = () => {
	const dispatch = useDispatch();
	const [openFolder, setOpenFolder] = useState(false);

	const handleFolderOpening = (e) => {
		setOpenFolder(!openFolder);
	};
	const handlePokemonOpenning = (e) => {
		dispatch({ type: "SET_ACTIVE_WINDOW", payload: "pokemon" });
	};
	const handleFacedookOpenning = (e) => {
		dispatch({ type: "SET_ACTIVE_WINDOW", payload: "facedook" });
	};
	const handleChatBotOpenning = (e) => {
		dispatch({ type: "SET_ACTIVE_WINDOW", payload: "chatbot" });
	};

	return (
		<>
			{openFolder && <FolderExplorer closeWindow={handleFolderOpening} />}
			<div className="principal-nav-bar">

				<div className={openFolder ? "principal-nav-bar__icon app-icon active" : "principal-nav-bar__icon app-icon"} onClick={handleFolderOpening}>
					<img src={folder} alt="folder" />
				</div>
				<div className="principal-nav-bar__icon app-icon" onClick={handleFacedookOpenning}>
					<img src={facebook} alt="facebook" />
				</div>
				<div className="principal-nav-bar__icon app-icon" onClick={handlePokemonOpenning}>
					<img src={pokemon} alt="pokemon" />
				</div>
				<div className="principal-nav-bar__icon app-icon" onClick={handleChatBotOpenning}>
				🤖
				</div>

			</div>
		</>
	);
};

export default PrincipalNavBar;
