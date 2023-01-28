import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { Rnd } from "react-rnd";

import CloseWindow from "./../buttons/CloseWindow";
import PokemonApp from "./../apps/pokemon/PokemonApp"

// img
import logo from "./../../assets/logos/pokemon.ico"

const Pokemon = () => {
	const dispatch = useDispatch();
	const nodeRef = useRef(null);
	let windowX = document.documentElement.clientWidth / 8;


	if (window.innerWidth < 420) {
		windowX = 10; 
	}
	
	const handleZindex = (e) => {
		const windows = document.querySelectorAll(".draggable-z-index");
		for (let i = 0; i < windows.length; i++) {
			windows[i].style.zIndex = 99;
		}
		e.target.closest(".draggable-z-index").style.zIndex = 100;
	}

	return (
		<Rnd
			default={{
				x: windowX,
				y: document.documentElement.clientHeight / 2 - 620 / 2,
				width: 660,
				height: 375,
			}}
			minWidth={560}
			maxWidth={650}
			minHeight={340}
			maxHeight={400}
			disableDragging={false}
			bounds={".app-delimitation"}
			enableResizing={{ bottomRight: true, bottomLeft: true }}
			dragHandleClassName={"readme-template__header"}
			cancel={".close-window-btn-container, p"}
			className={"draggable-z-index"}

		>
			<div ref={nodeRef} className="window-template readme-template app-pokemon" onClick={(e) => {handleZindex(e)}} >
				<div className="readme-template__header">
					<div className="readme-template__header--title">
						<img src={logo} alt="logo" className="icon" />
						<p>Pokemon</p>
					</div>
					<CloseWindow closeWindow={(e) => dispatch({ type: "SET_DESACTIVE_WINDOW", payload: "pokemon" })} />
				</div>
				<div className="pokemon-window">
					<div className="content">
                        <PokemonApp />
					</div>
				</div>
			</div>
		</Rnd>
	);
};

export default Pokemon;
