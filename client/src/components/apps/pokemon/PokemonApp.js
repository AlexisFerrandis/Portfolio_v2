import { useState } from "react";
import Main from "./components/main/Main";
import GameLauncher from "./components/game_launcher/GameLauncher"

import "./settings.scss"


const PokemonApp = () => {
  const [main, setMain] = useState(false);
  const [launcher, setLauncher] = useState(false)
  const [title, setTitle] = useState(true)


    const launchTheGame = (e) => {
      setLauncher(true)
      setTitle(false)
      setTimeout(() => {
        setMain(true)
      }, 6000) // 6000
    }
  
  return (
    <div className="pokemon-app">
      {title && <h2 onClick={launchTheGame}>Start</h2>}
      {launcher && <GameLauncher />}
      {main && <Main />}
    </div>
  );
}

export default PokemonApp;
