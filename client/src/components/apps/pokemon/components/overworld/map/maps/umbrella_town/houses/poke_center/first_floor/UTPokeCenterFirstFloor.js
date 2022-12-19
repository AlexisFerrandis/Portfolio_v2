import mapDown from "../../../../../../../../assets/graphics/maps/pokemon_center/first_floor/down.png";
import mapUp from "../../../../../../../../assets/graphics/maps/pokemon_center/first_floor/up.png";
import { collisions } from '../../../../poke-center/first_floor/MapCollision';

import { asGridCoords, loadWall, withGrid } from '../../../../../../../../Utils';


import blank from "../../../../../../../../assets/graphics/characters/blank.png";
import npcNurse from "../../../../../../../../assets/graphics/characters/npcNurse.png";
import npcBImg from "../../../../../../../../assets/graphics/characters/npcX.png";
import npcLImg from "../../../../../../../../assets/graphics/characters/npcT.png";
import npcMImg from "../../../../../../../../assets/graphics/characters/NPC 23.png";
import npcDImg from "../../../../../../../../assets/graphics/characters/NPC 09.png";


import musicBg from "../../../../../../../../assets/audio/background_music/ViridianCity.ogg"

export const UTPokeCenterFirstFloor = {
    id: "UTPokeCenterFirstFloor",
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
                        { type: "textMessage", text: "Voulez vous soignez vos Pokémons?", facePlayer: "npcA" },
                        { type: "textMessage", text: "Ca ne prendra qu'un instant.", facePlayer: "npcA" },
                        { type: "healing", position: "UTPokeCenterFirstFloor"},
                        { type: "textMessage", text: "Vous avez l'air en forme.", facePlayer: "npcA" },
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
            x: withGrid(23),
            y: withGrid(18),
            src: npcBImg,
            behaviorLoop: [
                { type: "stand", direction: "down", time: 4400},
                { type: "stand", direction: "right", time: 1200},
            ],
            talking : [
                {
                    events: [
                        { type: "textMessage", text: "J'ai visité tout le pays.", facePlayer: "npcB" },
                        { type: "textMessage", text: "La diversité des Pokémons est extraordinaire.", facePlayer: "npcB" },
                    ]
                }
            ]
        }),
        npcC: ({
            type: "Person",
            x: withGrid(24),
            y: withGrid(20),
            src: npcLImg,
            behaviorLoop: [
                { type: "stand", direction: "down", time: 4900},
            ],
            talking : [
                {
                    events: [
                        { type: "textMessage", text: "Mon Aspicot est tombé KO.", facePlayer: "npcC" },
                        { type: "textMessage", text: "Je me suis donc rendu ici le plus vite possible.", facePlayer: "npcC" },
                    ]
                }
            ]
        }),
        npcD: ({
            type: "Person",
            x: withGrid(14),
            y: withGrid(18),
            src: npcMImg,
            behaviorLoop: [
                { type: "stand", direction: "down", time: 3200},
            ],
            talking : [
                {
                    events: [
                        { type: "textMessage", text: "Le plus important c'est la santé.", facePlayer: "npcD" },
                        { type: "textMessage", text: "Il faut la préserver.", facePlayer: "npcD" },
                    ]
                }
            ]
        }),
        npcE: ({
            type: "Person",
            x: withGrid(15),
            y: withGrid(22),
            src: npcDImg,
            behaviorLoop: [
                { type: "stand", direction: "right", time: 2600},
                { type: "walk", direction: "right"},
                { type: "stand", direction: "right", time: 1200},
                { type: "walk", direction: "right"},
                { type: "stand", direction: "left", time: 3600},
                { type: "walk", direction: "left"},
                { type: "stand", direction: "left", time: 4600},
                { type: "walk", direction: "left"},
            ],
            talking : [
                {
                    events: [
                        { type: "textMessage", text: "Je suis cuisinier.", facePlayer: "npcE" },
                        { type: "textMessage", text: "Ma spécialité?", facePlayer: "npcE" },
                        { type: "textMessage", text: "Le ragout de Magicarpe.", facePlayer: "npcE" },
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
                        { type: "textMessage", text: "Biologie Pokémon.", facePlayer: "bookShelf1" },
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
                        { type: "textMessage", text: "Biologie Pokémon.", facePlayer: "bookShelf1" },
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
                        { type: "textMessage", text: "Démarage Windows...", facePlayer: "computer" },
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
                        map: "UmbrellaTown",
                        soundEffect: "doors",
                        changeMusic: musicBg,
                        x: withGrid(59),
                        y: withGrid(41),
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
                        map: "UTPokeCenterSecondFloor",
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