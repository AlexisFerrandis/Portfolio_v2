import mapDown from "./../../../../../../../assets/graphics/maps/pallet_town/houses/chen_lab/down.png";
import mapUp from "./../../../../../../../assets/graphics/maps/pallet_town/houses/chen_lab/up.png";
import { collisions } from './MapCollision';

import { asGridCoords, loadWall, withGrid } from './../../../../../../../Utils';


import blank from "./../../../../../../../assets/graphics/characters/blank.png";

import npcE from "./../../../../../../../assets/graphics/characters/npcE.png"; // Régis girl
import npcF from "./../../../../../../../assets/graphics/characters/npcF.png"; // scientist
import profChen from "./../../../../../../../assets/graphics/characters/profChen.png";
import rival from "./../../../../../../../assets/graphics/characters/rival.png";

import pokeball from "./../../../../../../../assets/graphics/characters/item.png";


// import musicBg from "./../../../../../../../assets/audio/background_music/PalletTownBurn.mp3"

export const ChenLab = {
    id: "ChenLab",
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
            y: withGrid(20),
            src: npcF,
            behaviorLoop: [
                { type: "stand", direction: "down", time: 1000},
            ],
            talking : [
                {
                    events: [
                        { type: "textMessage", text: "J'aime beaucoup Monsieur Chen.", facePlayer: "npcA" },
                    ]
                }
            ]
        }),
        npcB: ({
            type: "Person",
            x: withGrid(11),
            y: withGrid(19),
            src: npcE,
            behaviorLoop: [
                { type: "stand", direction: "up", time: 4000},
                { type: "walk", direction: "right"},
                { type: "stand", direction: "up", time: 4400},
                { type: "walk", direction: "left"},
            ],
            talking : [
                {
                    events: [
                        { type: "textMessage", text: "Il y a tellement de connaissances ici.", facePlayer: "npcB" },
                    ]
                }
            ]
        }),
        npcC: ({
            type: "Person",
            x: withGrid(21),
            y: withGrid(19),
            src: npcF,
            behaviorLoop: [
                { type: "stand", direction: "down", time: 1000},
            ],
            talking : [
                {
                    events: [
                        { type: "textMessage", text: "Nous devons en savoir plus sur les Pokémons et leurs attributs.", facePlayer: "npcC" },
                    ]
                }
            ]
        }),
        profChen: ({
            type: "Person",
            x: withGrid(16),
            y: withGrid(11),
            src: profChen,
            behaviorLoop: [
                { type: "stand", direction: "down", time: 1000},
            ],
            talking : [
                {
                    required: ["TALKED_TO_CHEN_FIRST_TIME"],
                    events: [
                        { type: "textMessage", text: "Chen: Tu devrais pouvoir aller dans les hautes herbes à présent.", facePlayer: "profChen"},
                    ]
                },
                {
                    events: [
                        { type: "textMessage", text: "Chen: Que veux tu encore Régis?",  },
                        { type: "textMessage", text: "Régis: Je veux un Pokémon." },
                        { type: "textMessage", text: "Chen: Mais il ne m'en reste qu'un seul!" },
                        { type: "textMessage", text: "Chen: Seras-tu gentil avec lui?" },
                        { type: "textMessage", text: "Régis: Oui oui bien sûr." },
                        { who: "profChen", type: "stand", direction: "right", time: 700},
                        { who: "profChen", type: "stand", direction: "left", time: 700},
                        { type: "textMessage", text: "Chen: D'accord, tu peux le prendre.", facePlayer: "profChen" },
                        { type: "textMessage", text: "Régis: Super Papi." },
                        { type: "textMessage", text: "Régis: J'espère qu'il est fort." },
                        { who: "rival", type: "stand", direction: "right", time: 500},
                        { type: "textMessage", text: "Régis: Haha, plus de Pokémon pour toi!" },
                        { who: "rival", type: "walk", direction: "down"},
                        { who: "rival", type: "walk", direction: "right"},
                        { who: "rival", type: "walk", direction: "right"},
                        { who: "rival", type: "walk", direction: "right"},
                        { who: "rival", type: "walk", direction: "right"},
                        { who: "rival", type: "walk", direction: "right"},
                        { who: "rival", type: "stand", direction: "up", time: 400},
                        { who: "pokeballC", type: "stand", direction: "left"},
                        { who: "rival", type: "stand", direction: "up", time: 400},
                        
                        { who: "rival", type: "walk", direction: "down"},
                        { who: "rival", type: "walk", direction: "left"},
                        { who: "rival", type: "walk", direction: "left"},
                        { who: "rival", type: "walk", direction: "left"},
                        { who: "rival", type: "walk", direction: "left"},
                        { who: "rival", type: "walk", direction: "down"},
                        { who: "rival", type: "stand", direction: "up", time: 700},
                        
                        { who: "rival", type: "walk", direction: "down"},
                        { who: "rival", type: "walk", direction: "down"},
                        { who: "rival", type: "walk", direction: "down"},
                        { who: "rival", type: "walk", direction: "down"},
                        { who: "rival", type: "walk", direction: "down"},
                        { who: "rival", type: "walk", direction: "down"},
                        { who: "rival", type: "walk", direction: "down"},
                        { who: "rival", type: "walk", direction: "down"},
                        { who: "rival", type: "walk", direction: "down", },
                        { type: "textMessage", text: "Chen: Ce n'est pas un mauvais garçon.",  facePlayer: "profChen"},
                        { type: "textMessage", text: "Chen: Il peut être un peu tapageur cependant." },
                        { type: "textMessage", text: "Chen: Tu es aussi ici pour un Pokémon, n'est-ce pas ?" },
                        { who: "rival", type: "walk", direction: "down"},
                        { who: "rival", type: "walk", direction: "down"},
                        { who: "rival", type: "walk", direction: "down"},
                        { who: "rival", type: "walk", direction: "down"},
                        { type: "textMessage", text: "Chen: Comme tu peux le voir, j'ai malheureusement donné le dernier." },
                        { type: "textMessage", text: "Chen: ..." },
                        { type: "textMessage", text: "Chen: J'ai peut être une Poké Ball au fond d'un tiroir..." },
                        
                        { who: "profChen", type: "walk", direction: "left"},
                        { who: "profChen", type: "walk", direction: "left"},
                        { who: "profChen", type: "walk", direction: "left"},
                        { who: "profChen", type: "walk", direction: "up"},
                        { who: "profChen", type: "stand", direction: "up", time: 1000},
                        { type: "textMessage", text: "Chen: On dirait que c'est le cas." },
                        { who: "profChen", type: "walk", direction: "down"},
                        { who: "profChen", type: "walk", direction: "right"},
                        { who: "profChen", type: "walk", direction: "right"},
                        { who: "profChen", type: "walk", direction: "right"},
                        { who: "profChen", type: "stand", direction: "down", time: 1000},
                        { type: "textMessage", text: "Chen: Tu peux prendre celui-là!" },
                        
                        // get mimikyu
                        { type: "getPokemon", id:"growlithe"},
                        { type: "addStoryFlag", flag: "DRATINI_JOIN_TEAM"},
                        { who: "profChen", type: "stand", direction: "down", time: 3500},
                        
                        
                        { type: "textMessage", text: "Caninos rejoint l'équipe!" },
                        { type: "textMessage", text: "Chen: C'est un brave toutou." },
                        { type: "textMessage", text: "Chen: Je suis sur que vous allez bien vous entendre." },


                        { type: "addStoryFlag", flag: "TALKED_TO_CHEN_FIRST_TIME"},
                    ]
                }
            ]
        }),
        rival: ({
            type: "Person",
            x: withGrid(15),
            y: withGrid(12),
            src: rival,
            behaviorLoop: [
                { type: "stand", direction: "up", time: 1000},
            ],
            talking : [
                {
                    events: [
                        { type: "textMessage", text: "Régis: Chen!" },
                        { type: "textMessage", text: "Régis: Donne moi un Pokémon!" },
                    ]
                }
            ],
            isNotHere: "TALKED_TO_CHEN_FIRST_TIME",
        }),
        pokeballC: ({
            type: "Person",
            x: withGrid(20),
            y: withGrid(12),
            src: pokeball,
            talking : [
                {
                    events: [
                        { type: "textMessage", text: "Qui a t'il à l'intérieur?"},
                    ]
                },
            ],
            isNotHere: "TALKED_TO_CHEN_FIRST_TIME",
        }),
        computer: ({
            type: "Person",
            x: withGrid(12),
            y: withGrid(9),
            src: blank,
            talking : [
                {
                    events: [
                        { type: "textMessage", text: 'Beaucoup de statistiques sur les Pokémons.'},
                    ]
                },
            ]
        }),
        degree: ({
            type: "Person",
            x: withGrid(16),
            y: withGrid(9),
            src: blank,
            talking : [
                {
                    events: [
                        { type: "textMessage", text: 'Pokémonologie docteur.'},
                    ]
                },
            ]
        }),
        degree1: ({
            type: "Person",
            x: withGrid(17),
            y: withGrid(9),
            src: blank,
            talking : [
                {
                    events: [
                        { type: "textMessage", text: 'Maitre du Brainstorm.'},
                    ]
                },
            ]
        }),
    },
    walls: loadWall(collisions),
    cutsceneSpaces: {
        [asGridCoords(16, 22)]: [
            {
                events: [
                    { 
                        type: "changeMap", 
                        map: "PalletTown",
                        soundEffect: "doors",
                        x: withGrid(43),
                        y: withGrid(63),
                        direction: 'down',
                    },
                ]
            }
        ]
    }
}