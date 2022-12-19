import mapDown from "../../../../../../../assets/graphics/maps/umbrella_town/houses/house_three/down.png";
import mapUp from "../../../../../../../assets/graphics/maps/umbrella_town/houses/house_three/up.png"
import { collisions } from './MapCollision';

import { asGridCoords, loadWall, withGrid } from '../../../../../../../Utils';

import blank from "../../../../../../../assets/graphics/characters/blank.png";
import npcA from "../../../../../../../assets/graphics/characters/trainer_ELITEFOUR_Lance.png";
import npcB from "../../../../../../../assets/graphics/characters/trainer_ELITEFOUR_Lorelei.png";
import npcC from "../../../../../../../assets/graphics/characters/NPC 02.png";

// import musicBg from "../../../../../../../assets/audio/background_music/ViridianCity.ogg"

export const UTHouseFour = {
    id: "UTHouseFour",
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
            x: withGrid(12),
            y: withGrid(17),
            src: npcB,
            behaviorLoop: [
                { type: "walk", direction: "right"},
                { type: "walk", direction: "right"},
                { type: "walk", direction: "right"},
                { type: "stand", direction: "left", time: 4200},
                { type: "walk", direction: "left"},
                { type: "walk", direction: "left"},
                { type: "walk", direction: "left"},
            ],
            talking : [
                {
                    events: [
                        { type: "textMessage", text: "Comment vais je pouvoir lui annoncer...", facePlayer: "npcA" },
                    ]
                }
            ]
        }),
        npcB: ({
            type: "Person",
            x: withGrid(19),
            y: withGrid(12),
            src: npcA,
            behaviorLoop: [
                { type: "stand", direction: "up", time: 4200},
            ],
            talking : [
                {
                    events: [
                        { type: "textMessage", text: "Nous sommes tous les deux roux."},
                        { type: "textMessage", text: "Pourquoi notre fils est blond?"},
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
                { type: "stand", direction: "left", time: 4200},
            ],
            talking : [
                {
                    events: [
                        { type: "textMessage", text: "Vive oncle Jean!", facePlayer: "npcC"},
                    ]
                }
            ]
        }),
        booksA: ({
            type: "Person",
            x: withGrid(20),
            y: withGrid(11),
            src: blank,
            behaviorLoop: [
                { type: "stand", direction: "down", time: 5200},
            ],
            talking : [
                {
                    events: [
                        { type: "textMessage", text: "Les secrets de la génétique.", facePlayer: "booksA" },
                    ]
                }
            ]
        }),
        booksB: ({
            type: "Person",
            x: withGrid(21),
            y: withGrid(11),
            src: blank,
            behaviorLoop: [
                { type: "stand", direction: "down", time: 5200},
            ],
            talking : [
                {
                    events: [
                        { type: "textMessage", text: "Les mystères des Allèles.", facePlayer: "booksB" },
                    ]
                }
            ]
        }),
    },
    walls: loadWall(collisions),
    // grass: loadGrass(grass),
    cutsceneSpaces: {
        [asGridCoords(13, 20)]: [
            {
                events: [
                    { 
                        type: "changeMap", 
                        map: "UmbrellaTown",
                        soundEffect: "doors",
                        x: withGrid(47),
                        y: withGrid(61),
                        direction: 'down',
                    },
                ]
            }
        ],
    }
}