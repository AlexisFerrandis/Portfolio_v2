import mapDown from "../../../../../../../assets/graphics/maps/umbrella_town/houses/house_four/down.png";
import mapUp from "../../../../../../../assets/graphics/maps/umbrella_town/houses/house_four/up.png"
import { collisions } from './MapCollision';

import { asGridCoords, loadWall, withGrid } from '../../../../../../../Utils';

import blank from "../../../../../../../assets/graphics/characters/blank.png";
import npcA from "../../../../../../../assets/graphics/characters/NPC 22.png";
import npcB from "../../../../../../../assets/graphics/characters/NPC 14.png";

// import musicBg from "../../../../../../../assets/audio/background_music/ViridianCity.ogg"

export const UTHouseFive = {
    id: "UTHouseFive",
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
            y: withGrid(14),
            src: npcA,
            behaviorLoop: [
                { type: "stand", direction: "right", time: 4200},
            ],
            talking : [
                {
                    events: [
                        { type: "textMessage", text: "J'attends un très gros bébé.", facePlayer: "npcA" },
                        { type: "textMessage", text: "Peut être qu'il y'en a deux.", facePlayer: "npcA" },
                    ]
                }
            ]
        }),
        npcB: ({
            type: "Person",
            x: withGrid(17),
            y: withGrid(13),
            src: npcB,
            behaviorLoop: [
                { type: "stand", direction: "up", time: 4200},
            ],
            talking : [
                {
                    events: [
                        { type: "textMessage", text: "Ce sera le plus beau jour de ma vie!", facePlayer: "npcB" },
                        { type: "textMessage", text: "Non?", facePlayer: "npcB" },
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
                        { type: "textMessage", text: "Faire la cuisine avec Pascal Légitimus.", facePlayer: "booksA" },
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
                        { type: "textMessage", text: "Si ton tonton tond ton tonton ton tonton sera tondu.", facePlayer: "booksB" },
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
                        { type: "textMessage", text: "Patrick Balkany se serait fait greffer des ailes de poulet.", facePlayer: "tv" },
                        { type: "textMessage", text: "Les raisons sont encore floues."},
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
                        x: withGrid(56),
                        y: withGrid(61),
                        direction: 'down',
                    },
                ]
            }
        ],
    }
}