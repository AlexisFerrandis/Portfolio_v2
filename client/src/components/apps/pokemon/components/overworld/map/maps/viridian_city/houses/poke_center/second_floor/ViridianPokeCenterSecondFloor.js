import mapDown from "../../../../../../../../assets/graphics/maps/pokemon_center/second_floor/down.png";
import mapUp from "../../../../../../../../assets/graphics/maps/pokemon_center/second_floor/up.png";
import { collisions } from '../../../../poke-center/second_floor/MapCollision';

import { asGridCoords, loadWall, withGrid } from '../../../../../../../../Utils';


import blank from "../../../../../../../../assets/graphics/characters/blank.png";
import npcNurse from "../../../../../../../../assets/graphics/characters/npcNurse.png";
import npcGImg from "../../../../../../../../assets/graphics/characters/npcG.png";
import npcNImg from "../../../../../../../../assets/graphics/characters/npcN.png";

export const ViridianPokeCenterSecondFloor = {
    id: "ViridianPokeCenterSecondFloor",
    lowerSrc: mapDown,
    upperSrc: mapUp,
    gameObjects: {},
    configObjects: {
        player: ({
            type: "Person",
            isPlayerControlled: true,
            canRun: false,
        }),
        npcA: ({
            type: "Person",
            x: withGrid(14),
            y: withGrid(18),
            src: blank,
            behaviorLoop: [
                { type: "stand", direction: "down", time: 1200},
            ],
            talking : [
                {
                    events: [
                        { type: "textMessage", text: "Ce service sera bientôt disponible.", facePlayer: "npcA" },
                    ]
                }
            ]
        }),
        npcNurseA: ({
            type: "Person",
            x: withGrid(14),
            y: withGrid(17),
            src: npcNurse,
            behaviorLoop: [
                { type: "stand", direction: "down", time: 1200},
            ],
        }),
        npcB: ({
            type: "Person",
            x: withGrid(22),
            y: withGrid(18),
            src: blank,
            behaviorLoop: [
                { type: "stand", direction: "down", time: 1200},
            ],
            talking : [
                {
                    events: [
                        { type: "textMessage", text: "Je n'crois pas qu'il y ait de bonne ou de mauvaise situation.", facePlayer: "npcB" },
                        { type: "textMessage", text: "Je dirais que c'est d'abord des rencontres.", facePlayer: "npcB" },
                    ]
                }
            ]
        }),
        npcNurseB: ({
            type: "Person",
            x: withGrid(22),
            y: withGrid(17),
            src: npcNurse,
            behaviorLoop: [
                { type: "stand", direction: "down", time: 1200},
            ],
        }),
        npcC: ({
            type: "Person",
            x: withGrid(16),
            y: withGrid(23),
            src: npcGImg,
            behaviorLoop: [
                { type: "stand", direction: "up", time: 4200},
            ],
            talking : [
                {
                    events: [
                        { type: "textMessage", text: "J'ai vu le plus gros Soporifik de ma vie hier.", facePlayer: "npcC" },
                    ]
                }
            ]
        }),
        npcD: ({
            type: "Person",
            x: withGrid(23),
            y: withGrid(21),
            src: npcNImg,
            behaviorLoop: [
                { type: "walk", direction: "right"},
                { type: "walk", direction: "left"},
            ],
            talking : [
                {
                    events: [
                        { type: "textMessage", text: "Il n'y a pas de temps!", facePlayer: "npcD" },
                    ]
                }
            ]
        }),
        computer: ({
            type: "Person",
            x: withGrid(17),
            y: withGrid(15),
            src: blank,
            talking : [
                {
                    events: [
                        { type: "textMessage", text: "*Bip* *biiiip* *bip bip* *biiiiip*", facePlayer: "computer" },
                    ]
                }
            ]
        }),
        telA: ({
            type: "Person",
            x: withGrid(18),
            y: withGrid(15),
            src: blank,
            talking : [
                {
                    events: [
                        { type: "textMessage", text: "Nous confirmons que la forêt de Jade est en feu.", facePlayer: "telA" },
                        { type: "textMessage", text: "Nous vous tiendrons informé.", facePlayer: "telA" },
                    ]
                }
            ]
        }),
        telB: ({
            type: "Person",
            x: withGrid(19),
            y: withGrid(15),
            src: blank,
            talking : [
                {
                    events: [
                        { type: "textMessage", text: "Nous confirmons que la forêt de Jade est en feu.", facePlayer: "telA" },
                        { type: "textMessage", text: "Nous vous tiendrons informé.", facePlayer: "telA" },
                    ]
                }
            ]
        }),
    },
    walls: loadWall(collisions),
    cutsceneSpaces: {
        [asGridCoords(11, 21)]: [
            {
                events: [
                    { 
                        type: "changeMap", 
                        map: "ViridianPokeCenterFirstFloor",
                        soundEffect: "stairs",
                        x: withGrid(12),
                        y: withGrid(21),
                        direction: 'right',
                    },
                ]
            }
        ],
    }
}