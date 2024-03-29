import React from 'react';
import "./player-status.scss"

import KeyPressListener from '../../../player_inputs/KeyPressListener';

import card from "../../../../assets/graphics/menu/card.png"
import boy from "../../../../assets/graphics/menu/boy.png"

import { wait } from '../../../../Utils';

export default class PauseMenu extends React.Component { 
    constructor({onComplete}) {
        super(onComplete);
        
        this.onComplete = onComplete
        this.money = window.playerState.money;
    }

    createElement() {
        this.element = document.createElement("div");
        this.element.classList.add("player-status");

        const window = `
        
        
        <div class="principal-information">
            <div class="left-part">
                <p>NOM: SACHA</p>
                <br />
                <br />
                <br />
                <p>ARGENT: ${this.money}¥</p>
                <br />
                <p>VILLE: BOURG-PALETTE</p>
                <br />
                <p></p>
            </div>
            
            <div class="right-part">
                <img src=${boy} alt="boy" class="trainer-pic" />
            </div>
        </div>
        
        <div class="badges"></div>
        <img src=${card} alt="trainer-card" class="trainer-card" />
        
        `

        this.element.innerHTML += window;
    }
    
    close() {
        this.onComplete();
		this.element.remove();
	}

    async init(container) {
		this.createElement();
		container.appendChild(this.element);

		wait(200);
		this.esc = new KeyPressListener("Escape", () => {
			this.close();
		});
	}
};






