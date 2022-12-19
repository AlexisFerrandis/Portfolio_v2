import mapDown from "../../../../../../../assets/graphics/maps/umbrella_town/houses/house_four/down.png";
import mapUp from "../../../../../../../assets/graphics/maps/umbrella_town/houses/house_four/up.png"
import { collisions } from './MapCollision';

import { asGridCoords, loadWall, withGrid } from '../../../../../../../Utils';

import blank from "../../../../../../../assets/graphics/characters/blank.png";
import npcA from "../../../../../../../assets/graphics/characters/trainer_ELITEFOUR_Bruno.png";
import npcB from "../../../../../../../assets/graphics/characters/trainer_LEADER_Brock.png";
import npcC from "../../../../../../../assets/graphics/characters/trainer_CHANELLER.png";

// import musicBg from "../../../../../../../assets/audio/background_music/ViridianCity.ogg"

export const UTHouseSix = {
    id: "UTHouseSix",
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
            x: withGrid(19),
            y: withGrid(15),
            src: npcA,
            behaviorLoop: [
                { type: "stand", direction: "down", time: 4200},
            ],
            talking : [
                {
                    events: [
                        { type: "textMessage", text: "Aquali est un Pokémomn controversé.", facePlayer: "npcA" },
                        { type: "textMessage", text: "Mais j'aimerai bien en avoir un.", facePlayer: "npcA" },
                    ]
                }
            ]
        }),
        npcB: ({
            type: "Person",
            x: withGrid(19),
            y: withGrid(16),
            src: npcB,
            behaviorLoop: [
                { type: "stand", direction: "up", time: 4200},
            ],
            talking : [
                {
                    events: [
                        { type: "textMessage", text: "Voltali a beaucoup plus de charisme!", facePlayer: "npcB" },
                        { type: "textMessage", text: "En plus il est jaune!", facePlayer: "npcB" },
                    ]
                }
            ]
        }),
        npcC: ({
            type: "Person",
            x: withGrid(12),
            y: withGrid(17),
            src: npcC,
            behaviorLoop: [
                { type: "walk", direction: "right"},
                { type: "walk", direction: "right"},
                { type: "walk", direction: "right"},
                { type: "stand", direction: "down", time:5200},
                { type: "walk", direction: "down"},
                { type: "walk", direction: "left"},
                { type: "walk", direction: "left"},
                { type: "walk", direction: "left"},
                { type: "stand", direction: "left", time: 7200},
                { type: "walk", direction: "up"},
            ],
            talking : [
                {
                    events: [
                        { type: "textMessage", text: "Pyroli pyro pyroli!", facePlayer: "npcC" },
                        { type: "textMessage", text: "Pyroli?", facePlayer: "npcC" },
                        { type: "textMessage", text: "Pyroli!", facePlayer: "npcC" },
                    ]
                }
            ]
        }),
        booksA: ({
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
                        { type: "textMessage", text: "Pourquoi les Hélicoptères fascinent tant.", facePlayer: "booksA" },
                    ]
                }
            ]
        }),
        booksB: ({
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
                        { type: "textMessage", text: "Les anecdotes de Michel Planche.", facePlayer: "booksB" },
                    ]
                }
            ]
        }),
        tv: ({
            type: "Person",
            x: withGrid(17),
            y: withGrid(11),
            src: blank,
            behaviorLoop: [
                { type: "stand", direction: "down", time: 5200},
            ],
            talking : [
                {
                    events: [
                        { type: "textMessage", text: "Félindra, tête de tigre !", facePlayer: "tv" },
                    ]
                }
            ]
        }),
    },
    walls: loadWall(collisions),
    // grass: loadGrass(grass),
    cutsceneSpaces: {
        [asGridCoords(18, 20)]: [
            {
                events: [
                    { 
                        type: "changeMap", 
                        map: "UmbrellaTown",
                        soundEffect: "doors",
                        x: withGrid(64),
                        y: withGrid(61),
                        direction: 'down',
                    },
                ]
            }
        ],
    }
}