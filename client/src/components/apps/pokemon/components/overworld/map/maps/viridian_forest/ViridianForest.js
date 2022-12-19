import mapDown from "../../../../../assets/graphics/maps/viridian_forest/down.png";
import mapUp from "../../../../../assets/graphics/maps/viridian_forest/up.png";
import { collisions, grass, bump } from './MapCollision';

import { asGridCoords, loadWall, withGrid, loadGrass, loadBump } from '../../../../../Utils';


import blank from "../../../../../assets/graphics/characters/blank.png";

import teamRocketA from "../../../../../assets/graphics/characters/npcTeamRocketA.png";
import teamRocketB from "../../../../../assets/graphics/characters/npcTeamRocketB.png";
import mimikyu from "../../../../../assets/graphics/characters/mimikyu.png";

import npcA from "../../../../../assets/graphics/characters/npcAB.png";
import npcB from "../../../../../assets/graphics/characters/npcAA.png";
import npcC from "../../../../../assets/graphics/characters/npcC.png";
// import npcXX from "../../../../../assets/graphics/characters/npcXX.png";
import npcE from "../../../../../assets/graphics/characters/npcE.png";
import npcF from "../../../../../assets/graphics/characters/npcV.png";
import npcG from "../../../../../assets/graphics/characters/npcA.png";

import ViridianCityBg  from "../../../../../assets/audio/background_music/ViridianCity.ogg"
import UmbrellaTownBg from "../../../../../assets/audio/background_music/UmbrellaTown.ogg"

export const ViridianForest = {
    id: "ViridianForest",
    lowerSrc: mapDown,
    upperSrc: mapUp,
    gameObjects: {},
    configObjects: {
        player: ({
            type: "Person",
            canRun: true,
            isPlayerControlled: true,
        }),
        teamRocketA: ({
            type: "Person",
            x: withGrid(26),
            y: withGrid(42),
            src: teamRocketB,
            canRun: true,
            behaviorLoop: [
                { type: "stand", direction: "right", time: 1200},
            ],
            talking : [
                {
                    events: [
                        { type: "textMessage", text: "..."},
                    ]
                },
            ],
            isNotHere: "MIAMIKYU",
        }),
        teamRocketB: ({
            type: "Person",
            x: withGrid(24),
            y: withGrid(41),
            src: teamRocketA,
            behaviorLoop: [
                { type: "stand", direction: "right", time: 1200},
            ],
            talking : [
                {
                    events: [
                        { type: "textMessage", text: "..."},
                    ]
                },
            ],
            isNotHere: "MIAMIKYU",
        }),
        mimikyu: ({
            type: "Person",
            x: withGrid(26),
            y: withGrid(37),
            src: mimikyu,
            behaviorLoop: [
                { type: "stand", direction: "down", time: 1200},
            ],
            talking : [
                {
                    events: [
                        { type: "textMessage", text: "..."},
                    ]
                },
            ],
            isNotHere: "MIAMIKYU",
        }),

        // teamRocketA: ({
        //     type: "Person",
        //     x: withGrid(26),
        //     y: withGrid(42),
        //     src: teamRocketB,
        //     canRun: true,
        //     behaviorLoop: [
        //         { type: "stand", direction: "right", time: 1200},
        //     ],
        //     talking : [
        //         {
        //             events: [
        //                 { type: "textMessage", text: "..."},
        //             ]
        //         },
        //     ],
        //     isNotHere: "MIAMIKYU",
        // }),

        npcA: ({
            type: "Person",
            x: withGrid(17),
            y: withGrid(43),
            src: npcA,
            behaviorLoop: [
                { type: "stand", direction: "right", time: 5200},
                { type: "walk", direction: "right"},
                { type: "stand", direction: "down", time: 3200},
                { type: "walk", direction: "down"},
                { type: "stand", direction: "left", time: 4100},
                { type: "walk", direction: "left"},
                { type: "stand", direction: "up", time: 1400},
                { type: "walk", direction: "up"},
            ],
            talking : [
                {
                    events: [
                        { type: "textMessage", text: "L'une des plus belles forêts du monde brûle.", facePlayer: "npcA" },
                        { type: "textMessage", text: "Ça me rend si triste...", facePlayer: "npcA" },
                    ]
                },
            ],
        }),
        npcB: ({
            type: "Person",
            x: withGrid(40),
            y: withGrid(45),
            src: npcC,
            behaviorLoop: [
                { type: "stand", direction: "right", time: 3100},
                { type: "walk", direction: "right"},
                { type: "walk", direction: "right"},
                { type: "stand", direction: "down", time: 6200},
                { type: "walk", direction: "down"},
                { type: "stand", direction: "left", time: 7100},
                { type: "walk", direction: "left"},
                { type: "walk", direction: "left"},
                { type: "stand", direction: "up", time: 4400},
                { type: "walk", direction: "up"},
            ],
            talking : [
                {
                    events: [
                        { type: "textMessage", text: "J'ai essayé d'éteindre le feu.", facePlayer: "npcB" },
                        { type: "textMessage", text: "Mais je n'ai rien pu faire.", facePlayer: "npcB" },
                    ]
                },
            ],
        }),
        npcD: ({
            type: "Person",
            x: withGrid(47),
            y: withGrid(5),
            src: npcG,
            behaviorLoop: [
                { type: "stand", direction: "up", time: 5200},
                { type: "stand", direction: "right", time: 5200},
            ],
            talking : [
                {
                    events: [
                        { type: "textMessage", text: "Je me suis perdu.", facePlayer: "npcD"},
                        { type: "textMessage", text: "Et ma fille m'attend au centre Pokémon de Jadielle."},
                    ]
                },
            ],
        }),
        npcE: ({
            type: "Person",
            x: withGrid(32),
            y: withGrid(10),
            src: npcE,
            behaviorLoop: [
                { type: "stand", direction: "right", time: 2200},
            ],
            talking : [
                {
                    events: [
                        { type: "textMessage", text: "Je viens de voir passer un Mimiqui!", facePlayer: "npcE" },
                        { type: "textMessage", text: "Il avait l'air un peu apeuré.", facePlayer: "npcE" },
                    ]
                },
            ],
        }),
        npcF: ({
            type: "Person",
            x: withGrid(24),
            y: withGrid(9),
            src: npcF,
            behaviorLoop: [
                { type: "stand", direction: "down", time: 2200},
                { type: "walk", direction: "left"},
                { type: "walk", direction: "left"},
                { type: "stand", direction: "down", time: 3200},
                { type: "walk", direction: "up"},
                { type: "stand", direction: "left", time: 4200},
                { type: "walk", direction: "right"},
                { type: "walk", direction: "right"},
                { type: "stand", direction: "right", time: 6200},
                { type: "walk", direction: "down"},
            ],
            talking : [
                {
                    required: ["EEVEE_JOIN_TEAM"],
                    events: [
                        { type: "textMessage", text: "Me voilà plus rassurée.", facePlayer: "npcF"},
                    ]
                },
                {
                    events: [
                        { type: "textMessage", text: "Il y'a un dresseur étrange qui traîne à la sortie de la forêt.", facePlayer: "npcF" },
                        { type: "textMessage", text: "Tu devrais prendre ce Pokémon pour te défendre.", facePlayer: "npcF" },
                        { type: "textMessage", text: "J'espère qu'il te protégera.", facePlayer: "npcF" },
                        { type: "getPokemon", id:"eevee"},
                        { type: "addStoryFlag", flag: "EEVEE_JOIN_TEAM"},
                        { who: "npcD", type: "stand", direction: "down", time: 3500},
                        
                        
                        { type: "textMessage", text: "Evoli rejoint l'équipe!" },
                    ]
                },
            ],
        }),

       // trainers 

       teamRocketX: ({
            type: "Person",
            x: withGrid(20),
            y: withGrid(48),
            src: teamRocketB,
            behaviorLoop: [
                { type: "stand", direction: "up", time: 5200},
            ],
            talking : [
                {
                    events: [
                        { type: "textMessage", text: "Personne ne devrait rester ici."},
                    ]
                },
            ],
        }),

        npcEcoA: ({
            type: "Person",
            x: withGrid(15),
            y: withGrid(32),
            src: npcB,
            behaviorLoop: [
                { type: "stand", direction: "right", time: 5500},
            ],
            talking : [
                {
                    events: [
                        { type: "textMessage", text: "J'aime beaucoup les insectes."},
                    ]
                },
            ],
        }),

        teamRocketC: ({
            type: "Person",
            x: withGrid(48),
            y: withGrid(25),
            src: teamRocketA,
            behaviorLoop: [
                { type: "stand", direction: "left", time: 5500},
            ],
            talking : [
                {
                    events: [
                        { type: "textMessage", text: "Je ne dois laisser aucun témoin."},
                    ]
                },
            ],
        }),

        teamRocketD: ({
            type: "Person",
            x: withGrid(46),
            y: withGrid(19),
            src: teamRocketB,
            behaviorLoop: [
                { type: "stand", direction: "right", time: 5500},
            ],
            talking : [
                {
                    events: [
                        { type: "textMessage", text: "C'est une route à sens unique."},
                    ]
                },
            ],
        }),
       

        // sign
        signA: ({
            type: "Person",
            x: withGrid(30),
            y: withGrid(45),
            src: blank,
            talking : [
                {
                    events: [
                        { type: "textMessage", text: "Forêt de Jade, ne vous perdez pas."},
                    ]
                },
            ]
        }),
        signB: ({
            type: "Person",
            x: withGrid(26),
            y: withGrid(27),
            src: blank,
            talking : [
                {
                    events: [
                        { type: "textMessage", text: "Pour sortir, allez à droite."},
                    ]
                },
            ]
        }),
        signC: ({
            type: "Person",
            x: withGrid(44),
            y: withGrid(39),
            src: blank,
            talking : [
                {
                    events: [
                        { type: "textMessage", text: "Vous pourriez trouver des Pokémons rares ici."},
                    ]
                },
            ]
        }),
        signD: ({
            type: "Person",
            x: withGrid(35),
            y: withGrid(9),
            src: blank,
            talking : [
                {
                    events: [
                        { type: "textMessage", text: "Pour sortir, allez à gauche."},
                    ]
                },
            ]
        }),
        signE: ({
            type: "Person",
            x: withGrid(11),
            y: withGrid(10),
            src: blank,
            talking : [
                {
                    events: [
                        { type: "textMessage", text: "Céladopole."},
                    ]
                },
            ]
        })
        
    },
    walls: loadWall(collisions),
    grass: loadGrass(grass),
    bump: loadBump(bump),
    cutsceneSpaces: {
        [asGridCoords(28, 50)]: [
            {
                events: [
                    { 
                        type: "changeMap", 
                        map: "ViridianCity",
                        soundEffect: "stairs",
                        changeMusic: ViridianCityBg,
                        setFilter: "null",
                        x: withGrid(53),
                        y: withGrid(11),
                        direction: 'down',
                    },
                ]
            }
        ],
        [asGridCoords(9, 9)]: [
            {
                events: [
                    { 
                        type: "changeMap", 
                        map: "UmbrellaTown",
                        soundEffect: "stairs",
                        changeMusic: UmbrellaTownBg,
                        setFilter: "null",
                        x: withGrid(36),
                        y: withGrid(75),
                        direction: 'up',
                    },
                ]
            }
        ],

        // Viridian Forest burning scenario 1.1
        [asGridCoords(28, 48)]: [
            {
                events: [
                    { who: "player",type: "walk", direction: "up"},
                    { who: "player",type: "walk", direction: "up"},
                    { who: "player",type: "walk", direction: "up"},
                    { type: "textMessage", text: "DRACAUFEU!!! JE T'EN PRIE!", },
                    { type: "textMessage", text: "STOOOP!!!", },
                    { who: "player", type: "walk", direction: "up"},
                    
                    
                    
                    { type: "cameraPosition", x:-208, y:-64 },
                    { type: "playSoundEffect", soundEffect:"roar"},
                    { type: "clientEvent", what:"charizard"},
                    
                    { who: "player", type: "stand", direction: "up", time: 3000},
                    { type: "textMessage", text: "GROOOOOAAAAAAAAARRRRRRRRR!!!", },
                    
                    { who: "player", type: "stand", direction: "up", time: 2000},
                    { type: "textMessage", text: "Qu'est ce que tu fais?!", },
                    { type: "textMessage", text: "Il fallait juste leur faire peur!", },
                    { type: "textMessage", text: "Pas brûler toute la forêt !", },
                    
                    { type: "textMessage", text: "GROOOOAAAAAAAAAARRRRR!!!", },

                    { who: "teamRocketA", type: "stand", direction: "down", time: 1000},
                    { type: "textMessage", text: "Il est complètement incontrôlable.", },
                    { who: "teamRocketB", type: "stand", direction: "down", time: 1000},
                    { type: "textMessage", text: "Nous voulions éloigner les dresseurs,", },
                    { type: "textMessage", text: "Pour que nous puissions récupérer les Pokémons de cette forêt.", },
                    { type: "textMessage", text: "Mais Dracaufeu a commencé à tout brûler.", },
                    { type: "textMessage", text: "Et maintenant, nous ne pouvons plus rien faire!", }, 

                    
                    { type: "clientEvent", what:"charizard-fire"},

                    { who: "teamRocketA", type: "stand", direction: "right", time: 500},
                    { who: "teamRocketA", type: "walk", direction: "left"},
                    { who: "teamRocketA", type: "walk", direction: "left"},
                    { who: "teamRocketA", type: "walk", direction: "left"},
                    { who: "teamRocketA", type: "walk", direction: "left"},
                    { who: "teamRocketA", type: "stand", direction: "right", time: 400},
                    { who: "teamRocketA", type: "walk", direction: "left"},
                    { who: "teamRocketA", type: "walk", direction: "left"},
                    { who: "teamRocketA", type: "walk", direction: "left"},

                    
                    { type: "textMessage", text: "Bonne chance avec ça!", }, 
                    { who: "teamRocketB", type: "walk", direction: "left"},
                    { who: "teamRocketB", type: "walk", direction: "left"},
                    { who: "teamRocketB", type: "walk", direction: "left"},
                    { who: "teamRocketB", type: "walk", direction: "left"},
                    { who: "teamRocketB", type: "walk", direction: "left"},

                    
                    { who: "mimikyu", type: "walk", direction: "down"},
                    { who: "mimikyu", type: "walk", direction: "down"},
                    { who: "mimikyu", type: "walk", direction: "down"},
                    { who: "mimikyu", type: "walk", direction: "down"},
                    { who: "mimikyu", type: "walk", direction: "down"},
                    { who: "mimikyu", type: "stand", direction: "right", time: 1000},
                    
                    
                    { type: "textMessage", text: "Mimiqui...", }, 
                    { who: "mimikyu", type: "walk", direction: "right"},
                    { who: "mimikyu", type: "walk", direction: "right"},
                    
                    { who: "mimikyu", type: "stand", direction: "right", time:333 },
                    { type: "textMessage", text: "MIMIQUI!!!", }, 

                    { type: "clientEvent", what:"miamikyu"},
                    { type: "addStoryFlag", flag: "MIAMIKYU"},
                    { who: "mimikyu", type: "stand", direction: "right", time:333},

                        { 
                            type: "changeMap", 
                            map: "ViridianForest",
                            soundEffect: "mimikyuScream",
                            setFilter: "fire",
                            x: withGrid(28),
                            y: withGrid(44),
                            direction: 'up',
                        },
                    // reset
                    { type: "clientEvent", what:"reset"},
                    { type: "cameraPosition", x:-208, y:-112 },
                    { who: "player", type: "stand", direction: "up", time:444},
                    
                ]
            },
            {
                required: "//",
            },
            {
                nothing: "MIAMIKYU",
            },
        ],

        // Hidden trainer
        [asGridCoords(20, 47)]: [
            {
                events: [
                    { type: "battleTeasing", who: "teamRocketB" },
                    { who: "player",type: "stand", direction: "down"},
                    { type: "textMessage", text: "Pourquoi es-tu ici?", },
                    { type: "battle", enemyId: "teamRocketB" },

                    { type: "addStoryFlag", flag: "DEFEAT_TEAM_ROCKET_B"},
                ]
            },
            {
                required: "//",
            },
            {
                nothing: "DEFEAT_TEAM_ROCKET_B",
            },
        ],

        // npcEcoA
        [asGridCoords(16, 32)]: [
            {
                events: [
                    { type: "battleTeasing", who: "npcEcoA" },
                    { who: "player",type: "stand", direction: "left"},
                    { type: "textMessage", text: "Puis-je te montrer ma collection d'insectes ?", },
                    { type: "textMessage", text: "C'est la plus belle.", },
                    { type: "battle", enemyId: "npcEcoA" },

                    { type: "addStoryFlag", flag: "DEFEAT_NPC_ECO_VF_A"},
                ]
            },
            {
                required: "//",
            },
            {
                nothing: "DEFEAT_NPC_ECO_VF_A",
            },
        ],
        [asGridCoords(17, 32)]: [
            {
                events: [
                    { type: "battleTeasing", who: "npcEcoA" },
                    { who: "player",type: "stand", direction: "left"},
                    { type: "textMessage", text: "Puis-je te montrer ma collection d'insectes ?", },
                    { type: "textMessage", text: "C'est la plus belle.", },
                    { type: "battle", enemyId: "npcEcoA" },

                    { type: "addStoryFlag", flag: "DEFEAT_NPC_ECO_VF_A"},
                ]
            },
            {
                required: "//",
            },
            {
                nothing: "DEFEAT_NPC_ECO_VF_A",
            },
        ],

        // team rocket one 
        [asGridCoords(47, 25)]: [
            {
                events: [
                    { type: "battleTeasing", who: "teamRocketC" },
                    { who: "player",type: "stand", direction: "right"},
                    { type: "textMessage", text: "Il ne devrait pas y avoir de témoins.", },
                    { type: "battle", enemyId: "teamRocketC" },

                    { type: "addStoryFlag", flag: "DEFEAT_TEAM_ROCKET_071120221"},
                ]
            },
            {
                required: "//",
            },
            {
                nothing: "DEFEAT_TEAM_ROCKET_071120221",
            },
        ],
        [asGridCoords(46, 25)]: [
            {
                events: [
                    { type: "battleTeasing", who: "teamRocketC" },
                    { who: "player",type: "stand", direction: "right"},
        
                    { who: "teamRocketC",type: "walk", direction: "left"},
                    { type: "textMessage", text: "Il ne devrait pas y avoir de témoins.", },
                    { type: "battle", enemyId: "teamRocketC" },

                    { type: "addStoryFlag", flag: "DEFEAT_TEAM_ROCKET_071120221"},
                ]
            },
            {
                required: "//",
            },
            {
                nothing: "DEFEAT_TEAM_ROCKET_071120221",
            },
        ],

        // team rocket two 
        [asGridCoords(47, 19)]: [
            {
                events: [
                    { type: "battleTeasing", who: "teamRocketD" },
                    { who: "player",type: "stand", direction: "left"},
                    { type: "textMessage", text: "Malheureusement, tu ne peux pas aller plus loin.", },
                    { type: "battle", enemyId: "teamRocketD" },

                    { type: "addStoryFlag", flag: "DEFEAT_TEAM_ROCKET_071120222"},
                ]
            },
            {
                required: "//",
            },
            {
                nothing: "DEFEAT_TEAM_ROCKET_071120222",
            },
        ],
        [asGridCoords(48, 19)]: [
            {
                events: [
                    { type: "battleTeasing", who: "teamRocketD" },
                    { who: "player",type: "stand", direction: "left"},
                    
                    { who: "teamRocketD",type: "walk", direction: "right"},
                    { type: "textMessage", text: "Malheureusement, tu ne peux pas aller plus loin.", },
                    { type: "battle", enemyId: "teamRocketD" },

                    { type: "addStoryFlag", flag: "DEFEAT_TEAM_ROCKET_071120222"},
                ]
            },
            {
                required: "//",
            },
            {
                nothing: "DEFEAT_TEAM_ROCKET_071120222",
            },
        ],
    }
}