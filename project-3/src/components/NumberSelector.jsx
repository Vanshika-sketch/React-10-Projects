import styled from "styled-components";

const NumberSelector = ({
  error,
  setError,
  selectedNumber,
  setSelectedNumber,
}) => {
  const numbers = [1, 2, 3, 4, 5, 6];

  const selectHandler = (value) => {
    setSelectedNumber(value);
    setError("");
  };

  return (
    <Container>
      <p className="error">{error}</p>

      <div className="flex">
        {numbers.map((value) => (
          <Box
            key={value}
            isSelected={value === selectedNumber}
            onClick={() => selectHandler(value)}
          >
            {value}
          </Box>
        ))}
      </div>

      <p className="label">Select Number</p>
    </Container>
  );
};

export default NumberSelector;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 8px;

  .flex {
    display: flex;
    gap: 24px;
  }

  .label {
    font-size: 20px;
    font-weight: 700;
  }

  .error {
    color: red;
    font-weight: 600;
  }
`;

const Box = styled.div`
  height: 72px;
  width: 72px;
  border: 2px solid black;
  display: grid;
  place-items: center;
  font-size: 24px;
  font-weight: 700;
  cursor: pointer;
  transition: 0.2s ease;

  background-color: ${({ isSelected }) =>
    isSelected ? "black" : "white"};
  color: ${({ isSelected }) =>
    isSelected ? "white" : "black"};

  &:hover {
    background-color: black;
    color: white;
  }
`;
