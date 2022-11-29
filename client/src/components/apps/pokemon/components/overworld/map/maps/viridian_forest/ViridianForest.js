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
import npcXX from "../../../../../assets/graphics/characters/npcXX.png";
import npcE from "../../../../../assets/graphics/characters/npcE.png";
import npcF from "../../../../../assets/graphics/characters/npcV.png";

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
                        { type: "textMessage", text: "One of the most beautiful forest in the world is burning.", facePlayer: "npcA" },
                        { type: "textMessage", text: "That make me so sad...", facePlayer: "npcA" },
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
                        { type: "textMessage", text: "I tried to put out the fire.", facePlayer: "npcB" },
                        { type: "textMessage", text: "But I couldn't do anything.", facePlayer: "npcB" },
                    ]
                },
            ],
        }),
        npcD: ({
            type: "Person",
            x: withGrid(47),
            y: withGrid(5),
            src: npcXX,
            behaviorLoop: [
                { type: "stand", direction: "left", time: 5200},
            ],
            talking : [
                {
                    required: ["TALK_TO_ANNA"],
                    events: [
                        { type: "textMessage", text: "..."},
                    ]
                },
                {
                    events: [
                        { type: "textMessage", text: "..."},
                        { type: "textMessage", text: "A branch fell on me."},
                        { who: "npcD", type: "stand", direction: "left", time: 1234},
                        { type: "textMessage", text: "My daughter is waiting for me."},
                        { type: "textMessage", text: "But I don't think I'll be able to find her."},
                        
                        { who: "player", type: "stand", direction: "left", time: 800},
                        { who: "player", type: "stand", direction: "down", time: 800},
                        { who: "player", type: "stand", direction: "up", time: 800},
                        
                        { type: "textMessage", text: "If you see her, tell her that I love her more than anything."},
                        { who: "npcD", type: "stand", direction: "left", time: 1234},
                        { type: "textMessage", text: "Please..."},
                        { who: "npcD", type: "stand", direction: "left", time: 1234},
                        { type: "addStoryFlag", flag: "TALK_TO_ANNA"},
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
                    required: ["TALK_TO_ANNA"],
                    events: [
                        { type: "textMessage", text: "She doesn't look good at all."},
                    ]
                },
                {
                    events: [
                        { type: "textMessage", text: "There's a wounded woman over there.", facePlayer: "npcE" },
                        { type: "textMessage", text: "I hope she is fine.", facePlayer: "npcE" },
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
                    events: [
                        { type: "textMessage", text: "I lost myself.", facePlayer: "npcF" },
                        { type: "textMessage", text: "This forest is a real maze.", facePlayer: "npcF" },
                    ]
                },
            ],
        }),

       // trainers 

       teamRocketA: ({
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
                        { type: "textMessage", text: "No one should stay here."},
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
                        { type: "textMessage", text: "I really like insects."},
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
                        { type: "textMessage", text: "I must not leave any witnesses."},
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
                        { type: "textMessage", text: "This is a one-way road."},
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
                        { type: "textMessage", text: "Viridian Forest, don't get lost."},
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
                        { type: "textMessage", text: "To exit, go right."},
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
                        { type: "textMessage", text: "You might find rare pokemon here."},
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
                        { type: "textMessage", text: "To exit, go left."},
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
                        { type: "textMessage", text: "Umbrella Town."},
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
                    { type: "textMessage", text: "CHARIZARD!!! PLEASE!", },
                    { type: "textMessage", text: "STOP!!!", },
                    { who: "player", type: "walk", direction: "up"},
                    
                    
                    
                    { type: "cameraPosition", x:-208, y:-64 },
                    { type: "playSoundEffect", soundEffect:"roar"},
                    { type: "clientEvent", what:"charizard"},
                    
                    { who: "player", type: "stand", direction: "up", time: 3000},
                    { type: "textMessage", text: "CHAAAAAAAARIIIZAAAAARD!!!", },
                    
                    { who: "player", type: "stand", direction: "up", time: 2000},
                    { type: "textMessage", text: "What are you doing?!", },
                    { type: "textMessage", text: "We just had to scare them!", },
                    { type: "textMessage", text: "Not burn the whole forest!", },
                    
                    { type: "textMessage", text: "CHAAAAAAAAAAA!!!", },

                    { who: "teamRocketA", type: "stand", direction: "down", time: 1000},
                    { type: "textMessage", text: "He is completely uncontrollable.", },
                    { who: "teamRocketB", type: "stand", direction: "down", time: 1000},
                    { type: "textMessage", text: "We wanted to keep the trainers away,", },
                    { type: "textMessage", text: "So that we could steal all Pokemon in this forest.", },
                    { type: "textMessage", text: "But Charizard start to burn everything.", },
                    { type: "textMessage", text: "And now there's nothing we can do!", }, 

                    
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

                    
                    { type: "textMessage", text: "Good luck with that!", }, 
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
                    
                    
                    { type: "textMessage", text: "Mimikyu...", }, 
                    { who: "mimikyu", type: "walk", direction: "right"},
                    { who: "mimikyu", type: "walk", direction: "right"},
                    
                    { who: "mimikyu", type: "stand", direction: "right", time:333 },
                    { type: "textMessage", text: "MIMIKYU!!!", }, 

                    { type: "clientEvent", what:"miamikyu"},
                    { type: "addStoryFlag", flag: "MIAMIKYU"},
                    { who: "mimikyu", type: "stand", direction: "right", time:333},


                        { 
                            type: "changeMap", 
                            map: "ViridianForest",
                            soundEffect: "mimikyuScream",
                            x: withGrid(28),
                            y: withGrid(44),
                            direction: 'up',
                        },
                    { type: "clientEvent", what:"reset"},
                   
                    
                    { who: "player", type: "stand", direction: "up", time:444},
                    
                    // reset
                    { type: "cameraPosition", x:-208, y:-112 },
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
                    { type: "textMessage", text: "Why are you here?", },
                    { type: "battle", enemyId: "teamRocketB" },

                    { type: "textMessage", text: "I underestimated you.", },
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
                    { type: "textMessage", text: "Can I show you my bug collection?", },
                    { type: "textMessage", text: "Almost all of them burned.", },
                    { type: "battle", enemyId: "npcEcoA" },

                    { type: "textMessage", text: "I underestimated you.", },
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
                    { type: "textMessage", text: "Can I show you my bug collection?", },
                    { type: "textMessage", text: "Almost all of them burned.", },
                    { type: "battle", enemyId: "npcEcoA" },

                    { type: "textMessage", text: "I underestimated you.", },
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
                    { type: "textMessage", text: "There should be no witnesses.", },
                    { type: "battle", enemyId: "teamRocketC" },

                    { type: "textMessage", text: "I can't stop you now..", },
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
                    { type: "textMessage", text: "There should be no witnesses.", },
                    { type: "battle", enemyId: "teamRocketC" },

                    { type: "textMessage", text: "I can't stop you now..", },
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
                    { type: "textMessage", text: "Unfortunately you can't go any further.", },
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
                    { type: "textMessage", text: "Unfortunately you can't go any further.", },
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