import React from "react";
import { useSelector } from "react-redux";

// windows
import HelloWorld from "../windows/HelloWorld";
import Pokemon from "../windows/Pokemon";
import Facedook from "../windows/Facedook";
// import Chatbot from "../windows/Chatbot";

import LrdbReadMe from "../folderExplorer/home/projects/leRepaireDeBacchus/ReadMe";
import ElodisPascalReadMe from "../folderExplorer/home/projects/elodiePascal/ReadMe";
import BenjaminLaigretReadMe from "../folderExplorer/home/projects/benjaminLaigret/ReadMe";
import SyrahgenceReadMe from "../folderExplorer/home/projects/syrahgence/ReadMe";

import FacedookReadMe from "../folderExplorer/home/apps/facedook/ReadMe";

import PokemonReadMe from "../folderExplorer/home/games/pokemon/ReadMe";
import ContactForm from "../windows/ContactForm";

const Windows = () => {
	const activesWindows = useSelector((state) => state.activesWindowsReducer);

	return (
		<div className="desktop-windows-container">
			{activesWindows.helloWorld && <HelloWorld />}

			{activesWindows.lrdbReadMe && <LrdbReadMe />}
			{activesWindows.elodiePascalReadMe && <ElodisPascalReadMe />}
			{activesWindows.benjaminLaigretReadMe && <BenjaminLaigretReadMe />}
			{activesWindows.syrahgenceReadMe && <SyrahgenceReadMe />}

			{activesWindows.facedookReadMe && <FacedookReadMe />}

			{activesWindows.pokemonReadMe && <PokemonReadMe />}

			{activesWindows.pokemon && <Pokemon />}
			{activesWindows.facedook && <Facedook />}
			{/* {activesWindows.chatbot && <Chatbot />} */}
			
			{activesWindows.contactForm && <ContactForm />}
		</div>
	)
};

export default Windows;
