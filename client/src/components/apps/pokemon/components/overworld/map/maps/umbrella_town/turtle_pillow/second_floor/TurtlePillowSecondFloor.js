import mapDown from "../../../../../../../assets/graphics/maps/umbrella_town/turtle_pillow/second_floor/down.png";
import mapUp from "../../../../../../../assets/graphics/maps/umbrella_town/turtle_pillow/second_floor/up.png"
import { collisions } from './MapCollision';

import { asGridCoords, loadWall, withGrid } from '../../../../../../../Utils';

import npcA from "../../../../../../../assets/graphics/characters/npcW.png";
import npcB from "../../../../../../../assets/graphics/characters/npcY.png";

// import musicBg from "../../../../../../../assets/audio/background_music/ViridianCity.ogg"

export const TurtlePillowSecondFloor = {
    id: "TurtlePillowSecondFloor",
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
            x: withGrid(16),
            y: withGrid(14),
            src: npcA,
            behaviorLoop: [
                { type: "stand", direction: "down", time: 6200},
            ],
            talking : [
                {
                    events: [
                        { type: "textMessage", text: "Bienvenue!", facePlayer: "npcA" },
                        { type: "textMessage", text: "Développer des jeux vidéos est tellement épanouissant.", facePlayer: "npcA" },
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
                { type: "stand", direction: "right", time: 4200},
                { type: "walk", direction: "right", },
                { type: "stand", direction: "left", time: 4200},
                { type: "walk", direction: "left", },
                { type: "stand", direction: "down", time: 6200},
            ],
            talking : [
                {
                    events: [
                        { type: "textMessage", text: "J'aime beaucoup mon travail,", facePlayer: "npcB" },
                        { type: "textMessage", text: "Mais il faut que je pense à faire du sport.", facePlayer: "npcB" },
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
                        map: "TurtlePillowFirstFloor",
                        soundEffect: "stairs",
                        x: withGrid(20),
                        y: withGrid(12),
                        direction: 'left',
                    },
                ]
            }
        ],
    }
}