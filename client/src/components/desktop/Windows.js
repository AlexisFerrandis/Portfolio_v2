import React from "react";
import { useSelector } from "react-redux";

// windows
import LrdbReadMe from "../folderExplorer/home/projects/leRepaireDeBacchus/ReadMe";
import HelloWorld from "../windows/HelloWorld";
import Pokemon from "../windows/Pokemon";
import Facedook from "../windows/Facedook";

const Windows = () => {
	const activesWindows = useSelector((state) => state.activesWindowsReducer);

	return (
		<div className="desktop-windows-container">
			{activesWindows.helloWorld && <HelloWorld />}

			{activesWindows.lrdbReadMe && <LrdbReadMe />}

			{activesWindows.pokemon && <Pokemon />}
			{activesWindows.facedook && <Facedook />}

		</div>
	)
};

export default Windows;
