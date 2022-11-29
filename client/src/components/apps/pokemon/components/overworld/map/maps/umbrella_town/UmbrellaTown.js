import mapDown from "../../../../../assets/graphics/maps/umbrella_town/down.png";
import mapUp from "../../../../../assets/graphics/maps/umbrella_town/up.png";
import { collisions, grass, bump } from './MapCollision';

import { asGridCoords, loadWall, withGrid, loadGrass, loadBump } from '../../../../../Utils';

import teamRocketB from "../../../../../assets/graphics/characters/npcTeamRocketB.png";

import ViridianForestBurning from "../../../../../assets/audio/background_music/ViridianForestBurning.ogg"

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
    },
    walls: loadWall(collisions),
    grass: loadGrass(grass),
    bump: loadBump(bump),
    cutsceneSpaces: {
        [asGridCoords(36, 76)]: [
            {
                events: [
                    { 
                        type: "changeMap", 
                        map: "ViridianForest",
                        soundEffect: "stairs",
                        changeMusic: ViridianForestBurning,
                        setFilter: "null",
                        x: withGrid(9),
                        y: withGrid(10),
                        direction: 'down',
                    },
                ]
            }
        ],
        
    }
}