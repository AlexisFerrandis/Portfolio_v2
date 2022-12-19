import { collisions } from './MapCollision';

import { asGridCoords, loadWall, withGrid } from '../../../../../Utils';

import lowerImg from "../../../../../assets/graphics/maps/new_game/down.png";
import upperImg from "../../../../../assets/graphics/maps/new_game/up.png";

import momImg from "../../../../../assets/graphics/characters/mom.png";
import musicBg from "../../../../../assets/audio/background_music/PalletTown.ogg"


export const NewGame = {
    id: "NewGame",
    lowerSrc: lowerImg,
    upperSrc: upperImg,
    gameObjects: {},
    configObjects: {
        player: ({
            type: "Person",
            isPlayerControlled: true,
            x: withGrid(13),
            y: withGrid(18),
            direction: "up"
        }),
        npcMom: ({
            type: "Person",
            x: withGrid(13),
            y: withGrid(13),
            src: momImg,
            behaviorLoop: [
                { type: "stand", direction: "up", time: 100},
            ],
        }),
    },
    walls: loadWall(collisions),
    cutsceneSpaces: {
        [asGridCoords(13,16)]: [
            {
                events: [
                    { who: "npcMom", type: "stand", direction: "up", time: 1100},
                    { type: "textMessage", text:"Bonjour Red,"},
                    { type: "textMessage", text:"Je vais avoir besoin de ton aide."},
                    { who: "npcMom", type: "stand", direction: "down", time: 1000},
                    { type: "textMessage", text:"Mon Mimiqui a disparu."},
                    { type: "textMessage", text:"Je ne sais pas ce qu'il lui est arrivé..."},
                    { who: "npcMom", type: "stand", direction: "down", time: 1000},
                    { type: "textMessage", text:"Pourrais tu partir a sa recherche ?"},
                    { who: "npcMom", type: "walk", direction: "down"},
                    { who: "npcMom", type: "stand", direction: "down", time: 1100},
                    { type: "textMessage", text:"Je te remercie du fond du cœur."},
                    { type: "textMessage", text:"Tu devrais passer voir le Prof Chen."},
                    { who: "npcMom", type: "stand", direction: "down", time: 700},
                    { type: "textMessage", text:"Il te remettra un Pokémon pour t'épauler."},
                    { who: "npcMom", type: "stand", direction: "down", time: 1100},
                    { type: "textMessage", text:"Bonne chance."},
                    
                    { type: "addStoryFlag", flag: "GAME_INITIALISED"},

                    { who: "npcMom", type: "walk", direction: "up"},
                    { who: "npcMom", type: "walk", direction: "up"},
                    { who: "npcMom", type: "walk", direction: "up"},
                    { who: "npcMom", type: "walk", direction: "up"},
                    { who: "npcMom", type: "walk", direction: "up"},
                    { who: "npcMom", type: "walk", direction: "up"},

                    
                    { who: "npcMom", type: "stand", direction: "down", time: 1},

                    { who: "player", type: "walk", direction: "up"},
                ]
            },
            {
                required: ["//"],
            },
            {
                nothing: "GAME_INITIALISED",
            },
        ],
        [asGridCoords(13,10)]: [
            {
                events: [
                    { who: "player", type: "stand", direction: "up", time: 100},
                    { who: "player", type: "stand", direction: "right", time: 80},
                    { who: "player", type: "stand", direction: "down", time: 70},
                    { who: "player", type: "stand", direction: "left", time: 60},
                    { who: "player", type: "stand", direction: "up", time: 50},
                    { who: "player", type: "stand", direction: "right", time: 40},
                    { who: "player", type: "stand", direction: "down", time: 30},
                    { who: "player", type: "stand", direction: "left", time: 30},
                    { who: "player", type: "stand", direction: "up", time: 20},
                    { who: "player", type: "stand", direction: "right", time: 20},
                    { who: "player", type: "stand", direction: "down", time: 20},
                    { who: "player", type: "stand", direction: "left", time: 20},
                    { who: "player", type: "stand", direction: "up", time: 20},
                    { who: "player", type: "stand", direction: "right", time: 20},
                    { who: "player", type: "stand", direction: "down", time: 30},
                    { who: "player", type: "stand", direction: "left", time: 30},
                    { who: "player", type: "stand", direction: "up", time: 20},
                    { who: "player", type: "stand", direction: "right", time: 20},
                    { who: "player", type: "stand", direction: "down", time: 20},
                    { who: "player", type: "stand", direction: "left", time: 20},
                    { who: "player", type: "stand", direction: "up", time: 20},
                    { who: "player", type: "stand", direction: "right", time: 20},
                    { 
                        type: "changeMap", 
                        map: "MomHouseSecondFloor",
                        changeMusic: musicBg,
                        x: withGrid(11),
                        y: withGrid(15),
                        direction: 'right',
                    },
                ]
            }
        ],
        
    }
}