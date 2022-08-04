import React from "react";
import { useSelector } from "react-redux";

import Home from "./home/Home";
import Projects from "./home/projects/Projects";
import Applications from "./home/apps/Applications";
import Pictures from "./home/pictures/Pictures";
import Music from "./home/music/Music";
import Videos from "./home/videos/Videos";
import Games from "./home/games/Games";
import Contact from "./home/contact/Contact";

import LeRepaireDeBacchus from "./home/projects/leRepaireDeBacchus/LeRepaireDeBacchus";

const Content = () => {
	const folderPath = useSelector((state) => state.folderPathReducer.path);

	return (
		<div>
			{folderPath === "home" && <Home />}

			{folderPath === "projects" && <Projects />}
			{folderPath === "apps" && <Applications />}
			{folderPath === "pictures" && <Pictures />}
			{folderPath === "music" && <Music />}
			{folderPath === "videos" && <Videos />}
			{folderPath === "games" && <Games />}
			{folderPath === "contact" && <Contact />}

			{folderPath === "leRepaireDeBacchus" && <LeRepaireDeBacchus />}
		</div>
	);
};

export default Content;
