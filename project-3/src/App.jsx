import { useState } from "react";
import StartGame from "./components/StartGame";
import GamePlay from "./components/GamePlay";
import { Button, OutlineButton } from "./styled/Button.js";


function App() {
  const [isGameStarted, setIsGameStarted] = useState(false);

  return (
    <>
      {isGameStarted ? (
        <GamePlay />
      ) : (
        <StartGame toggle={() => setIsGameStarted(true)} />
      )}
    </>
  );
}

export default App;
