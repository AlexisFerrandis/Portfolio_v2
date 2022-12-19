import mapDown from "../../../../../../../assets/graphics/maps/umbrella_town/houses/house_four/down.png";
import mapUp from "../../../../../../../assets/graphics/maps/umbrella_town/houses/house_four/up.png"
import { collisions } from './MapCollision';

import { asGridCoords, loadWall, withGrid } from '../../../../../../../Utils';

import blank from "../../../../../../../assets/graphics/characters/blank.png";
import npcA from "../../../../../../../assets/graphics/characters/trainer_SWIMMER_M.png";
import npcB from "../../../../../../../assets/graphics/characters/trainer_SWIMMER_F.png";

// import musicBg from "../../../../../../../assets/audio/background_music/ViridianCity.ogg"

export const UTHouseNine = {
    id: "UTHouseNine",
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
                        { type: "textMessage", text: "Nous formons le collectif des nageurs de la ville.", facePlayer: "npcA" },
                        { type: "textMessage", text: "Reviens nous voir quand tu auras plus d'expérience", facePlayer: "npcA" },
                    ]
                }
            ]
        }),
        npcB: ({
            type: "Person",
            x: withGrid(11),
            y: withGrid(16),
            src: npcB,
            behaviorLoop: [
                { type: "stand", direction: "right", time: 4200},
                { type: "walk", direction: "right"},
                { type: "walk", direction: "right"},
                { type: "walk", direction: "down"},
                { type: "walk", direction: "down"},
                { type: "walk", direction: "left"},
                { type: "walk", direction: "left"},
                { type: "walk", direction: "up"},
                { type: "walk", direction: "up"},
            ],
            talking : [
                {
                    events: [
                        { type: "textMessage", text: "La natation c'est ma passion.", facePlayer: "npcB" },
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
                        { type: "textMessage", text: "Nager dans la mer.", facePlayer: "booksA" },
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
                        { type: "textMessage", text: "Nager dans un lac.", facePlayer: "booksB" },
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
                        { type: "textMessage", text: "Une information de dernière minute!", facePlayer: "tv" },
                        { type: "textMessage", text: "Le casino abriterait la planque de la Team Rocket!"},
                        { type: "textMessage", text: "Nous vous tiendrons informé."},
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
                        x: withGrid(55),
                        y: withGrid(41),
                        direction: 'down',
                    },
                ]
            }
        ],
    }
}