import mapDown from "./../../../../../../assets/graphics/maps/umbrella_town/mall/down.png";
import mapUp from "./../../../../../../assets/graphics/maps/umbrella_town/mall/up.png"
import { collisions } from './MapCollision';

import { asGridCoords, loadWall, withGrid } from './../../../../../../Utils';

import blank from "./../../../../../../assets/graphics/characters/blank.png";
import npcA from "./../../../../../../assets/graphics/characters/npcH.png"
import npcB from "./../../../../../../assets/graphics/characters/NPC 01.png"
import npcC from "./../../../../../../assets/graphics/characters/npc3.png"
import npcD from "./../../../../../../assets/graphics/characters/NPC 22.png"
// import musicBg from "./../../../../../../assets/audio/background_music/ViridianCity.ogg"

export const UTMall = {
    id: "UTMall",
    lowerSrc: mapDown,
    upperSrc: mapUp,
    gameObjects: {},
    configObjects: {
        player: ({
            type: "Person",
            isPlayerControlled: true,
            canRun: false,
        }),
        shopA: ({
            type: "Person",
            x: withGrid(22),
            y: withGrid(32),
            src: blank,
            behaviorLoop: [
                { type: "stand", direction: "down", time: 4200},
            ],
            talking : [
                {
                    events: [
                        { type: "textMessage", text: "Bonjour,", facePlayer: "shopA" },
                        { type: "textMessage", text: "De quoi avez vous besoin aujourd'hui?", facePlayer: "shopA" },
                        { type: "shopMenu", itemsToBuy: ["POTION", "ANTIDOTE", "PARALYZEHEAL", "FULLHEAL"]},
                        
                        { type: "textMessage", text: "Merci beaucoup!", facePlayer: "shopA" },
                    ]
                }
            ]
        }),
        shopB: ({
            type: "Person",
            x: withGrid(25),
            y: withGrid(32),
            src: blank,
            behaviorLoop: [
                { type: "stand", direction: "down", time: 4200},
            ],
            talking : [
                {
                    events: [
                        { type: "textMessage", text: "Bonjour,", facePlayer: "shopA" },
                        { type: "textMessage", text: "Vous souhaitez acheter quelque chose?", facePlayer: "shopA" },
                        { type: "shopMenu", itemsToBuy: ["POTION", "ANTIDOTE", "PARALYZEHEAL", "FULLHEAL"]},
                        
                        { type: "textMessage", text: "En vous remerciant!", facePlayer: "shopA" },
                    ]
                }
            ]
        }),
        articleA: ({
            type: "Person",
            x: withGrid(16),
            y: withGrid(28),
            src: blank,
            behaviorLoop: [
                { type: "stand", direction: "down", time: 4200},
            ],
            talking : [
                {
                    events: [
                        { type: "textMessage", text: "Un téléphone très classique.", facePlayer: "articleA" },
                    ]
                }
            ]
        }),
        articleB: ({
            type: "Person",
            x: withGrid(23),
            y: withGrid(28),
            src: blank,
            behaviorLoop: [
                { type: "stand", direction: "down", time: 4200},
            ],
            talking : [
                {
                    events: [
                        { type: "textMessage", text: "La bonne vieille Nintendo 64!", facePlayer: "articleB" },
                    ]
                }
            ]
        }),
        articleC: ({
            type: "Person",
            x: withGrid(24),
            y: withGrid(28),
            src: blank,
            behaviorLoop: [
                { type: "stand", direction: "down", time: 4200},
            ],
            talking : [
                {
                    events: [
                        { type: "textMessage", text: "La bonne vieille Nintendo 64!", facePlayer: "articleC" },
                    ]
                }
            ]
        }),
        articleD: ({
            type: "Person",
            x: withGrid(31),
            y: withGrid(28),
            src: blank,
            behaviorLoop: [
                { type: "stand", direction: "down", time: 4200},
            ],
            talking : [
                {
                    events: [
                        { type: "textMessage", text: "La NES, une véritable relique.", facePlayer: "articleD" },
                    ]
                }
            ]
        }),
        articleF: ({
            type: "Person",
            x: withGrid(26),
            y: withGrid(32),
            src: blank,
            behaviorLoop: [
                { type: "stand", direction: "down", time: 4200},
            ],
            talking : [
                {
                    events: [
                        { type: "textMessage", text: "Formulaire d'inscription à la PokéFête.", facePlayer: "articleD" },
                    ]
                }
            ]
        }),
        
        // npc 
        npcShopA: ({
            type: "Person",
            x: withGrid(22),
            y: withGrid(33),
            src: npcA,
            behaviorLoop: [
                { type: "stand", direction: "up", time: 4200},
            ],
            talking : [
                {
                    events: [
                        { type: "textMessage", text: "Shop shop shop", facePlayer: "articleD" },
                    ]
                }
            ]
        }),
        npcShopB: ({
            type: "Person",
            x: withGrid(25),
            y: withGrid(33),
            src: npcA,
            behaviorLoop: [
                { type: "stand", direction: "up", time: 4200},
            ],
            talking : [
                {
                    events: [
                        { type: "textMessage", text: "Shop shop shop", facePlayer: "articleD" },
                    ]
                }
            ]
        }),
        npcA: ({
            type: "Person",
            x: withGrid(14),
            y: withGrid(26),
            src: npcB,
            behaviorLoop: [
                { type: "stand", direction: "down", time: 3200},
            ],
            talking : [
                {
                    events: [
                        { type: "textMessage", text: "J'assure la sécurité du centre commercial.", facePlayer: "npcA" },
                        { type: "textMessage", text: "Tout est calme.", facePlayer: "npcA" },
                    ]
                }
            ]
        }),
        npcB: ({
            type: "Person",
            x: withGrid(35),
            y: withGrid(27),
            src: npcB,
            behaviorLoop: [
                { type: "stand", direction: "left", time: 3200},
            ],
            talking : [
                {
                    events: [
                        { type: "textMessage", text: "Je ferais bien une sieste.", facePlayer: "npcB" },
                        { type: "textMessage", text: "Zzz...", facePlayer: "npcA" },
                    ]
                }
            ]
        }),
        npcC: ({
            type: "Person",
            x: withGrid(17),
            y: withGrid(30),
            src: npcC,
            behaviorLoop: [
                { type: "stand", direction: "right", time: 3200},
                { type: "walk", direction: "right"},
                { type: "walk", direction: "right"},
                { type: "stand", direction: "down", time: 5200},
                { type: "walk", direction: "left"},
                { type: "walk", direction: "left"},
                { type: "stand", direction: "down", time: 4600},
            ],
            talking : [
                {
                    events: [
                        { type: "textMessage", text: "J'avais vraiment besoin d'une Potion.", facePlayer: "npcC" },
                    ]
                }
            ]
        }),
        npcD: ({
            type: "Person",
            x: withGrid(27),
            y: withGrid(28),
            src: npcD,
            behaviorLoop: [
                { type: "stand", direction: "right", time: 4200},
                { type: "stand", direction: "down", time: 6200},
                { type: "stand", direction: "left", time: 4600},
            ],
            talking : [
                {
                    events: [
                        { type: "textMessage", text: "Les Pokéballs reviennent la semaine prochaine!", facePlayer: "npcD" },
                    ]
                }
            ]
        }),
        
    },
    walls: loadWall(collisions),
    // grass: loadGrass(grass),
    cutsceneSpaces: {
        [asGridCoords(15, 35)]: [
            {
                events: [
                    { 
                        type: "changeMap", 
                        map: "UmbrellaTown",
                        soundEffect: "doors",
                        x: withGrid(22),
                        y: withGrid(44),
                        direction: 'down',
                    },
                ]
            }
        ],
        [asGridCoords(32, 35)]: [
            {
                events: [
                    { 
                        type: "changeMap", 
                        map: "UmbrellaTown",
                        soundEffect: "doors",
                        x: withGrid(26),
                        y: withGrid(44),
                        direction: 'down',
                    },
                ]
            }
        ],
    }
}