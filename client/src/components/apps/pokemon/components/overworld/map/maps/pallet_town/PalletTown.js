import mapDown from "../../../../../assets/graphics/maps/pallet_town/down.png";
import mapUp from "../../../../../assets/graphics/maps/pallet_town/up.png";
import { collisions, grass, bump } from './MapCollision';

import { asGridCoords, loadWall, withGrid, loadGrass, loadBump } from '../../../../../Utils';


import blank from "../../../../../assets/graphics/characters/blank.png"

import npcAImg from "../../../../../assets/graphics/characters/npcA.png";
import npcCImg from "../../../../../assets/graphics/characters/npcC.png";
import npcDImg from "../../../../../assets/graphics/characters/npcD.png";
// import npcGImg from "../../../../../assets/graphics/characters/npcG.png";

import npcHImg from "../../../../../assets/graphics/characters/npcH.png";
import npcIImg from "../../../../../assets/graphics/characters/npcI.png";
import rival from "./../../../../../assets/graphics/characters/rival.png";

import mimikyu from "../../../../../assets/graphics/characters/mimikyu-elec.png";


import musicBg from "../../../../../assets/audio/background_music/ViridianCity.ogg"

export const PalletTown = {
    id: "PalletTown",
    lowerSrc: mapDown,
    upperSrc: mapUp,
    gameObjects: {},
    configObjects: {
        player: ({
            type: "Person",
            isPlayerControlled: true,
            canRun: true,
        }),
        npcA: ({
            type: "Person",
            x: withGrid(42),
            y: withGrid(67),
            src: npcAImg,
            behaviorLoop: [
                { type: "stand", direction: "left", time: 1200},
                { type: "stand", direction: "right", time: 3000},
                { type: "walk", direction: "right"},
                { type: "stand", direction: "right", time: 2100},
                { type: "walk", direction: "down"},
                { type: "stand", direction: "down", time: 2300},
                { type: "walk", direction: "left"},
                { type: "stand", direction: "left", time: 3000},
                { type: "walk", direction: "up", time: 2700},
            ],
            talking : [
                {
                    events: [
                        { type: "textMessage", text: "La Team Rocket est la pire.", facePlayer: "npcA" },
                        { type: "textMessage", text: "Ils ont volé mon pokémon!", facePlayer: "npcA" },
                    ]
                }
            ]
        }),
        npcC: ({
            type: "Person",
            x: withGrid(36),
            y: withGrid(64),
            src: npcCImg,
            behaviorLoop: [
                { type: "stand", direction: "down", time: 3200},
                { type: "stand", direction: "left", time: 2100},
                { type: "stand", direction: "right", time: 2300},
            ],
            talking : [
                {
                    events: [
                        { type: "textMessage", text: "J'aime beaucoup ce village.", facePlayer: "npcC" },
                        { type: "textMessage", text: "C'est si paisible.", facePlayer: "npcC" },
                    ]
                }
            ]
        }),
        npcD: ({
            type: "Person",
            x: withGrid(41),
            y: withGrid(48),
            src: npcDImg,
            behaviorLoop: [
                { type: "stand", direction: "down", time: 1000},
            ],
            talking : [
                {
                    events: [
                        { type: "textMessage", text: "C'est dangereux de marcher dans les hautes herbes.", facePlayer: "npcD" },
                    ]
                }
            ],
            isNotHere: "TALKED_TO_CHEN_FIRST_TIME",
        }),
        mailBoxA: ({
            type: "Person",
            x: withGrid(32),
            y: withGrid(55),
            src: blank,
            talking : [
                {
                    events: [
                        { type: "textMessage", text: "Maison de Martha et Red." },
                    ]
                },
            ]
        }),
        mailBoxB: ({
            type: "Person",
            x: withGrid(41),
            y: withGrid(55),
            src: blank,
            talking : [
                {
                    events: [
                        { type: "textMessage", text: "Maison de Laura et Green."},
                    ]
                },
            ]
        }),
        signA: ({
            type: "Person",
            x: withGrid(36),
            y: withGrid(60),
            src: blank,
            talking : [
                {
                    events: [
                        { type: "textMessage", text: "Bourg Palette."},
                    ]
                },
            ]
        }),
        signB: ({
            type: "Person",
            x: withGrid(32),
            y: withGrid(63),
            src: blank,
            talking : [
                {
                    events: [
                        { type: "textMessage", text: "Jardin Mimosa."},
                    ]
                },
            ]
        }),
        signC: ({
            type: "Person",
            x: withGrid(44),
            y: withGrid(66),
            src: blank,
            talking : [
                {
                    events: [
                        { type: "textMessage", text: "Plaine cherche paysagiste."},
                    ]
                },
            ]
        }),
        signE: ({
            type: "Person",
            x: withGrid(43),
            y: withGrid(6),
            src: blank,
            talking : [
                {
                    events: [
                        { type: "textMessage", text: "Jadielle."},
                    ]
                },
            ]
        }),
        bully: ({
            type: "Person",
            initialX: withGrid(40),
            initialY: withGrid(46),
            src: rival,
            behaviorLoop: [
                { type: "stand", direction: "right", time: 1000},
            ],
            isNowHere: "TALKED_TO_CHEN_FIRST_TIME",
        }),
        mimikyu: ({
            type: "Person",
            initialX: withGrid(41),
            initialY: withGrid(46),
            src: mimikyu,
            behaviorLoop: [
                { type: "stand", direction: "left", time: 1000},
            ],
            isNowHere: "TALKED_TO_CHEN_FIRST_TIME",
        }),
        bully1: ({
            type: "Person",
            initialX: withGrid(40),
            initialY: withGrid(46),
            src: rival,
            talking : [
                {
                    events: [
                        { type: "textMessage", text: "Mimiqui...", facePlayer: "mimikyuA" },
                    ]
                },
            ],
            behaviorLoop: [
                { type: "stand", direction: "left", time: 1000},
            ],
            isNowHere: "MIMIKYU_FIRST_DISPARITIONs",
            isNotHere: "MIMIKYU_JOIN_TEAM"
        }),

        // route one 
        npcH: ({
            type: "Person",
            x: withGrid(34),
            y: withGrid(34),
            src: npcHImg,
            behaviorLoop: [
                { type: "stand", direction: "up", time: 4000},
                { type: "walk", direction: "down"},
                { type: "stand", direction: "down", time: 3200},
                { type: "walk", direction: "up"},
            ],
            talking : [
                {
                    events: [
                        { type: "textMessage", text: "Un Mimiqui ?", facePlayer: "npcH"},
                        { type: "textMessage", text: "Non je ne l'ai pas vu.", facePlayer: "npcH"},
                    ]
                },
            ]
        }),
        npcI: ({
            type: "Person",
            x: withGrid(46),
            y: withGrid(23),
            src: npcIImg,
            behaviorLoop: [
                { type: "stand", direction: "left", time: 3600},
                { type: "walk", direction: "right"},
                { type: "stand", direction: "right", time: 3300},
                { type: "walk", direction: "left"},
            ],
            talking : [
                {
                    events: [
                        { type: "textMessage", text: "Mon Rattata c'est le plus fort!", facePlayer: "npcI"},
                    ]
                },
            ]
        }),
        signD: ({
            type: "Person",
            x: withGrid(37),
            y: withGrid(38),
            src: blank,
            talking : [
                {
                    events: [
                        { type: "textMessage", text: "Route 1"},
                    ]
                },
            ]
        }),
    },
    walls: loadWall(collisions),
    grass: loadGrass(grass),
    bump: loadBump(bump),
    cutsceneSpaces: {
        [asGridCoords(34, 55)]: [
            {
                events: [
                    { 
                        type: "changeMap", 
                        map: "MomHouseFirstFloor",
                        soundEffect: "doors",
                        x: withGrid(13),
                        y: withGrid(19),
                        direction: 'up',
                    },
                ]
            }
        ],
        [asGridCoords(43, 55)]: [
            {
                events: [
                    { 
                        type: "changeMap", 
                        map: "RivalHouse",
                        soundEffect: "doors",
                        x: withGrid(10),
                        y: withGrid(15),
                        direction: 'up',
                    },
                ]
            }
        ],
        [asGridCoords(43, 62)]: [
            {
                events: [
                    { 
                        type: "changeMap", 
                        map: "ChenLab",
                        soundEffect: "doors",
                        x: withGrid(16),
                        y: withGrid(21),
                        direction: 'up',
                    },
                ]
            }
        ],
        [asGridCoords(40, 48)]: [
            {
                events: [
                    { who: "player", type: "stand", direction: "right"},
                    { who: "npcD", type: "walk", direction: "up"},
                    { who: "npcD", type: "walk", direction: "left"},
                    { who: "npcD", type: "stand", direction: "down"},
                    { who: "player", type: "stand", direction: "up"},
                    { type: "textMessage", text:"Tu ne peux pas y aller sans Pokémon!"},
                    { who: "player", type: "walk", direction: "down"},
                    { who: "npcD", type: "walk", direction: "down"},
                    { who: "npcD", type: "walk", direction: "right"},
                    { who: "npcD", type: "stand", direction: "down"},
                ]
            },
            {
                required: ["TALKED_TO_CHEN_FIRST_TIME"],
                events: [
                    { type: "textMessage", text: "Green: Tu es vraiment un Pokémon très laid." },
                    { type: "textMessage", text: "Green: Pikachu utilise éclair!" },
                    { who: "mimikyu", type: "stand", direction: "right", time: 1100},

                    
                    { who: "mimikyu", type: "stand", direction: "down", time: 1200},
                    { who: "mimikyu", type: "stand", direction: "left"},
                    { type: "textMessage", text: "Mimiqui..." },
                    { type: "textMessage", text: "Green: Je ne sais vraiment pas qui voudrait de toi." },
                    
                    { who: "player", type: "walk", direction: "up"},
                    { who: "bully", type: "stand", direction: "down", time: 400},
                    { type: "textMessage", text: "Green: Qu'est ce que tu veux?" },
                    { who: "bully", type: "stand", direction: "down", time: 600},
                    { type: "textMessage", text: "Green: Sauver ce Pokémon?" },
                    { who: "bully", type: "stand", direction: "down", time: 800},
                    { type: "textMessage", text: "Green: Haha essaye donc pour voir!" },
                    { type: "battle", enemyId: "rivalA" },



                    { type: "textMessage", text: "Mimiqui..." },
                    { who: "mimikyu", type: "walk", direction: "up"},
                    { who: "mimikyu", type: "walk", direction: "up"},
                    { who: "mimikyu", type: "walk", direction: "up"},
                    { who: "mimikyu", type: "stand", direction: "down", time: 800},
                    { who: "mimikyu", type: "walk", direction: "up"},
                    { who: "mimikyu", type: "walk", direction: "up"},

                    
                    { type: "textMessage", text: "Green: Regarde ça! Il s'enfuit comme une poule mouillée!", },
                    { type: "textMessage", text: "Green: Tu n'auras pas autant de chance la prochaine fois.", },
                    
                    { type: "addStoryFlag", flag: "MIMIKYU_FIRST_DISPARITION"},
                    { 
                        type: "changeMap", 
                        map: "PalletTown",
                        sound: "run",
                        x: withGrid(40),
                        y: withGrid(47),
                        direction: 'up',
                    },
                ]
            },
            {
                nothing: "MIMIKYU_FIRST_DISPARITION",
            },
        ],
        [asGridCoords(41, 48)]: [
            {
                events: [
                    { who: "player", type: "stand", direction: "right"},
                    { who: "npcD", type: "walk", direction: "up"},
                    { who: "npcD", type: "walk", direction: "left"},
                    { who: "npcD", type: "stand", direction: "down"},
                    { who: "player", type: "stand", direction: "up"},
                    { type: "textMessage", text:"Tu ne peux pas y aller sans Pokémon!"},
                    { who: "player", type: "walk", direction: "down"},
                    { who: "npcD", type: "walk", direction: "down"},
                    { who: "npcD", type: "walk", direction: "right"},
                    { who: "npcD", type: "stand", direction: "down"},
                ]
            },
            {
                required: ["TALKED_TO_CHEN_FIRST_TIME"],
                events: [
                    { type: "textMessage", text: "Green: Tu es vraiment un Pokémon très laid." },
                    { type: "textMessage", text: "Green: Pikachu utilise éclair!" },
                    { who: "mimikyu", type: "stand", direction: "right", time: 1100},

                    
                    { who: "mimikyu", type: "stand", direction: "down", time: 1200},
                    { who: "mimikyu", type: "stand", direction: "left"},
                    { type: "textMessage", text: "Mimiqui..." },
                    { type: "textMessage", text: "Green: Je ne sais vraiment pas qui voudrait de toi." },
                    
                    { who: "player", type: "walk", direction: "up"},
                    { who: "player", type: "walk", direction: "left"},
                    { who: "player", type: "stand", direction: "up", time: 400},
                    { who: "bully", type: "stand", direction: "down", time: 400},
                    { type: "textMessage", text: "Green: Qu'est ce que tu veux?" },
                    { who: "bully", type: "stand", direction: "down", time: 600},
                    { type: "textMessage", text: "Green: Sauver ce Pokémon?" },
                    { who: "bully", type: "stand", direction: "down", time: 800},
                    { type: "textMessage", text: "Green: Haha essaye donc pour voir!" },
                    { type: "battle", enemyId: "rivalA" },


                    { type: "textMessage", text: "Mimiqui..." },
                    { who: "mimikyu", type: "walk", direction: "up"},
                    { who: "mimikyu", type: "walk", direction: "up"},
                    { who: "mimikyu", type: "walk", direction: "up"},
                    { who: "mimikyu", type: "stand", direction: "down", time: 800},
                    { who: "mimikyu", type: "walk", direction: "up"},
                    { who: "mimikyu", type: "walk", direction: "up"},

                    
                    { type: "textMessage", text: "Green: Regarde ça! Il s'enfuit comme une poule mouillée!", },
                    { type: "textMessage", text: "Green: Tu n'auras pas autant de chance la prochaine fois.", },
                    
                    { type: "addStoryFlag", flag: "MIMIKYU_FIRST_DISPARITION"},
                    { 
                        type: "changeMap", 
                        map: "PalletTown",
                        sound: "run",
                        x: withGrid(40),
                        y: withGrid(47),
                        direction: 'up',
                    },
                ]
            },
            {
                nothing: "MIMIKYU_FIRST_DISPARITION",
            },
        ],
        // [asGridCoords(40, 46)]: [
        //     {
        //         events: [
        //             { who: "player", type: "stand", direction: "right", time: 444 },
        //             { type: "textMessage", text: "Mimikyu..." },
        //             { who: "player", type: "stand", direction: "right", time: 555 },

        //             // get mimikyu
        //             { type: "getPokemon", id:"mimikyu"},
        //             { type: "addStoryFlag", flag: "MIMIKYU_JOIN_TEAM"},

        //             { 
        //                 type: "changeMap", 
        //                 map: "PalletTown",
        //                 soundEffect: "getpkmn",
        //                 x: withGrid(40),
        //                 y: withGrid(46),
        //                 direction: 'right',
        //             },
                    
        //             { type: "textMessage", text: "Mimikyu just join your team!" },
        //             { type: "textMessage", text: "Be nice with Mimikyu." },
        //         ]
        //     },
        //     {
        //         required: ["//"],
        //     },
        //     {
        //         nothing: "MIMIKYU_JOIN_TEAM",
        //     },
        // ],
        // route 1 to 
        [asGridCoords(40, 6)]: [
            {
                events: [
                    { 
                        type: "changeMap", 
                        map: "ViridianCity",
                        soundEffect: "stairs",
                        changeMusic: musicBg,
                        x: withGrid(52),
                        y: withGrid(74),
                        direction: 'up',
                    },
                ]
            }
        ]
    }
}