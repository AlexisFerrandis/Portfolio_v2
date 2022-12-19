import mapDown from "../../../../../../../assets/graphics/maps/umbrella_town/houses/vlad_house/down.png";
import mapUp from "../../../../../../../assets/graphics/maps/umbrella_town/houses/vlad_house/up.png"
import { collisions } from './MapCollision.js';

import { asGridCoords, loadWall, withGrid } from '../../../../../../../Utils';

import blank from "../../../../../../../assets/graphics/characters/blank.png";
import vlad from "../../../../../../../assets/graphics/characters/trainer_LEADER_Koga.png";

// import musicBg from "../../../../../../../assets/audio/background_music/ViridianCity.ogg"

export const VladHouse = {
    id: "VladHouse",
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
            x: withGrid(17),
            y: withGrid(18),
            src: vlad,
            behaviorLoop: [
                { type: "stand", direction: "down", time: 4200},
            ],
            talking : [
                {
                    events: [
                        { type: "textMessage", text: "Félicitations pour ta détermination!", facePlayer: "npcA" },
                        { type: "textMessage", text: "Je ne suis pas trop en forme pour le moment.", facePlayer: "npcA" },
                        { type: "textMessage", text: "Mais reviens bientôt pour me défier dans l'arène!", facePlayer: "npcA" },
                    ]
                }
            ]
        }),
        book: ({
            type: "Person",
            x: withGrid(25),
            y: withGrid(15),
            src: blank,
            behaviorLoop: [
                { type: "stand", direction: "down", time: 4200},
            ],
            talking : [
                {
                    events: [
                        { type: "textMessage", text: "Un grand pouvoir,", facePlayer: "book" },
                        { type: "textMessage", text: "Implique beaucoupe de Kratos?", facePlayer: "book" },
                    ]
                }
            ]
        }),
        tv: ({
            type: "Person",
            x: withGrid(18),
            y: withGrid(13),
            src: blank,
            behaviorLoop: [
                { type: "stand", direction: "down", time: 4200},
            ],
            talking : [
                {
                    events: [
                        { type: "textMessage", text: "L'aventure ne fait que commencer!", facePlayer: "book" },
                        { type: "textMessage", text: "Nous vous tiendrons informé."},
                    ]
                }
            ]
        }),
    },
    walls: loadWall(collisions),
    // grass: loadGrass(grass),
    cutsceneSpaces: {
        [asGridCoords(17, 23)]: [
            {
                events: [
                    { 
                        type: "changeMap", 
                        map: "UmbrellaTown",
                        soundEffect: "doors",
                        x: withGrid(66),
                        y: withGrid(14),
                        direction: 'down',
                    },
                ]
            }
        ],
    }
}