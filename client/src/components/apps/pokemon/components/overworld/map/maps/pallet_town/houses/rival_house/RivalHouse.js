import mapDown from "./../../../../../../../assets/graphics/maps/pallet_town/houses/rival_house/down.png";
import mapUp from "./../../../../../../../assets/graphics/maps/pallet_town/houses/rival_house/up.png";
import { collisions } from './MapCollision';

import { asGridCoords, loadWall, withGrid } from './../../../../../../../Utils';


import blank from "./../../../../../../../assets/graphics/characters/blank.png"

import npcCherry from "./../../../../../../../assets/graphics/characters/npcCherry.png"


export const RivalHouse = {
    id: "RivalHouse",
    lowerSrc: mapDown,
    upperSrc: mapUp,
    gameObjects: {},
    configObjects: {
        player: ({
            type: "Person",
            isPlayerControlled: true,
            canRun: false,
        }),
        npcCherry: ({
            type: "Person",
            x: withGrid(14),
            y: withGrid(11),
            src: npcCherry,
            behaviorLoop: [
                { type: "stand", direction: "left", time: 2000 },
            ],
            talking : [
                {
                    required: ["TALKED_TO_CHEN_FIRST_TIME"],
                    events: [
                        { type: "textMessage", text: "Cherry: Mon frère vient de partir pour Jadielle.", facePlayer: "npcCherry" },
                        { type: "textMessage", text: "Cherry: Tant mieux j'ai du mal à le supporter.", facePlayer: "npcCherry" },
                    ]
                },
                {
                    events: [
                        { type: "textMessage", text: "Cherry: Mon frère est au laboratoire du Prof Chen.", facePlayer: "npcCherry"},
                        { type: "textMessage", text: "Cherry: Je crois qu'il récupère son premier Pokemon.", facePlayer: "npcCherry"},
                    ]
                },
            ]
        }),
        tv: ({
            type: "Person",
            x: withGrid(11),
            y: withGrid(7),
            src: blank,
            talking : [
                {
                    events: [
                        { type: "textMessage", text: "La Team Rocket a encore frappé!"},
                        { type: "textMessage", text: "Ils ont volé toutes les pokéballs du sud du continent."},
                        { type: "textMessage", text: "Nous vous tiendrons informé."},
                    ]
                },
            ]
        }),
        dishes: ({
            type: "Person",
            x: withGrid(6),
            y: withGrid(7),
            src: blank,
            talking : [
                {
                    events: [
                        { type: "textMessage", text: "Ce n'est pas très propre."},
                    ]
                },
            ]
        }),
        bookshelf1: ({
            type: "Person",
            x: withGrid(17),
            y: withGrid(7),
            src: blank,
            talking : [
                {
                    events: [
                        { type: "textMessage", text: "Des livres sur les motos."},
                    ]
                },
            ]
        }),
        bookshelf2: ({
            type: "Person",
            x: withGrid(18),
            y: withGrid(7),
            src: blank,
            talking : [
                {
                    events: [
                        { type: "textMessage", text: "Des livres sur les roues de motos."},
                    ]
                },
            ]
        }),
    },
    walls: loadWall(collisions),
    cutsceneSpaces: {
        [asGridCoords(10, 16)]: [
            {
                events: [
                    { 
                        type: "changeMap", 
                        map: "PalletTown",
                        soundEffect: "doors",
                        x: withGrid(43),
                        y: withGrid(56),
                        direction: 'down',
                    },
                ]
            }
        ]
    }
}