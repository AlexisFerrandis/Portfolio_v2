import mapDown from "../../../../../../../../assets/graphics/maps/pokemon_center/first_floor/down.png";
import mapUp from "../../../../../../../../assets/graphics/maps/pokemon_center/first_floor/up.png";
import { collisions } from '../../../../poke-center/first_floor/MapCollision';

import { asGridCoords, loadWall, withGrid } from '../../../../../../../../Utils';


import blank from "../../../../../../../../assets/graphics/characters/blank.png";
import npcNurse from "../../../../../../../../assets/graphics/characters/npcNurse.png";
import npcBImg from "../../../../../../../../assets/graphics/characters/npcB.png";
import npcLImg from "../../../../../../../../assets/graphics/characters/npcL.png";
import npcMImg from "../../../../../../../../assets/graphics/characters/npcM.png";
import npcDImg from "../../../../../../../../assets/graphics/characters/npcD.png";


import musicBg from "../../../../../../../../assets/audio/background_music/ViridianCity.ogg"

export const ViridianPokeCenterFirstFloor = {
    id: "ViridianPokeCenterFirstFloor",
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
            x: withGrid(18),
            y: withGrid(18),
            src: blank,
            behaviorLoop: [
                { type: "stand", direction: "down", time: 1200},
            ],
            talking : [
                {
                    events: [
                        { type: "textMessage", text: "Bonjour,", facePlayer: "npcA" },
                        { type: "textMessage", text: "Vous et vos Pokémons avez l'air épuisés!", facePlayer: "npcA" },
                        { type: "textMessage", text: "Vous devriez vous reposer un peu.", facePlayer: "npcA" },
                        { type: "healing", position: "ViridianPokeCenterFirstFloor"},
                        { type: "textMessage", text: "Vous avez tous l'air d'aller bien mieux.", facePlayer: "npcA" },
                        { type: "textMessage", text: "À plus tard!", facePlayer: "npcA" },
                    ]
                }
            ]
        }),
        npcNurse: ({
            type: "Person",
            x: withGrid(18),
            y: withGrid(17),
            src: npcNurse,
            behaviorLoop: [
                { type: "stand", direction: "down", time: 1200},
            ],
        }),
        npcB: ({
            type: "Person",
            x: withGrid(21),
            y: withGrid(21),
            src: npcBImg,
            behaviorLoop: [
                { type: "stand", direction: "down", time: 4400},
                { type: "stand", direction: "right", time: 1200},
            ],
            talking : [
                {
                    events: [
                        { type: "textMessage", text: "Mon mari est tombé sur un dresseur dans la forêt de Jade.", facePlayer: "npcB" },
                        { type: "textMessage", text: "Il était très méchant avec son Pikachu.", facePlayer: "npcB" },
                        { type: "textMessage", text: "Il lui a pris son Fantominus.", facePlayer: "npcB" },
                    ]
                }
            ]
        }),
        npcC: ({
            type: "Person",
            x: withGrid(23),
            y: withGrid(20),
            src: npcLImg,
            behaviorLoop: [
                { type: "stand", direction: "down", time: 4900},
            ],
            talking : [
                {
                    events: [
                        { type: "textMessage", text: "Il m'a fait tomber.", facePlayer: "npcC" },
                        { type: "textMessage", text: "J'étais là pour attraper des Chenipans.", facePlayer: "npcC" },
                        { type: "textMessage", text: "Et il est parti avec mon Fantominus.", facePlayer: "npcC" },
                    ]
                }
            ]
        }),
        npcD: ({
            type: "Person",
            x: withGrid(12),
            y: withGrid(17),
            src: npcMImg,
            behaviorLoop: [
                { type: "stand", direction: "down", time: 3200},
                { type: "stand", direction: "left", time: 1600},
                { type: "stand", direction: "right", time: 1600},
            ],
            talking : [
                {
                    events: [
                        { type: "textMessage", text: "Tu as besoin de quelque chose?", facePlayer: "npcD" },
                        { type: "textMessage", text: "Rien? Ha d'accord...", facePlayer: "npcD" },
                    ]
                }
            ]
        }),
        npcE: ({
            type: "Person",
            x: withGrid(13),
            y: withGrid(24),
            src: npcDImg,
            behaviorLoop: [
                { type: "stand", direction: "right", time: 1600},
            ],
            talking : [
                {
                    events: [
                        { type: "textMessage", text: "J'attends mon Papa, il s'appelle Hal.", facePlayer: "npcD" },
                        { type: "textMessage", text: "Il sera bientôt là.", facePlayer: "npcD" },
                    ]
                }
            ]
        }),
        bookShelf1: ({
            type: "Person",
            x: withGrid(13),
            y: withGrid(15),
            src: blank,
            talking : [
                {
                    events: [
                        { type: "textMessage", text: "Médecine Pokémon.", facePlayer: "bookShelf1" },
                    ]
                }
            ]
        }),
        bookShelf2: ({
            type: "Person",
            x: withGrid(14),
            y: withGrid(15),
            src: blank,
            talking : [
                {
                    events: [
                        { type: "textMessage", text: "Médecine Pokémon.", facePlayer: "bookShelf1" },
                    ]
                }
            ]
        }),
        computer: ({
            type: "Person",
            x: withGrid(22),
            y: withGrid(15),
            src: blank,
            talking : [
                {
                    events: [
                        { type: "textMessage", text: "Mise à jour Windows...", facePlayer: "computer" },
                    ]
                }
            ]
        }),
    },
    walls: loadWall(collisions),
    // grass: loadGrass(grass),
    cutsceneSpaces: {
        [asGridCoords(18, 25)]: [
            {
                events: [
                    { 
                        type: "changeMap", 
                        map: "ViridianCity",
                        soundEffect: "doors",
                        changeMusic: musicBg,
                        x: withGrid(54),
                        y: withGrid(66),
                        direction: 'down',
                    },
                ]
            }
        ],
        [asGridCoords(11, 21)]: [
            {
                events: [
                    { 
                        type: "changeMap", 
                        map: "ViridianPokeCenterSecondFloor",
                        soundEffect: "stairs",
                        x: withGrid(12),
                        y: withGrid(21),
                        direction: 'right',
                    },
                ]
            }
        ],
    }
}