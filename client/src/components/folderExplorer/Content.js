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
import ElodiePascal from "./home/projects/elodiePascal/ElodiePascal";
import BenjaminLaigret from "./home/projects/benjaminLaigret/BenjaminLaigret";
import Syrahgence from "./home/projects/syrahgence/Syrahgence";

import Facedook from "./home/apps/facedook/Facedook";

import Pokemon from "./home/games/pokemon/Pokemon";

const Content = () => {
	const folderPath = useSelector((state) => state.folderPathReducer.path);

	return (
		<>
			{folderPath === "home" && <Home />}

			{folderPath === "projects" && <Projects />}
			{folderPath === "apps" && <Applications />}
			{folderPath === "pictures" && <Pictures />}
			{folderPath === "music" && <Music />}
			{folderPath === "videos" && <Videos />}
			{folderPath === "games" && <Games />}
			{folderPath === "contact" && <Contact />}

			{folderPath === "leRepaireDeBacchus" && <LeRepaireDeBacchus />}
			{folderPath === "elodiePascal" && <ElodiePascal />}
			{folderPath === "benjaminLaigret" && <BenjaminLaigret />}
			{folderPath === "syrahgence" && <Syrahgence />}

			{folderPath === "facedook" && <Facedook />}

			{folderPath === "pokemon" && <Pokemon />}
		</>
	);
};

export default Content;
