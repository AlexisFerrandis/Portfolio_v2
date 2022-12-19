import mapDown from "../../../../../../../assets/graphics/maps/viridian_city/classic_house/down.png";
import mapUp from "../../../../../../../assets/graphics/maps/viridian_city/classic_house/up.png";
import { collisions } from './MapCollision';

import { asGridCoords, loadWall, withGrid } from '../../../../../../../Utils';

import blank from "../../../../../../../assets/graphics/characters/blank.png";
import npcJImg from "../../../../../../../assets/graphics/characters/npcJ.png";
import npcUImg from "../../../../../../../assets/graphics/characters/npcU.png";
import npcVImg from "../../../../../../../assets/graphics/characters/npcV.png";

// import musicBg from "../../../../../../../assets/audio/background_music/ViridianCity.ogg"

export const ViridianHouseTwo = {
    id: "ViridianHouseTwo",
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
            x: withGrid(20),
            y: withGrid(14),
            src: npcJImg,
            behaviorLoop: [
                { type: "stand", direction: "right", time: 2400},
            ],
            talking : [
                {
                    required: ["GET_RUNNING_SHOES"],
                    events: [
                        { type: "textMessage", text: "Profite de tes nouvelles chaussures!", facePlayer: "npcA"},
                    ]
                },
                {
                    events: [
                        { type: "textMessage", text: "Je ne peux plus marcher.", facePlayer: "npcA" },
                        { type: "textMessage", text: "Tu devrais prendre mes baskets.", facePlayer: "npcA" },
                        { type: "getEssentialItem", id:"runningShoes"},
                        { type: "stand", who: "npcA",  direction: "down", time: 1900, },
                        { type: "textMessage", text: "Vous pouvez désormais courir dehors.", facePlayer: "npcA" },

                        
                        { type: "addStoryFlag", flag: "GET_RUNNING_SHOES"},

                    ]
                }
            ]
        }),
        npcB: ({
            type: "Person",
            x: withGrid(9),
            y: withGrid(12),
            src: npcUImg,
            behaviorLoop: [
                { type: "stand", direction: "up", time: 1200},
            ],
            talking : [
                {
                    events: [
                        { type: "textMessage", text: "Du coup c'est toujours moi qui fait la vaisselle.", facePlayer: "npcB" },
                        { type: "textMessage", text: "C'est vraiment nul", facePlayer: "npcB" },
                    ]
                }
            ]
        }),
        npcC: ({
            type: "Person",
            x: withGrid(14),
            y: withGrid(17),
            src: npcVImg,
            behaviorLoop: [
                { type: "stand", direction: "up", time: 4200},
                { type: "stand", direction: "right", time: 2200},
            ],
            talking : [
                {
                    required: ["GET_RUNNING_SHOES"],
                    events: [
                        { type: "textMessage", text: "Tu vas courir plus vite maintenant !", facePlayer: "npcC"},
                    ]
                },
                {
                    events: [
                        { type: "textMessage", text: "Tu peux aller voir mon mari.", facePlayer: "npcC" },
                        { type: "textMessage", text: "Il te donnera de belles chaussures.", facePlayer: "npcC" },
                    ]
                }
            ]
        }),
        tv: ({
            type: "Person",
            x: withGrid(14),
            y: withGrid(11),
            src: blank,
            behaviorLoop: [
                { type: "stand", direction: "down", time: 1200},
            ],
            talking : [
                {
                    events: [
                        { type: "textMessage", text: "Est-ce que Stella sortira encore avec John ?", facePlayer: "tv" },
                        { type: "textMessage", text: "Vous le saurez dans le prochain épisode !", facePlayer: "tv" },
                    ]
                }
            ]
        }),
    },
    walls: loadWall(collisions),
    // grass: loadGrass(grass),
    cutsceneSpaces: {
        [asGridCoords(15, 20)]: [
            {
                events: [
                    { 
                        type: "changeMap", 
                        map: "ViridianCity",
                        soundEffect: "doors",
                        x: withGrid(54),
                        y: withGrid(51),
                        direction: 'down',
                    },
                ]
            }
        ],
    }
}