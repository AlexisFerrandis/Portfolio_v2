import mapDown from "../../../../../../../../assets/graphics/maps/pokemon_center/second_floor/down.png";
import mapUp from "../../../../../../../../assets/graphics/maps/pokemon_center/second_floor/up.png";
import { collisions } from '../../../../poke-center/second_floor/MapCollision';

import { asGridCoords, loadWall, withGrid } from '../../../../../../../../Utils';


import blank from "../../../../../../../../assets/graphics/characters/blank.png";
import npcNurse from "../../../../../../../../assets/graphics/characters/npcNurse.png";
import npcGImg from "../../../../../../../../assets/graphics/characters/npcM.png";
import npcNImg from "../../../../../../../../assets/graphics/characters/trainer_LEADER_Sabrina.png";

export const UTPokeCenterSecondFloor = {
    id: "UTPokeCenterSecondFloor",
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
                        { type: "textMessage", text: "J'ai jamais eu les pieds sur terre.", facePlayer: "npcB" },
                        { type: "textMessage", text: "J'aimerai bien être un Roucool.", facePlayer: "npcB" },
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
            x: withGrid(17),
            y: withGrid(23),
            src: npcNImg,
            behaviorLoop: [
                { type: "stand", direction: "up", time: 4200},
            ],
            talking : [
                {
                    events: [
                        { type: "textMessage", text: "Je dois rejoindre mon frère à Lavanville.", facePlayer: "npcC" },
                    ]
                }
            ]
        }),
        npcD: ({
            type: "Person",
            x: withGrid(25),
            y: withGrid(21),
            src: npcGImg,
            behaviorLoop: [
                { type: "stand", direction: "left", time: 4200},
                { type: "stand", direction: "down", time: 6200},
            ],
            talking : [
                {
                    events: [
                        { type: "textMessage", text: "Tout est pourtant clair.", facePlayer: "npcD" },
                        { type: "textMessage", text: "N'est ce pas?", facePlayer: "npcD" },
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
                        { type: "textMessage", text: "Promotion exceptionnelle!", facePlayer: "telA" },
                        { type: "textMessage", text: "Une loutre achetée, la deuxième est offerte!", facePlayer: "telA" },
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
                        { type: "textMessage", text: "Promotion exceptionnelle!", facePlayer: "telA" },
                        { type: "textMessage", text: "Une loutre achetée, la deuxième est offerte!", facePlayer: "telA" },
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
                        map: "UTPokeCenterFirstFloor",
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