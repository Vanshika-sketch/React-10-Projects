import styled from "styled-components";

const Rules = () => {
  return (
    <RulesContainer>
      <h2>How to Play Dice Game</h2>
      <div className="text">
        <p>Select any number between 1 and 6</p>
        <p>Click on the dice to roll</p>
        <p>
          If your selected number matches the dice number, you earn points equal
          to the dice value
        </p>
        <p>If your guess is wrong, 2 points will be deducted</p>
      </div>
    </RulesContainer>
  );
};

export default Rules;

const RulesContainer = styled.div`
  max-width: 800px;
  margin: 40px auto;
  background-color: #fbf1f1;
  padding: 20px;
  border-radius: 10px;

  h2 {
    font-size: 24px;
  }

  .text {
    margin-top: 24px;
  }
`;
