import mapDown from "../../../../../../../assets/graphics/maps/umbrella_town/turtle_pillow/first_floor/down.png";
import mapUp from "../../../../../../../assets/graphics/maps/umbrella_town/turtle_pillow/first_floor/up.png"
import { collisions } from './MapCollision';

import { asGridCoords, loadWall, withGrid } from '../../../../../../../Utils';

import blank from "../../../../../../../assets/graphics/characters/blank.png";
import npcA from "../../../../../../../assets/graphics/characters/trainer_POKEMONTRAINER_Brendan.png";
import npcB from "../../../../../../../assets/graphics/characters/trainer_LEADER_Erika.png";
import npcC from "../../../../../../../assets/graphics/characters/profChen.png";

// import musicBg from "../../../../../../../assets/audio/background_music/ViridianCity.ogg"

export const TurtlePillowFirstFloor = {
    id: "TurtlePillowFirstFloor",
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
            x: withGrid(15),
            y: withGrid(14),
            src: npcA,
            behaviorLoop: [
                { type: "stand", direction: "down", time: 4200},
            ],
            talking : [
                {
                    events: [
                        { type: "textMessage", text: "Bonjour!", facePlayer: "npcA" },
                        { type: "textMessage", text: "Je suis Alexis, le développeur du jeu.", facePlayer: "npcA" },
                        { type: "textMessage", text: "J'espère que tu t'amuses bien :)", facePlayer: "npcA" },
                    ]
                }
            ]
        }),
        npcB: ({
            type: "Person",
            x: withGrid(12),
            y: withGrid(17),
            src: npcB,
            behaviorLoop: [
                { type: "stand", direction: "down", time: 4200},
            ],
            talking : [
                {
                    events: [
                        { type: "textMessage", text: "Le jeu est fait en Javascript Vanilla à 100%!", facePlayer: "npcB" },
                    ]
                }
            ]
        }),
        npcC: ({
            type: "Person",
            x: withGrid(20),
            y: withGrid(15),
            src: npcC,
            behaviorLoop: [
                { type: "stand", direction: "down", time: 4200},
                { type: "walk", direction: "right"},
                { type: "stand", direction: "down", time: 5200},
                { type: "walk", direction: "left"},
            ],
            talking : [
                {
                    events: [
                        { type: "textMessage", text: "Ha Sacha!", facePlayer: "npcC" },
                        { type: "textMessage", text: "Comment se passe ton aventure?", facePlayer: "npcC" },
                    ]
                }
            ]
        }),
        computer: ({
            type: "Person",
            x: withGrid(18),
            y: withGrid(16),
            src: blank,
            behaviorLoop: [
                { type: "stand", direction: "down", time: 5200},
            ],
            talking : [
                {
                    events: [
                        { type: "textMessage", text: "Pleins de lignes de code.", facePlayer: "computer" },
                    ]
                }
            ]
        }),
        vitr1: ({
            type: "Person",
            x: withGrid(11),
            y: withGrid(11),
            src: blank,
            behaviorLoop: [
                { type: "stand", direction: "down", time: 5200},
            ],
            talking : [
                {
                    events: [
                        { type: "textMessage", text: "Développement en un peu moins d'un mois.", facePlayer: "vitr1" },
                    ]
                }
            ]
        }),
        vitr2: ({
            type: "Person",
            x: withGrid(12),
            y: withGrid(11),
            src: blank,
            behaviorLoop: [
                { type: "stand", direction: "down", time: 5200},
            ],
            talking : [
                {
                    events: [
                        { type: "textMessage", text: "Assets Pokemon Essentials.", facePlayer: "vitr2" },
                    ]
                }
            ]
        }),
        vitr3: ({
            type: "Person",
            x: withGrid(13),
            y: withGrid(11),
            src: blank,
            behaviorLoop: [
                { type: "stand", direction: "down", time: 5200},
            ],
            talking : [
                {
                    events: [
                        { type: "textMessage", text: "Gimp, Tiled, Audacity.", facePlayer: "vitr3" },
                    ]
                }
            ]
        }),
        vitr4: ({
            type: "Person",
            x: withGrid(14),
            y: withGrid(11),
            src: blank,
            behaviorLoop: [
                { type: "stand", direction: "down", time: 5200},
            ],
            talking : [
                {
                    events: [
                        { type: "textMessage", text: "Fabriqué avec amour.", facePlayer: "vitr4" },
                    ]
                }
            ]
        }),
        vitr5: ({
            type: "Person",
            x: withGrid(16),
            y: withGrid(11),
            src: blank,
            behaviorLoop: [
                { type: "stand", direction: "down", time: 5200},
            ],
            talking : [
                {
                    events: [
                        { type: "textMessage", text: "Une photo de JCVD.", facePlayer: "vitr5" },
                    ]
                }
            ]
        }),
    },
    walls: loadWall(collisions),
    // grass: loadGrass(grass),
    cutsceneSpaces: {
        [asGridCoords(21, 12)]: [
            {
                events: [
                    { 
                        type: "changeMap", 
                        map: "TurtlePillowSecondFloor",
                        soundEffect: "stairs",
                        x: withGrid(20),
                        y: withGrid(12),
                        direction: 'left',
                    },
                ]
            }
        ],
        [asGridCoords(13, 21)]: [
            {
                events: [
                    { 
                        type: "changeMap", 
                        map: "UmbrellaTown",
                        soundEffect: "doors",
                        x: withGrid(40),
                        y: withGrid(41),
                        direction: 'down',
                    },
                ]
            }
        ],
    }
}