import mapDown from "../../../../../../../assets/graphics/maps/umbrella_town/houses/house_three/down.png";
import mapUp from "../../../../../../../assets/graphics/maps/umbrella_town/houses/house_three/up.png"
import { collisions } from './MapCollision';

import { asGridCoords, loadWall, withGrid } from '../../../../../../../Utils';

import blank from "../../../../../../../assets/graphics/characters/blank.png";
import npcA from "../../../../../../../assets/graphics/characters/npc3.png";
import npcB from "../../../../../../../assets/graphics/characters/npcE.png";
import npcC from "../../../../../../../assets/graphics/characters/npcZ.png";

// import musicBg from "../../../../../../../assets/audio/background_music/ViridianCity.ogg"

export const UTHouseHeith = {
    id: "UTHouseHeith",
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
            x: withGrid(21),
            y: withGrid(12),
            src: npcB,
            behaviorLoop: [
                { type: "stand", direction: "up", time: 4200},
            ],
            talking : [
                {
                    events: [
                        { type: "textMessage", text: "Je peux lire toute la journée sans jamais m'arrêter!", facePlayer: "npcA" },
                    ]
                }
            ]
        }),
        npcB: ({
            type: "Person",
            x: withGrid(12),
            y: withGrid(14),
            src: npcA,
            behaviorLoop: [
                { type: "walk", direction: "right"},
                { type: "walk", direction: "right"},
                { type: "walk", direction: "right"},
                { type: "stand", direction: "down", time: 5200},
                { type: "walk", direction: "left"},
                { type: "walk", direction: "left"},
                { type: "walk", direction: "left"},
            ],
            talking : [
                {
                    events: [
                        { type: "textMessage", text: "J'ai appris récemment que les citrons sont plus sucrés que les fraises."},
                        { type: "textMessage", text: "C'est fou non?"},
                    ]
                }
            ]
        }),
        npcC: ({
            type: "Person",
            x: withGrid(17),
            y: withGrid(15),
            src: npcC,
            behaviorLoop: [
                { type: "stand", direction: "right", time: 4200},
            ],
            talking : [
                {
                    events: [
                        { type: "textMessage", text: "Rien de tel qu'une bonne raclette!", facePlayer: "npcC"},
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
                        { type: "textMessage", text: "La literie sur mesure.", facePlayer: "booksA" },
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
                        { type: "textMessage", text: "Les pouvoirs du sommeil.", facePlayer: "booksB" },
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
                        x: withGrid(46),
                        y: withGrid(41),
                        direction: 'down',
                    },
                ]
            }
        ],
    }
}