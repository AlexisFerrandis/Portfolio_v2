import React from 'react';
import "./touch-input.scss"

import icon from "../../../assets/graphics/controller/ico.png"


export default class TouchInput extends React.Component { 
    constructor(config) {
        super(config);

        this.isActive = false;

        this.heldDirections = [];

        this.map = {
            "ArrowUp" : "up",
            "ArrowDown" : "down",
            "ArrowLeft" : "left",
            "ArrowRight" : "right",

            "Space" : "Space",
            "button-b" : "button-b",
            "start" : "start",
        }
    };

    createElement() {
		this.element = document.createElement("div");
		this.element.classList.add("touch-input");

        let controller = `
            <button class="open-controller" data="open">
                <img src=${icon} alt="controller class="icon" />
            </button>

            <div class="controller">
                <div class="princpipal-buttons">
                    <div class="joystick">
                        <div class="arrow up controller-btn" data="ArrowUp">△</div> 
                        <div class="left-right">
                            <div class="arrow left controller-btn"  data="ArrowLeft">◁</div>
                            <div class="arrow right controller-btn"  data="ArrowRight">▷</div>
                        </div> 
                        <div class="arrow down controller-btn"  data="ArrowDown">▽</div> 

                    </div>
                    <div class="buttons">
                        <button class="button button-b controller-btn" data="button-b">B</button>
                        <button class="button button-a controller-btn" data="Space">A</button>
                    </div>
                </div>
                <div class="secondary-buttons">
                    <button class="start" data="start">start</button>
                </div>
            </div>
        `
        this.element.innerHTML += controller;
    }

    get direction() {
        return this.heldDirections[0];
    }

    init(container) {
        this.createElement();
		container.appendChild(this.element);
        
        const controllerDisplay = document.querySelector(".open-controller")
        controllerDisplay.addEventListener("click", () => {
            const controller = document.querySelector(".controller");
            controller.classList.toggle("controller-display")
        })

        // touch listener 
        const buttons = document.querySelectorAll(".controller-btn")
        for (let i = 0; i < buttons.length; i ++) {
            buttons[i].addEventListener("mousedown", () => {
                console.log("focus");
                const dir = this.map[buttons[i].getAttribute("data")];
                if (dir && this.heldDirections.indexOf(dir)) {
                    document.dispatchEvent(new KeyboardEvent('keydown', {'code': buttons[i].getAttribute("data")}));

                    setTimeout(() => {
                        document.dispatchEvent(new KeyboardEvent('keyup', {'code': buttons[i].getAttribute("data")}));
                    }, 500)
                }
            })
        }
	}
};