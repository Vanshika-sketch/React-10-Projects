import styled from "styled-components";

const StartGame = ({ toggle }) => {
  return (
    <Container>
      <img src="/images/dices.png" alt="dice" />

      <div className="content">
        <h1>Dice Game</h1>
        <Button onClick={toggle}>Play Now</Button>
      </div>
    </Container>
  );
};

export default StartGame;

const Container = styled.div`
  max-width: 1180px;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  align-items: center;
  gap: 40px;

  h1 {
    font-size: 96px;
    white-space: nowrap;
  }
`;

const Button = styled.button`
  color: white;
  background: black;
  padding: 10px 18px;
  border-radius: 5px;
  min-width: 220px;
  border: none;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background: white;
    color: black;
    border: 1px solid black;
  }
`;
