import mapDown from "../../../../../../../../assets/graphics/maps/pallet_town/houses/mom_house/first_floor/down.png";
import mapUp from "../../../../../../../../assets/graphics/maps/pallet_town/houses/mom_house/first_floor/up.png";
import { collisions } from './MapCollision';

import { asGridCoords, loadWall, withGrid } from '../../../../../../../../Utils';

import blank from "../../../../../../../../assets/graphics/characters/blank.png"

import npcMom from "../../../../../../../../assets/graphics/characters/mom.png";


export const MomHouseFirstFloor = {
    id: "MomHouseFirstFloor",
    lowerSrc: mapDown,
    upperSrc: mapUp,
    gameObjects: {},
    configObjects: {
        player: ({
            type: "Person",
            isPlayerControlled: true,
            canRun: false,
        }),
        npcMom: ({
            type: "Person",
            x: withGrid(14),
            y: withGrid(16),
            src: npcMom,
            behaviorLoop: [
                { type: "stand", direction: "right", time: 2000 },
            ],
            talking : [
                {
                    required: ["MOM_WILL_HEAL_YOU"],
                    events: [
                        { type: "textMessage", text: "Maman: Tu devrais te reposer un petit peu.", facePlayer: "npcMom" },
                        { type: "healing", position: "MomHouseFirstFloor"},
                        { type: "textMessage", text: "Maman: Te voilà bien plus en forme!", facePlayer: "npcMom" },
                    ]
                },
                {
                    required: ["DEFEAT_RIVAL_WITH_MIMIKYU"],
                    events: [
                        { type: "textMessage", text: "Maman: Tu as retrouvé mon Mimiqui!", facePlayer: "npcMom" },
                        { type: "textMessage", text: "Maman: Mais j'ai l'impression qu'il a trouvé un nouveau maître.", facePlayer: "npcMom" },
                        { type: "textMessage", text: "Maman: Vous êtes trop mignons tous les deux.", facePlayer: "npcMom" },
                        { type: "textMessage", text: "Maman: Vous pouvez partir à l'aventure à présent!", facePlayer: "npcMom" },
                        { type: "addStoryFlag", flag: "MOM_WILL_HEAL_YOU"},
                    ]
                },
                {
                    required: ["TALKED_TO_CHEN_FIRST_TIME"],
                    events: [
                        { type: "textMessage", text: "Maman: Tu devrais te reposer un petit peu.", facePlayer: "npcMom" },
                        { type: "healing", position: "MomHouseFirstFloor"},
                        { type: "textMessage", text: "Maman: Te voilà bien plus en forme!", facePlayer: "npcMom" },
                    ]
                },
                {
                    events: [
                        { type: "textMessage", text: "Maman: Tu as réussi à trouver mon Mimiqui?", facePlayer: "npcMom"},
                        { type: "textMessage", text: "Maman: Je suis sur qu'il n'est pas loin.", facePlayer: "npcMom"},
                    ]
                },
            ]
        }),
        tv: ({
            type: "Person",
            x: withGrid(14),
            y: withGrid(11),
            src: blank,
            talking : [
                {
                    events: [
                        { type: "textMessage", text: "Le temps est très spécial à la forêt de Jade."},
                        { type: "textMessage", text: "Nous vous tiendrons informé."},
                    ]
                },
            ]
        }),
        dishes: ({
            type: "Person",
            x: withGrid(9),
            y: withGrid(11),
            src: blank,
            talking : [
                {
                    events: [
                        { type: "textMessage", text: "L'évier est tout propre."},
                    ]
                },
            ]
        }),
    },
    walls: loadWall(collisions),
    cutsceneSpaces: {
        [asGridCoords(20, 12)]: [
            {
                events: [
                    { 
                        type: "changeMap", 
                        map: "MomHouseSecondFloor",
                        soundEffect: "stairs",
                        x: withGrid(18),
                        y: withGrid(12),
                        direction: 'right',
                    },
                ]
            }
        ],
        [asGridCoords(13, 20)]: [
            {
                events: [
                    { 
                        type: "changeMap", 
                        map: "PalletTown",
                        soundEffect: "doors",
                        x: withGrid(34),
                        y: withGrid(56),
                        direction: 'down',
                    },
                ]
            }
        ]
    },
}