import React from "react";
import { useSelector } from "react-redux";

// windows
import LrdbReadMe from "../folderExplorer/home/projects/leRepaireDeBacchus/ReadMe";
import HelloWorld from "../windows/HelloWorld";
import Pokemon from "../windows/Pokemon";
import Facedook from "../windows/Facedook";
import Chatbot from "../windows/Chatbot";

const Windows = () => {
	const activesWindows = useSelector((state) => state.activesWindowsReducer);

	return (
		<div className="desktop-windows-container">
			{activesWindows.helloWorld && <HelloWorld />}

			{activesWindows.lrdbReadMe && <LrdbReadMe />}

			{activesWindows.pokemon && <Pokemon />}
			{activesWindows.facedook && <Facedook />}
			{activesWindows.chatbot && <Chatbot />}

		</div>
	)
};

export default Windows;
