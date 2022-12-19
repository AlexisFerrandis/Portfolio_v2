import mapDown from "../../../../../../../assets/graphics/maps/umbrella_town/houses/evolving_house/down.png";
import mapUp from "../../../../../../../assets/graphics/maps/umbrella_town/houses/evolving_house/up.png"
import { collisions } from './MapCollision';

import { asGridCoords, loadWall, withGrid } from '../../../../../../../Utils';

import blank from "../../../../../../../assets/graphics/characters/blank.png";
import npcA from "../../../../../../../assets/graphics/characters/npcF.png";
import npcB from "../../../../../../../assets/graphics/characters/NPC 23.png";
import npcC from "../../../../../../../assets/graphics/characters/trainer_LEADER_Blaine.png";

// import musicBg from "../../../../../../../assets/audio/background_music/ViridianCity.ogg"

export const UTHouseSeven = {
    id: "UTHouseSeven",
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
            x: withGrid(9),
            y: withGrid(14),
            src: npcA,
            behaviorLoop: [
                { type: "stand", direction: "up", time: 4200},
            ],
            talking : [
                {
                    events: [
                        { type: "textMessage", text: "Grâce à toutes nos recherches,", facePlayer: "npcA" },
                        { type: "textMessage", text: "Nous sommes maintenant capables de réaliser des prouesses!", facePlayer: "npcA" },
                    ]
                }
            ]
        }),
        npcB: ({
            type: "Person",
            x: withGrid(12),
            y: withGrid(19),
            src: npcB,
            behaviorLoop: [
                { type: "stand", direction: "left", time: 4200},
            ],
            talking : [
                {
                    events: [
                        { type: "textMessage", text: "Je veille à la bonne utilisation du matériel.", facePlayer: "npcB" },
                    ]
                }
            ]
        }),
        npcC: ({
            type: "Person",
            x: withGrid(14),
            y: withGrid(16),
            src: npcC,
            behaviorLoop: [
                { type: "stand", direction: "down", time:5200},
            ],
            talking : [
                {   
                    required: ["VAPOREON_JOIN_TEAM"],
                    events: [
                        { type: "textMessage", text: "Aquali est la forme aquatique d'Evoli.", facePlayer: "npcC" },
                        { type: "textMessage", text: "C'est un Pokémon de type eau.", facePlayer: "npcC" },
                    ]
                },
                {   
                    required: ["EEVEE_JOIN_TEAM"],
                    events: [
                        { type: "textMessage", text: "Nous possèdons une technologie extraordinaire!", facePlayer: "npcC" },
                        { type: "textMessage", text: "Nous pouvons faire évoluer les Pokémons!", facePlayer: "npcC" },
                        { type: "textMessage", text: "Nous allons faire évoluer ton Evoli.", facePlayer: "npcC" },
                        { type: "textMessage", text: "Je suis sûr que son évolution est remarquable!", facePlayer: "npcC" },
                        { type: "textMessage", text: "3...", facePlayer: "npcC" },
                        { type: "textMessage", text: "2...", facePlayer: "npcC" },
                        { type: "textMessage", text: "1...", facePlayer: "npcC" },
                        { type: "clientEvent", what:"aquali"},
                        { who: "npcB", type: "stand", direction: "left", time: 15000},
                        
                        { type: "textMessage", text: "Félicitations!", facePlayer: "npcC" },
                        { type: "textMessage", text: "Evoli évolue en Aquali!", facePlayer: "npcC" },
                        { type: "getPokemon", id:"vaporeon"},
                        { type: "addStoryFlag", flag: "VAPOREON_JOIN_TEAM"},
                        { type: "textMessage", text: "Il est vraiment magnifique!", facePlayer: "npcC" },

                        { type: "clientEvent", what:"reset"},
                    ]
                },
                {
                    events: [
                        { type: "textMessage", text: "Nous possèdons une technologie extraordinaire!", facePlayer: "npcC" },
                        { type: "textMessage", text: "Nous pouvons faire évoluer les Pokémons!", facePlayer: "npcC" },
                        { type: "textMessage", text: "Si tu parviens à trouver un Evoli, nous devrions pouvoir le faire évoluer!", facePlayer: "npcC" },
                    ]
                },
            ]
        }),
        booksA: ({
            type: "Person",
            x: withGrid(12),
            y: withGrid(12),
            src: blank,
            behaviorLoop: [
                { type: "stand", direction: "down", time: 5200},
            ],
            talking : [
                {
                    events: [
                        { type: "textMessage", text: "Charles Darwin : qu'est-ce que la théorie de l'évolution?", facePlayer: "booksA" },
                    ]
                }
            ]
        }),
        booksB: ({
            type: "Person",
            x: withGrid(13),
            y: withGrid(12),
            src: blank,
            behaviorLoop: [
                { type: "stand", direction: "down", time: 5200},
            ],
            talking : [
                {
                    events: [
                        { type: "textMessage", text: "Le Darwinisme, enrichissements et controverses scientifiques...", facePlayer: "booksB" },
                    ]
                }
            ]
        }),
        booksC: ({
            type: "Person",
            x: withGrid(14),
            y: withGrid(12),
            src: blank,
            behaviorLoop: [
                { type: "stand", direction: "down", time: 5200},
            ],
            talking : [
                {
                    events: [
                        { type: "textMessage", text: "Biographie de Jean-Baptiste de Lamarck.", facePlayer: "booksC" },
                    ]
                }
            ]
        }),
        booksD: ({
            type: "Person",
            x: withGrid(15),
            y: withGrid(12),
            src: blank,
            behaviorLoop: [
                { type: "stand", direction: "down", time: 5200},
            ],
            talking : [
                {
                    events: [
                        { type: "textMessage", text: "Les Anges de la téléréalité sont ils les Philosophes d'aujourd'hui?", facePlayer: "booksC" },
                    ]
                }
            ]
        }),
        booksE: ({
            type: "Person",
            x: withGrid(16),
            y: withGrid(12),
            src: blank,
            behaviorLoop: [
                { type: "stand", direction: "down", time: 5200},
            ],
            talking : [
                {
                    events: [
                        { type: "textMessage", text: "Les Pokémons motos sont ils des Pokémons?", facePlayer: "booksC" },
                    ]
                }
            ]
        }),
    },
    walls: loadWall(collisions),
    // grass: loadGrass(grass),
    cutsceneSpaces: {
        [asGridCoords(19, 12)]: [
            {
                events: [
                    { 
                        type: "changeMap", 
                        map: "UmbrellaTown",
                        soundEffect: "doors",
                        x: withGrid(40),
                        y: withGrid(46),
                        direction: 'up',
                    },
                ]
            }
        ],
    }
}