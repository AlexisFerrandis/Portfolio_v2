import mapDown from "../../../../../assets/graphics/maps/umbrella_town/down.png";
import mapUp from "../../../../../assets/graphics/maps/umbrella_town/up.png";
import { collisions, grass, bump } from './MapCollision';

import { asGridCoords, loadWall, withGrid, loadGrass, loadBump } from '../../../../../Utils';

import ViridianForestBurning from "../../../../../assets/audio/background_music/ViridianForestBurning.ogg"
import palletTownBg from "../../../../../assets/audio/background_music/PalletTown.ogg"


import blank from "../../../../../assets/graphics/characters/blank.png";

import rival from "../../../../../assets/graphics/characters/rival.png";
import npcA from "../../../../../assets/graphics/characters/npcL.png";
import npcB from "../../../../../assets/graphics/characters/npcG.png";
import npcC from "../../../../../assets/graphics/characters/trainer_CRUSHGIRL.png";
import npcD from "../../../../../assets/graphics/characters/npcN.png";
import npcE from "../../../../../assets/graphics/characters/npcP.png";
import npcF from "../../../../../assets/graphics/characters/npcS.png";
import npcG from "../../../../../assets/graphics/characters/npc6.png";
import npcH from "../../../../../assets/graphics/characters/npc1.png";
import npcI from "../../../../../assets/graphics/characters/npcC.png";
import npcJ from "../../../../../assets/graphics/characters/npc4.png";
import npcK from "../../../../../assets/graphics/characters/trainer_COOLTRAINER_F.png";
import npcL from "../../../../../assets/graphics/characters/trainer_SAILOR.png";
import npcM from "../../../../../assets/graphics/characters/trainer_BLACKBELT.png";
import npcN from "../../../../../assets/graphics/characters/npcD.png";
import npcO from "../../../../../assets/graphics/characters/trainer_FISHERMAN.png";
import npcP from "../../../../../assets/graphics/characters/trainer_PSYCHIC_M.png";
import npcQ from "../../../../../assets/graphics/characters/NPC 12.png";
import npcR from "../../../../../assets/graphics/characters/trainer_PAINTER.png";
import npcVlad from "../../../../../assets/graphics/characters/trainer_LEADER_Koga.png";
import mimikyu from "../../../../../assets/graphics/characters/mimikyu.png";

export const UmbrellaTown = {
    id: "UmbrellaTown",
    lowerSrc: mapDown,
    upperSrc: mapUp,
    gameObjects: {},
    configObjects: {
        player: ({
            type: "Person",
            canRun: true,
            isPlayerControlled: true,
        }),
        rivalA: ({
            type: "Person",
            x: withGrid(36),
            y: withGrid(71),
            src: rival,
            behaviorLoop: [
                { type: "stand", direction: "up", time: 1200},
            ],
            talking : [
                {
                    events: [
                        { type: "textMessage", text: "..."},
                    ]
                },
            ],
            isNotHere: "DEFEAT_RIVAL_UMBRELLATOWN",
        }),
        npcA: ({
            type: "Person",
            x: withGrid(15),
            y: withGrid(69),
            src: npcA,
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
                        { type: "textMessage", text: "La forêt de l'oubli se trouve à l'ouest.", facePlayer:"npcA"},
                        { type: "textMessage", text: "Elle est fermée depuis les événements.", facePlayer:"npcA"},
                    ]
                },
            ],
        }),
        npcB: ({
            type: "Person",
            x: withGrid(68),
            y: withGrid(69),
            src: npcB,
            behaviorLoop: [
                { type: "stand", direction: "right", time: 2100},
                { type: "walk", direction: "right"},
                { type: "walk", direction: "down"},
                { type: "stand", direction: "down", time: 3200},
                { type: "walk", direction: "down"},
                { type: "stand", direction: "left", time: 4100},
                { type: "walk", direction: "left"},
                { type: "walk", direction: "up"},
                { type: "stand", direction: "up", time: 4400},
                { type: "walk", direction: "up"},
            ],
            talking : [
                {
                    events: [
                        { type: "textMessage", text: "Je suis fan de Vlad.", facePlayer:"npcB"},
                        { type: "textMessage", text: "Il a trop de style.", facePlayer:"npcB"},
                    ]
                },
            ],
        }),
        npcC: ({
            type: "Person",
            x: withGrid(55),
            y: withGrid(63),
            src: npcC,
            behaviorLoop: [
                { type: "stand", direction: "right", time: 2100},
                { type: "walk", direction: "right"},
                { type: "walk", direction: "right"},
                { type: "stand", direction: "down", time: 3200},
                { type: "walk", direction: "left"},
                { type: "stand", direction: "up", time: 4100},
                { type: "walk", direction: "left"},
                { type: "stand", direction: "right", time: 4400},
            ],
            talking : [
                {
                    events: [
                        { type: "textMessage", text: "Je joue à cache cache avec mon petit frère Dan.", facePlayer:"npcC"},
                        { type: "textMessage", text: "Il est vraiment bien caché.", facePlayer:"npcC"},
                    ]
                },
            ],
        }),
        npcD: ({
            type: "Person",
            x: withGrid(72),
            y: withGrid(45),
            src: npcD,
            behaviorLoop: [
                { type: "stand", direction: "up", time: 2100},
            ],
            talking : [
                {
                    events: [
                        { type: "textMessage", text: "Il est grand temps de réparer cette route.", facePlayer:"npcD"},
                        { type: "textMessage", text: "Ca fait des mois qu'elle est en travaux.", facePlayer:"npcD"},
                    ]
                },
            ],
        }),
        npcE: ({
            type: "Person",
            x: withGrid(72),
            y: withGrid(44),
            src: npcE,
            behaviorLoop: [
                { type: "stand", direction: "down", time: 2100},
            ],
            talking : [
                {
                    events: [
                        { type: "textMessage", text: "On fait ce qu'on peut pas ce qu'on veut.", facePlayer:"npcE"},
                    ]
                },
            ],
        }),
        npcF: ({
            type: "Person",
            x: withGrid(36),
            y: withGrid(57),
            src: npcF,
            behaviorLoop: [
                { type: "stand", direction: "up", time: 2100},
            ],
            talking : [
                {
                    events: [
                        { type: "textMessage", text: "J'aimerai bien avoir mon propre lac.", facePlayer:"npcF"},
                    ]
                },
            ],
        }),
        npcG: ({
            type: "Person",
            x: withGrid(28),
            y: withGrid(53),
            src: npcG,
            behaviorLoop: [
                { type: "walk", direction: "right"},
                { type: "walk", direction: "down"},
                { type: "walk", direction: "left"},
                { type: "walk", direction: "up"},
            ],
            talking : [
                {
                    events: [
                        { type: "textMessage", text: "Hihihi!", facePlayer:"npcG"},
                    ]
                },
            ],
        }),
        npcH: ({
            type: "Person",
            x: withGrid(25),
            y: withGrid(48),
            src: npcH,
            behaviorLoop: [
                { type: "stand", direction: "left"},
            ],
            talking : [
                {
                    events: [
                        { type: "textMessage", text: "J'ai tendance à trop dépenser.", facePlayer:"npcH"},
                        { type: "textMessage", text: "Mais j'aime tellement ça!.", facePlayer:"npcH"},
                    ]
                },
            ],
        }),
        npcI: ({
            type: "Person",
            x: withGrid(24),
            y: withGrid(48),
            src: npcI,
            behaviorLoop: [
                { type: "stand", direction: "right"},
            ],
            talking : [
                {
                    events: [
                        { type: "textMessage", text: "Il dépense toutes nos économies.", facePlayer:"npcI"},
                        { type: "textMessage", text: "Et il achète que des babioles en plus!", facePlayer:"npcI"},
                    ]
                },
            ],
        }),
        npcJ: ({
            type: "Person",
            x: withGrid(15),
            y: withGrid(50),
            src: npcJ,
            behaviorLoop: [
                { type: "stand", direction: "up"},
            ],
            talking : [
                {
                    events: [
                        { type: "textMessage", text: "Il paraît qu'un Pokémon se cache sous le camion.", facePlayer:"npcJ"},
                        { type: "textMessage", text: "Un Pokémon légendaire!", facePlayer:"npcJ"},
                    ]
                },
            ],
        }),
        npcK: ({
            type: "Person",
            x: withGrid(55),
            y: withGrid(52),
            src: npcK,
            behaviorLoop: [
                { type: "stand", direction: "left", time: 1000},
                { type: "walk", direction: "left"},
                { type: "stand", direction: "left", time: 2000},
                { type: "walk", direction: "down"},
                { type: "stand", direction: "left", time: 3000},
                { type: "walk", direction: "right"},
                { type: "stand", direction: "left", time: 2000},
                { type: "walk", direction: "up"},
                { type: "stand", direction: "down", time: 4000},
            ],
            talking : [
                {
                    events: [
                        { type: "textMessage", text: "C'est le casino Pokémon!", facePlayer:"npcK"},
                        { type: "textMessage", text: "Jouer comporte des risques.", facePlayer:"npcK"},
                    ]
                },
            ],
        }),
        npcL: ({
            type: "Person",
            x: withGrid(45),
            y: withGrid(45),
            src: npcL,
            behaviorLoop: [
                { type: "stand", direction: "right", time: 3100},
                { type: "walk", direction: "right"},
                { type: "walk", direction: "right"},
                { type: "stand", direction: "down", time: 3200},
                { type: "walk", direction: "left"},
                { type: "stand", direction: "up", time: 4100},
                { type: "walk", direction: "left"},
                { type: "stand", direction: "right", time: 4400},
                { type: "walk", direction: "up"},
                { type: "walk", direction: "down"},
            ],
            talking : [
                {
                    events: [
                        { type: "textMessage", text: "C'est pas l'homme qui prend la mer.", facePlayer:"npcL"},
                        { type: "textMessage", text: "C'est la mer qui prend l'homme, ta-ta-tin!", facePlayer:"npcL"},
                    ]
                },
            ],
        }),
        npcM: ({
            type: "Person",
            x: withGrid(69),
            y: withGrid(32),
            src: npcM,
            behaviorLoop: [
                { type: "stand", direction: "down", time: 2100},
            ],
            talking : [
                {
                    events: [
                        { type: "textMessage", text: "Yaaaaaaaaaah!", facePlayer:"npcM"},
                        { type: "textMessage", text: "Yaaaaah!", facePlayer:"npcM"},
                        { type: "textMessage", text: "Yaah Yaah Yaah!", facePlayer:"npcM"},
                    ]
                },
            ],
        }),
        npcN: ({
            type: "Person",
            x: withGrid(10),
            y: withGrid(38),
            src: npcN,
            behaviorLoop: [
                { type: "stand", direction: "right", time: 3100},
                { type: "walk", direction: "right"},
                { type: "stand", direction: "down", time: 3200},
                { type: "walk", direction: "left"},
                { type: "stand", direction: "up", time: 4100},
                { type: "stand", direction: "right", time: 4400},
            ],
            talking : [
                {
                    events: [
                        { type: "textMessage", text: "Un Mimiqui?", facePlayer:"npcN"},
                        { type: "textMessage", text: "Oui oui il est passé par ici.", facePlayer:"npcN"},
                    ]
                },
            ],
        }),
        npcO: ({
            type: "Person",
            x: withGrid(17),
            y: withGrid(22),
            src: npcO,
            behaviorLoop: [
                { type: "stand", direction: "right", time: 3100},
                { type: "walk", direction: "right"},
                { type: "stand", direction: "right", time: 4400},
                { type: "walk", direction: "left"},
                { type: "stand", direction: "up", time: 4100},
            ],
            talking : [
                {
                    events: [
                        { type: "textMessage", text: "Les Pokémons sauvages sont trop forts.", facePlayer:"npcO"},
                        { type: "textMessage", text: "Je devrais m'entrainer encore un peu.", facePlayer:"npcO"},
                    ]
                },
            ],
        }),
        npcP: ({
            type: "Person",
            x: withGrid(16),
            y: withGrid(12),
            src: npcP,
            behaviorLoop: [
                { type: "stand", direction: "right", time: 3200},
                { type: "stand", direction: "left", time: 3400},
                { type: "stand", direction: "up", time: 4400},
                { type: "stand", direction: "down", time: 5400},
            ],
            talking : [
                {
                    required: ["DEFEAT_NPCBARD_UMBRELLATOWN"],
                    events: [
                        { type: "textMessage", text: "Quand la musique est bonne,", facePlayer: "npcP"},
                        { type: "textMessage", text: "Je marche seul.", facePlayer: "npcP"},
                    ]
                },
                {
                    events: [
                        { type: "textMessage", text: "Ho tu veux te battre?", facePlayer:"npcP"},
                        { type: "textMessage", text: "Tu n'as pas l'air si fort.", facePlayer:"npcP"},
                        { type: "battle", enemyId: "npcBard" },

                        
                        { type: "addStoryFlag", flag: "DEFEAT_NPCBARD_UMBRELLATOWN"},
                    ]
                },
            ],
        }),
        npcQ: ({
            type: "Person",
            x: withGrid(6),
            y: withGrid(59),
            src: npcQ,
            behaviorLoop: [
                { type: "stand", direction: "down", time: 3100},
            ],
            talking : [
                {
                    events: [
                        { type: "textMessage", text: "Je ne peux laisser passer que les détenteurs du badge.", facePlayer:"npcQ"},
                    ]
                },
            ],
        }),
        npcR: ({
            type: "Person",
            x: withGrid(30),
            y: withGrid(25),
            src: npcR,
            behaviorLoop: [
                { type: "stand", direction: "right", time: 3100},
            ],
            talking : [
                {
                    events: [
                        { type: "textMessage", text: "La maison du champion se trouve un peu plus loin.", facePlayer:"npcR"},
                    ]
                },
            ],
        }),
        npcS: ({
            type: "Person",
            x: withGrid(59),
            y: withGrid(14),
            src: npcA,
            behaviorLoop: [
                { type: "stand", direction: "right", time: 3100},
            ],
            talking : [
                {
                    events: [
                        { type: "textMessage", text: "Est ce qu'ils vont se battre?", facePlayer:"npcS"},
                    ]
                },
            ],
            isNotHere: "DEFEAT_RIVAL_WITH_MIMIKYU",
        }),
        npcT: ({
            type: "Person",
            x: withGrid(59),
            y: withGrid(15),
            src: npcB,
            behaviorLoop: [
                { type: "stand", direction: "right", time: 3100},
            ],
            talking : [
                {
                    events: [
                        { type: "textMessage", text: "Le gamin a l'air énervé.", facePlayer:"npcT"},
                    ]
                },
            ],
            isNotHere: "DEFEAT_RIVAL_WITH_MIMIKYU",
        }),

        gymDoor: ({
            type: "Person",
            x: withGrid(19),
            y: withGrid(63),
            src: blank,
            behaviorLoop: [
                { type: "stand", direction: "down", time: 3100},
            ],
            talking : [
                {
                    events: [
                        { type: "textMessage", text: "Note : Le champion revient bientôt.", facePlayer:"npcQ"},
                    ]
                },
            ],
        }),

        // signs 
        signA: ({
            type: "Person",
            x: withGrid(8),
            y: withGrid(58),
            src: blank,
            talking : [
                {
                    events: [
                        { type: "textMessage", text: "Fôret de l'oubli."},
                    ]
                },
            ]
        }),
        signB: ({
            type: "Person",
            x: withGrid(21),
            y: withGrid(64),
            src: blank,
            talking : [
                {
                    events: [
                        { type: "textMessage", text: "Arène de Céladopole"},
                    ]
                },
            ]
        }),
        signC: ({
            type: "Person",
            x: withGrid(38),
            y: withGrid(73),
            src: blank,
            talking : [
                {
                    events: [
                        { type: "textMessage", text: "Forêt de Jade."},
                    ]
                },
            ]
        }),
        signD: ({
            type: "Person",
            x: withGrid(64),
            y: withGrid(68),
            src: blank,
            talking : [
                {
                    events: [
                        { type: "textMessage", text: "Culture de tomate."},
                    ]
                },
            ]
        }),
        signE: ({
            type: "Person",
            x: withGrid(33),
            y: withGrid(49),
            src: blank,
            talking : [
                {
                    events: [
                        { type: "textMessage", text: "Propriété privée."},
                    ]
                },
            ]
        }),
        signF: ({
            type: "Person",
            x: withGrid(47),
            y: withGrid(54),
            src: blank,
            talking : [
                {
                    events: [
                        { type: "textMessage", text: "Casino Pokémon."},
                    ]
                },
            ]
        }),
        sigG: ({
            type: "Person",
            x: withGrid(53),
            y: withGrid(54),
            src: blank,
            talking : [
                {
                    events: [
                        { type: "textMessage", text: "Prix du Casino."},
                    ]
                },
            ]
        }),
        sigH: ({
            type: "Person",
            x: withGrid(24),
            y: withGrid(45),
            src: blank,
            talking : [
                {
                    events: [
                        { type: "textMessage", text: "Centre Commercial."},
                    ]
                },
            ]
        }),
        sigI: ({
            type: "Person",
            x: withGrid(11),
            y: withGrid(35),
            src: blank,
            talking : [
                {
                    events: [
                        { type: "textMessage", text: "Route 3."},
                    ]
                },
            ]
        }),
        sigJ: ({
            type: "Person",
            x: withGrid(17),
            y: withGrid(10),
            src: blank,
            talking : [
                {
                    events: [
                        { type: "textMessage", text: "Le saviez vous,"},
                        { type: "textMessage", text: "La salade César a été inventé au Mexique par un Italien."},
                    ]
                },
            ]
        }),
        sigK: ({
            type: "Person",
            x: withGrid(33),
            y: withGrid(23),
            src: blank,
            talking : [
                {
                    events: [
                        { type: "textMessage", text: "Cocon pour Pokémon volant."},
                    ]
                },
            ]
        }),
        sigL: ({
            type: "Person",
            x: withGrid(43),
            y: withGrid(10),
            src: blank,
            talking : [
                {
                    events: [
                        { type: "textMessage", text: "..."},
                        { type: "textMessage", text: "Rouh! Rouh!"},
                        { type: "textMessage", text: "..."},
                    ]
                },
            ]
        }),
        sigM: ({
            type: "Person",
            x: withGrid(48),
            y: withGrid(22),
            src: blank,
            talking : [
                {
                    events: [
                        { type: "textMessage", text: "Maison de Vlad."},
                    ]
                },
            ]
        }),
        sigN: ({
            type: "Person",
            x: withGrid(11),
            y: withGrid(58),
            src: blank,
            talking : [
                {
                    events: [
                        { type: "textMessage", text: "C'est un bikus 2000 Harry!"},
                    ]
                },
            ]
        }),
        sigO: ({
            type: "Person",
            x: withGrid(12),
            y: withGrid(58),
            src: blank,
            talking : [
                {
                    events: [
                        { type: "textMessage", text: "C'est un bikus 2000 Harry!"},
                    ]
                },
            ]
        }),
        sigP: ({
            type: "Person",
            x: withGrid(38),
            y: withGrid(40),
            src: blank,
            talking : [
                {
                    events: [
                        { type: "textMessage", text: "Locaux El Turtle Pillow."},
                    ]
                },
            ]
        }),
        casinoDoor: ({
            type: "Person",
            x: withGrid(46),
            y: withGrid(52),
            src: blank,
            talking : [
                {
                    events: [
                        { type: "textMessage", text: "Ouverture prochainement."},
                    ]
                },
            ]
        }),
        lootDoor: ({
            type: "Person",
            x: withGrid(52),
            y: withGrid(50),
            src: blank,
            talking : [
                {
                    events: [
                        { type: "textMessage", text: "Ouverture prochainement."},
                    ]
                },
            ]
        }),

        // end of story caracters
        rivalB: ({
            type: "Person",
            x: withGrid(65),
            y: withGrid(15),
            src: rival,
            behaviorLoop: [
                { type: "stand", direction: "right", time: 3100},
            ],
            talking : [
                {
                    events: [
                        { type: "textMessage", text: "CUTSCENE"},
                    ]
                },
            ],
            isNotHere: "DEFEAT_RIVAL_WITH_MIMIKYU",
        }),
        vlad: ({
            type: "Person",
            x: withGrid(66),
            y: withGrid(15),
            src: npcVlad,
            behaviorLoop: [
                { type: "stand", direction: "left", time: 3100},
            ],
            talking : [
                {
                    events: [
                        { type: "textMessage", text: "CUTSCENE"},
                    ]
                },
            ],
            isNotHere: "DEFEAT_RIVAL_WITH_MIMIKYU",
        }),
        mimikyu: ({
            type: "Person",
            x: withGrid(67),
            y: withGrid(15),
            src: mimikyu,
            behaviorLoop: [
                { type: "stand", direction: "left", time: 3100},
            ],
            talking : [
                {
                    events: [
                        { type: "textMessage", text: "CUTSCENE"},
                    ]
                },
            ],
            isNotHere: "DEFEAT_RIVAL_WITH_MIMIKYU",
        }),
    },
    walls: loadWall(collisions),
    grass: loadGrass(grass),
    bump: loadBump(bump),
    cutsceneSpaces: {

        // go to foret de l'oubli
        [asGridCoords(6, 60)]: [
            {
                events: [
                    { who: "player", type: "walk", direction: "right"},
                    { who: "npcQ", type: "walk", direction: "down"},
                    { who: "npcQ", type: "stand", direction: "right"},
                    { who: "player", type: "stand", direction: "left"},
                    { type: "textMessage", text: "Tu ne peux pas encore passer."},
                    { type: "textMessage", text: "Tu dois battre Vlad avant."},
                    { who: "npcQ", type: "walk", direction: "up"},
                    { who: "npcQ", type: "stand", direction: "right", time: 1000},
                ]
            },
        ],

        // rival meeting
        [asGridCoords(36, 74)]: [
            {
                events: [
                    { who: "player", type: "walk", direction: "up"},
                    { type: "cameraPosition", x:-208, y:-64 },
                    { who: "rivalA", type: "stand", direction: "down", time: 1000},
                    { type: "textMessage", text: "Régis: Tiens tiens..." },
                    { type: "textMessage", text: "Régis: Comment on se retrouve ?" },
                    { type: "textMessage", text: "Régis: C'est marrant je viens de retomber sur le vilain Mimiqui." },
                    { type: "textMessage", text: "Régis: Il était un peu traumatisé quand il m'a vu." },
                    { type: "textMessage", text: "Régis: Je crois qu'il n'a pas trop apprécié notre dernière rencontre." },
                    { who: "rivalA", type: "walk", direction: "down"},

                    { type: "textMessage", text: "Régis: Tu m'as l'air un peu fatigué." },
                    { type: "textMessage", text: "Régis: L'occasion parfaite pour te mettre une raclée." },
                    
                    { type: "battle", enemyId: "rivalB" },
                    { type: "textMessage", text: "Régis: Je ne comprends pas!" },
                    { type: "textMessage", text: "Régis: Mes Pokémons sont nuls." },
                    { type: "textMessage", text: "Régis: Voià tout." },
                    { type: "textMessage", text: "Régis: Pff..." },
                    { type: "textMessage", text: "Régis: Je devrais rejoindre la Team Rocket pour devenir plus fort." },
                    { type: "textMessage", text: "Régis: Je crois que leur repaire est dans cette ville." },

                    
                    { type: "addStoryFlag", flag: "DEFEAT_RIVAL_UMBRELLATOWN"},
                        { 
                            type: "changeMap", 
                            map: "UmbrellaTown",
                            setFilter: "null",
                            x: withGrid(36),
                            y: withGrid(73),
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
                nothing: "DEFEAT_RIVAL_UMBRELLATOWN",
            },
        ],

        // end of the story
        [asGridCoords(62, 18)]: [
            {
                events: [
                    { who: "player", type: "stand", direction: "up", time: 1000},
                    { who: "player", type: "walk", direction: "up"},
                    { who: "player", type: "walk", direction: "up"},
                    { who: "player", type: "walk", direction: "right"},
                    { who: "player", type: "stand", direction: "right"},
                    { type: "textMessage", text: "Régis: Pourquoi te mettrais tu en travers de ma route?" },
                    { type: "textMessage", text: "Vlad: Je ne supporte pas qu'on maltraite un Pokémon." },
                    { type: "textMessage", text: "Régis: Peut on encore le considérer ainsi?" },
                    { type: "textMessage", text: "Vald: Grr!" },
                    
                    
                    { who: "player", type: "walk", direction: "right"},
                    { who: "player", type: "walk", direction: "right"},
                    { who: "player", type: "stand", direction: "up"},
                    { who: "rivalB", type: "stand", direction: "down"},
                    { who: "rivalB", type: "stand", direction: "down", time: 1000},
                    { who: "vlad", type: "stand", direction: "down"},

                    { type: "textMessage", text: "Régis: T'es encore là toi!" },
                    { type: "textMessage", text: "Régis: Je suis bien plus fort que la dernière fois!" },
                    { who: "mimikyu", type: "walk", direction: "down"},
                    { who: "mimikyu", type: "walk", direction: "left"},
                    { who: "mimikyu", type: "stand", direction: "left"},
                    { who: "player", type: "stand", direction: "right"},

                    { type: "textMessage", text: "Mimiqui..." },
                    { type: "textMessage", text: "Vlad: On dirait que ce Mimiqui t'aime beaucoup." },
                    { type: "textMessage", text: "Vlad: J'ai l'impression qu'il veut rejoindre ton équipe." },
                    { type: "textMessage", text: "Mimiqui!" },
                    { type: "getPokemon", id:"mimikyu"},
                    { type: "addStoryFlag", flag: "MIMIKYU_FINALLY_JOIN_TEAM"},
                    { who: "rivalB", type: "stand", direction: "down", time: 3500},
                    
                    
                    { type: "textMessage", text: "Mimiqui rejoint l'équipe!" },

                    { who: "player", type: "stand", direction: "up"},
                    { who: "player", type: "stand", direction: "up", time:800},
                    { type: "textMessage", text: "Régis: Pff c'est ridicule!" },
                    { type: "textMessage", text: "Régis: Tu n'as aucune chance!" },

                    { type: "battle", enemyId: "rivalC" },
                    
                    { type: "textMessage", text: "Régis: Je ne comprends pas." },
                    { type: "textMessage", text: "Régis: Mon Pikachad est pourtant niveau 11." },
                    { who: "rivalB", type: "stand", direction: "down", time: 1500},
                    { type: "textMessage", text: "Régis: A plus les nazes!" },
                    { who: "rivalB", type: "walk", direction: "left"},
                    { who: "rivalB", type: "walk", direction: "left"},
                    { who: "rivalB", type: "walk", direction: "left"},
                    { who: "rivalB", type: "walk", direction: "down"},
                    { who: "rivalB", type: "walk", direction: "down"},
                    { who: "rivalB", type: "walk", direction: "down"},
                    { who: "rivalB", type: "walk", direction: "down"},
                    { who: "rivalB", type: "walk", direction: "down"},
                    { who: "rivalB", type: "walk", direction: "down"},

                    { who: "mimikyu", type: "stand", direction: "up"},
                    
                    { type: "textMessage", text: "Vlad: Bravo tu lui as donné une bonne leçon!" },
                    { type: "textMessage", text: "Vlad: N'hésite pas à venir me voir à l'arène un peu plus tard." },
                    
                    
                    { type: "addStoryFlag", flag: "DEFEAT_RIVAL_WITH_MIMIKYU"},
                        { 
                            type: "changeMap", 
                            map: "MomHouseFirstFloor",
                            setFilter: "null",
                            x: withGrid(14),
                            y: withGrid(16),
                            changeMusic: palletTownBg,
                            direction: 'up',
                        },
                    // reset
                    { type: "clientEvent", what:"reset"},
                    { who: "player", type: "stand", direction: "up", time:444},
                ]
            },
            {
                required: "//",
            },
            {
                nothing: "DEFEAT_RIVAL_WITH_MIMIKYU",
            },
        ],

        [asGridCoords(36, 76)]: [
            {
                events: [
                    { 
                        type: "changeMap", 
                        map: "ViridianForest",
                        soundEffect: "stairs",
                        changeMusic: ViridianForestBurning,
                        setFilter: "fire",
                        x: withGrid(9),
                        y: withGrid(10),
                        direction: 'down',
                    },
                ]
            }
        ],

        [asGridCoords(10, 57)]: [
            {
                events: [
                    { 
                        type: "changeMap", 
                        map: "UTHouseOne",
                        soundEffect: "doors",
                        setFilter: "null",
                        x: withGrid(13),
                        y: withGrid(19),
                        direction: 'up',
                    },
                ]
            }
        ],
        [asGridCoords(17, 43)]: [
            {
                events: [
                    { 
                        type: "changeMap", 
                        map: "UTHouseTwo",
                        soundEffect: "doors",
                        setFilter: "null",
                        x: withGrid(17),
                        y: withGrid(19),
                        direction: 'up',
                    },
                ]
            }
        ],
        [asGridCoords(43, 60)]: [
            {
                events: [
                    { 
                        type: "changeMap", 
                        map: "UTHouseThree",
                        soundEffect: "doors",
                        setFilter: "null",
                        x: withGrid(13),
                        y: withGrid(19),
                        direction: 'up',
                    },
                ]
            }
        ],
        [asGridCoords(47, 60)]: [
            {
                events: [
                    { 
                        type: "changeMap", 
                        map: "UTHouseFour",
                        soundEffect: "doors",
                        setFilter: "null",
                        x: withGrid(13),
                        y: withGrid(19),
                        direction: 'up',
                    },
                ]
            }
        ],
        [asGridCoords(56, 60)]: [
            {
                events: [
                    { 
                        type: "changeMap", 
                        map: "UTHouseFive",
                        soundEffect: "doors",
                        setFilter: "null",
                        x: withGrid(18),
                        y: withGrid(19),
                        direction: 'up',
                    },
                ]
            }
        ],
        [asGridCoords(64, 60)]: [
            {
                events: [
                    { 
                        type: "changeMap", 
                        map: "UTHouseSix",
                        soundEffect: "doors",
                        setFilter: "null",
                        x: withGrid(18),
                        y: withGrid(19),
                        direction: 'up',
                    },
                ]
            }
        ],
        [asGridCoords(40, 47)]: [
            {
                events: [
                    { 
                        type: "changeMap", 
                        map: "UTHouseSeven",
                        soundEffect: "doors",
                        setFilter: "null",
                        x: withGrid(19),
                        y: withGrid(13),
                        direction: 'down',
                    },
                ]
            }
        ],
        [asGridCoords(46, 40)]: [
            {
                events: [
                    { 
                        type: "changeMap", 
                        map: "UTHouseHeith",
                        soundEffect: "doors",
                        setFilter: "null",
                        x: withGrid(13),
                        y: withGrid(19),
                        direction: 'up',
                    },
                ]
            }
        ],
        [asGridCoords(55, 40)]: [
            {
                events: [
                    { 
                        type: "changeMap", 
                        map: "UTHouseNine",
                        soundEffect: "doors",
                        setFilter: "null",
                        x: withGrid(18),
                        y: withGrid(19),
                        direction: 'up',
                    },
                ]
            }
        ],
        [asGridCoords(59, 40)]: [
            {
                events: [
                    { 
                        type: "changeMap", 
                        map: "UTPokeCenterFirstFloor",
                        soundEffect: "doors",
                        setFilter: "null",
                        x: withGrid(18),
                        y: withGrid(24),
                        direction: 'up',
                    },
                ]
            }
        ],
        [asGridCoords(40, 40)]: [
            {
                events: [
                    { 
                        type: "changeMap", 
                        map: "TurtlePillowFirstFloor",
                        soundEffect: "doors",
                        setFilter: "null",
                        x: withGrid(13),
                        y: withGrid(20),
                        direction: 'up',
                    },
                ]
            }
        ],
        [asGridCoords(22, 43)]: [
            {
                events: [
                    { 
                        type: "changeMap", 
                        map: "UTMall",
                        soundEffect: "doors",
                        setFilter: "null",
                        x: withGrid(15),
                        y: withGrid(34),
                        direction: 'up',
                    },
                ]
            }
        ],
        [asGridCoords(26, 43)]: [
            {
                events: [
                    { 
                        type: "changeMap", 
                        map: "UTMall",
                        soundEffect: "doors",
                        setFilter: "null",
                        x: withGrid(32),
                        y: withGrid(34),
                        direction: 'up',
                    },
                ]
            }
        ],
        [asGridCoords(66, 13)]: [
            {
                events: [
                    { 
                        type: "changeMap", 
                        map: "VladHouse",
                        soundEffect: "doors",
                        setFilter: "null",
                        x: withGrid(17),
                        y: withGrid(22),
                        direction: 'up',
                    },
                ]
            }
        ],
    }
}