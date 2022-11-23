import React from "react";
import { useSelector } from "react-redux";

// windows
import LrdbReadMe from "../folderExplorer/home/projects/leRepaireDeBacchus/ReadMe";
import HelloWorld from "../windows/HelloWorld";

const Windows = () => {
	const activesWindows = useSelector((state) => state.activesWindowsReducer);

	return <div className="desktop-windows-container">
			{activesWindows.helloWorld && <HelloWorld />}
			{activesWindows.lrdbReadMe && <LrdbReadMe />}
		</div>;
};

export default Windows;
