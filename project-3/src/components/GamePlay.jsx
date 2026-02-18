import { useState } from "react";
import NumberSelector from "./NumberSelector";
import RollDice from "./RollDice";
import Rules from "./Rules";
import TotalScore from "./TotalScore";

const GamePlay = () => {
  const [selectedNumber, setSelectedNumber] = useState(null);
  const [currentDice, setCurrentDice] = useState(1);
  const [score, setScore] = useState(0);
  const [error, setError] = useState("");

  const rollDice = () => {
    if (!selectedNumber) {
      setError("Please select a number first");
      return;
    }

    const diceValue = Math.floor(Math.random() * 6) + 1;
    setCurrentDice(diceValue);

    if (diceValue === selectedNumber) {
      setScore((prev) => prev + diceValue);
    } else {
      setScore((prev) => prev - 2);
    }

    setSelectedNumber(null);
  };

  return (
    <>
      <TotalScore score={score} />

      <NumberSelector
        error={error}
        setError={setError}
        selectedNumber={selectedNumber}
        setSelectedNumber={setSelectedNumber}
      />

      <RollDice currentDice={currentDice} rollDice={rollDice} />

      <Rules />
    </>
  );
};

export default GamePlay;
