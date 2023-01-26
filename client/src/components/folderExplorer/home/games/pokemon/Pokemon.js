import React, { useState } from "react";
import { useDispatch } from "react-redux";

// img
import pkLogo from "../../../../../assets/folder/games/pokemon/pokemon.png";
import readMe from "../../../../../assets/folder/projects/text-x-po.svg";
import github from "../../../../../assets/folder/github.svg";
import externalLink from "../../../../../assets/components/icons/export.png"


// video
import fdPreview from "../../../../../assets/folder/applications/facedook/facedook-preview.mp4";

const Pokemon = () => {
	const dispatch = useDispatch();
	const [videoPlaying, setVideoPlaying] = useState(false);

	const openText = (e) => {
		dispatch({ type: "SET_ACTIVE_WINDOW", payload: "pokemonReadMe" });
	};

	const startPreview = (e) => {
		setVideoPlaying(true);
	};
	const endPreview = (e) => {
		setVideoPlaying(false);
	};

	return (
		<div className="container">
			{videoPlaying && (
				<div className="video-preview-container">
					<video src={fdPreview} autoPlay loop onEnded={endPreview} className="video-preview" />
				</div>
			)}
			<div className="folder" onClick={() => dispatch({ type: "SET_ACTIVE_WINDOW", payload: "pokemon" })} onMouseEnter={startPreview} onMouseLeave={endPreview}>
				<img src={pkLogo} alt="Pokemon" className="folder-pic" />
				<p>Pokémon</p>
			</div>
			<div className="folder" onClick={(e) => openText(e)} >
				<img src={readMe} alt="projects" className="folder-pic" />
				<p>Info.txt</p>
			</div>
            <div className="folder" onClick={() => window.open("https://github.com/AlexisFerrandis/PokemonJS", "_blank")} >
				<img src={github} alt="projects" className="folder-pic github" />
				<p>Github</p>
				<br/>
				<div className="redirection github">
					<img src={externalLink} alt="Redirige vers le Github de ce projet." />
				</div>
			</div>
			
		</div>
	);
};

export default Pokemon;
