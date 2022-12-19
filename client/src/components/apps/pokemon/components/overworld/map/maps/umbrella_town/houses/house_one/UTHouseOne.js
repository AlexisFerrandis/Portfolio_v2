import mapDown from "../../../../../../../assets/graphics/maps/umbrella_town/houses/house_one/down.png";
import mapUp from "../../../../../../../assets/graphics/maps/umbrella_town/houses/house_one/up.png"
import { collisions } from './MapCollision';

import { asGridCoords, loadWall, withGrid } from '../../../../../../../Utils';

import blank from "../../../../../../../assets/graphics/characters/blank.png";

// import musicBg from "../../../../../../../assets/audio/background_music/ViridianCity.ogg"

export const UTHouseOne = {
    id: "UTHouseOne",
    lowerSrc: mapDown,
    upperSrc: mapUp,
    gameObjects: {},
    configObjects: {
        player: ({
            type: "Person",
            isPlayerControlled: true,
            canRun: false,
        }),
        computer: ({
            type: "Person",
            x: withGrid(14),
            y: withGrid(15),
            src: blank,
            behaviorLoop: [
                { type: "stand", direction: "down", time: 1200},
            ],
            talking : [
                {
                    events: [
                        { type: "textMessage", text: "C'est le troisième ce mois çi.", facePlayer: "computer" },
                        { type: "textMessage", text: "Quelqu'un doit aller voir ce qu'il se passe.", facePlayer: "computer" },
                    ]
                }
            ]
        }),
        books: ({
            type: "Person",
            x: withGrid(21),
            y: withGrid(11),
            src: blank,
            behaviorLoop: [
                { type: "stand", direction: "down", time: 1200},
            ],
            talking : [
                {
                    events: [
                        { type: "textMessage", text: "L'hypnose désigne des états modifiés de conscience.", facePlayer: "books" },
                        { type: "textMessage", text: "Les perceptions sont modifiées par rapport à un état ordinaire.", facePlayer: "books" },
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
                        x: withGrid(10),
                        y: withGrid(58),
                        direction: 'down',
                    },
                ]
            }
        ],
    }
}