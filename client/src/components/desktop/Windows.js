import React from "react";
import { useSelector } from "react-redux";

// windows
import LrdbReadMe from "../folderExplorer/home/projects/leRepaireDeBacchus/ReadMe";

const Windows = () => {
	const activesWindows = useSelector((state) => state.activesWindowsReducer);

	return <div className="desktop-windows-container">{activesWindows.lrdbReadMe && <LrdbReadMe />}</div>;
};

export default Windows;
