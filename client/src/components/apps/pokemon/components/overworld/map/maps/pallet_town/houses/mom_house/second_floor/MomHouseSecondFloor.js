import mapDown from "../../../../../../../../assets/graphics/maps/pallet_town/houses/mom_house/second_floor/down.png";
import mapUp from "../../../../../../../../assets/graphics/maps/pallet_town/houses/mom_house/second_floor/up.png";
import { collisions } from './MapCollision';

import { asGridCoords, loadWall, withGrid } from '../../../../../../../../Utils';

import blank from "../../../../../../../../assets/graphics/characters/blank.png"

export const MomHouseSecondFloor = {
    id: "MomHouseSecondFloor",
    lowerSrc: mapDown,
    upperSrc: mapUp,
    gameObjects: {},
    configObjects: {
        player: ({
            type: "Person",
            isPlayerControlled: true,
            x: withGrid(14),
            y: withGrid(16),
            direction: "up",
            canRun: false,
        }),
        computer: ({
            type: "Person",
            x: withGrid(9),
            y: withGrid(11),
            src: blank,
            talking : [
                {
                    events: [
                        { type: "textMessage", text: "Mise à jour de Windows..."},
                    ]
                },
            ]
        }),
        notebook: ({
            type: "Person",
            x: withGrid(10),
            y: withGrid(11),
            src: blank,
            talking : [
                {
                    events: [
                        { type: "textMessage", text: '"Un jour je serai le meilleur dresseur,"'},
                        { type: "textMessage", text: '"Je me battrai sans répit,"'},
                        { type: "textMessage", text: '"Je ferai tout pour être vainqueur,"'},
                        { type: "textMessage", text: '"Et gagner les défis!"'},
                    ]
                },
            ]
        }),
        bookshelf1: ({
            type: "Person",
            x: withGrid(12),
            y: withGrid(11),
            src: blank,
            talking : [
                {
                    events: [
                        { type: "textMessage", text: "Des livres sur la nature."},
                    ]
                },
            ]
        }),
        bookshelf2: ({
            type: "Person",
            x: withGrid(13),
            y: withGrid(11),
            src: blank,
            talking : [
                {
                    events: [
                        { type: "textMessage", text: "Des livres sur les Pokémons."},
                    ]
                },
            ]
        }),
        n64: ({
            type: "Person",
            x: withGrid(14),
            y: withGrid(15),
            src: blank,
            talking : [
                {
                    events: [
                        { type: "textMessage", text: "La télé ne fonctionne plus."},
                    ]
                },
            ]
        }),
        degree: ({
            type: "Person",
            x: withGrid(19),
            y: withGrid(11),
            src: blank,
            talking : [
                {
                    events: [
                        { type: "textMessage", text: "Certificat de Ukulélé."},
                    ]
                },
            ]
        }),
    },
    walls: loadWall(collisions),
    cutsceneSpaces: {
        [asGridCoords(17, 12)]: [
            {
                events: [
                    { 
                        type: "changeMap", 
                        map: "MomHouseFirstFloor",
                        soundEffect: "stairs",
                        x: withGrid(19),
                        y: withGrid(12),
                        direction: 'left',
                    },
                ]
            }
        ]
    },
}