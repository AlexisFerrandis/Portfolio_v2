import mapDown from "../../../../../../../assets/graphics/maps/umbrella_town/houses/house_two/down.png";
import mapUp from "../../../../../../../assets/graphics/maps/umbrella_town/houses/house_two/up.png"
import { collisions } from './MapCollision';

import { asGridCoords, loadWall, withGrid } from '../../../../../../../Utils';

import blank from "../../../../../../../assets/graphics/characters/blank.png";
import npcA from "../../../../../../../assets/graphics/characters/npcB.png";
import npcB from "../../../../../../../assets/graphics/characters/trainer_ELITEFOUR_Agatha.png";
import npcC from "../../../../../../../assets/graphics/characters/trainer_LEADER_Misty.png";

// import musicBg from "../../../../../../../assets/audio/background_music/ViridianCity.ogg"

export const UTHouseTwo = {
    id: "UTHouseTwo",
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
            x: withGrid(13),
            y: withGrid(15),
            src: npcA,
            behaviorLoop: [
                { type: "stand", direction: "down", time: 4200},
                { type: "stand", direction: "right", time: 3200},
                { type: "walk", direction: "down"},
                { type: "stand", direction: "down", time: 4200},
                { type: "stand", direction: "right", time: 3200},
                { type: "walk", direction: "up"},
            ],
            talking : [
                {
                    events: [
                        { type: "textMessage", text: "C'était mieux avant.", facePlayer: "npcA" },
                        { type: "textMessage", text: "De mon temps on mangeait des bons cailloux.", facePlayer: "npcA" },
                    ]
                }
            ]
        }),
        npcB: ({
            type: "Person",
            x: withGrid(19),
            y: withGrid(14),
            src: npcB,
            behaviorLoop: [
                { type: "stand", direction: "down", time: 4200},
            ],
            talking : [
                {
                    events: [
                        { type: "textMessage", text: "Aujourd'hui c'est très simple,", facePlayer: "npcB" },
                        { type: "textMessage", text: "Les jeunes ne veulent plus travailler.", facePlayer: "npcB" },
                    ]
                }
            ]
        }),
        npcC: ({
            type: "Person",
            x: withGrid(11),
            y: withGrid(19),
            src: npcC,
            behaviorLoop: [
                { type: "stand", direction: "up", time: 3300},
                { type: "stand", direction: "right", time: 5300},
            ],
            talking : [
                {
                    events: [
                        { type: "textMessage", text: "Ma Mamie c'est la meilleur !", facePlayer: "npcC" },
                    ]
                }
            ]
        }),

        booksA: ({
            type: "Person",
            x: withGrid(10),
            y: withGrid(11),
            src: blank,
            behaviorLoop: [
                { type: "stand", direction: "down", time: 5200},
            ],
            talking : [
                {
                    events: [
                        { type: "textMessage", text: "Des livres sur le Japon.", facePlayer: "booksA" },
                    ]
                }
            ]
        }),
        booksB: ({
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
                        { type: "textMessage", text: "Des livres sur la Russie.", facePlayer: "booksB" },
                    ]
                }
            ]
        }),
        booksC: ({
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
                        { type: "textMessage", text: "Des livres sur l'Allemagne.", facePlayer: "booksC" },
                    ]
                }
            ]
        }),
        booksD: ({
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
                        { type: "textMessage", text: "Des livres sur l'Industrie.", facePlayer: "booksC" },
                    ]
                }
            ]
        }),
        sign: ({
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
                        { type: "textMessage", text: "Boomer Certification.", facePlayer: "sign" },
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
                        { type: "textMessage", text: "Il semble que le feu commence à faiblir.", facePlayer: "tv" },
                        { type: "textMessage", text: "Nous vous tiendrons informé."},
                    ]
                }
            ]
        }),
    },
    walls: loadWall(collisions),
    // grass: loadGrass(grass),
    cutsceneSpaces: {
        [asGridCoords(17, 20)]: [
            {
                events: [
                    { 
                        type: "changeMap", 
                        map: "UmbrellaTown",
                        soundEffect: "doors",
                        x: withGrid(17),
                        y: withGrid(44),
                        direction: 'down',
                    },
                ]
            }
        ],
    }
}