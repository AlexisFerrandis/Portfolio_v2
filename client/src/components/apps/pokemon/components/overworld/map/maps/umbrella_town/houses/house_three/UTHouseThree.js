import mapDown from "../../../../../../../assets/graphics/maps/umbrella_town/houses/house_three/down.png";
import mapUp from "../../../../../../../assets/graphics/maps/umbrella_town/houses/house_three/up.png"
import { collisions } from './MapCollision';

import { asGridCoords, loadWall, withGrid } from '../../../../../../../Utils';

import blank from "../../../../../../../assets/graphics/characters/blank.png";
import npcA from "../../../../../../../assets/graphics/characters/trainer_COOLTRAINER_F.png";
import npcB from "../../../../../../../assets/graphics/characters/trainer_POKEMONTRAINER_May.png";

// import musicBg from "../../../../../../../assets/audio/background_music/ViridianCity.ogg"

export const UTHouseThree = {
    id: "UTHouseThree",
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
            y: withGrid(14),
            src: npcA,
            behaviorLoop: [
                { type: "stand", direction: "right", time: 4200},
                { type: "walk", direction: "right"},
                { type: "walk", direction: "right"},
                { type: "stand", direction: "down", time: 4200},
                { type: "walk", direction: "down"},
                { type: "walk", direction: "down"},
                { type: "stand", direction: "left", time: 4200},
                { type: "walk", direction: "left"},
                { type: "walk", direction: "left"},
                { type: "stand", direction: "up", time: 4200},
                { type: "walk", direction: "up"},
                { type: "walk", direction: "up"},
            ],
            talking : [
                {
                    events: [
                        { type: "textMessage", text: "Je ne sais pas pourquoi.", facePlayer: "npcA" },
                        { type: "textMessage", text: "Mais j'ai l'impression de te connaitre.", facePlayer: "npcA" },
                    ]
                }
            ]
        }),
        npcB: ({
            type: "Person",
            x: withGrid(20),
            y: withGrid(14),
            src: npcB,
            behaviorLoop: [
                { type: "stand", direction: "left", time: 4200},
            ],
            talking : [
                {
                    events: [
                        { type: "textMessage", text: "Je serai bientôt Présidente de la République!", facePlayer: "npcB" },
                        { type: "textMessage", text: "C'est Marlène qui me l'a dit.", facePlayer: "npcB" },
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
                        { type: "textMessage", text: "'Le siècle des intellectuels'", facePlayer: "booksA" },
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
                        { type: "textMessage", text: "'Les amants de la liberté'", facePlayer: "booksB" },
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
                        x: withGrid(43),
                        y: withGrid(61),
                        direction: 'down',
                    },
                ]
            }
        ],
    }
}