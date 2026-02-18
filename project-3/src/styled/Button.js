import styled from "styled-components";

export const Button = styled.button`
  color: white;
  padding: 10px 18px;
  background-color: black;
  border-radius: 5px;
  min-width: 220px;
  border: 1px solid transparent;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.3s ease-in;

  &:hover {
    background-color: white;
    border: 1px solid black;
    color: black;
  }

  &:active {
    transform: scale(0.97);
  }

  &:focus-visible {
    outline: 2px solid black;
    outline-offset: 2px;
  }
`;

export const OutlineButton = styled(Button)`
  background-color: white;
  border: 1px solid black;
  color: black;

  &:hover {
    background-color: black;
    border: 1px solid transparent;
    color: white;
  }
`;
