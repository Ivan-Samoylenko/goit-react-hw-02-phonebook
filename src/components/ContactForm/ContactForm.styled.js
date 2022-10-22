import styled from 'styled-components';

export const SubmitBtn = styled.button`
  margin: 15px;
  border: 0 solid transparent;
  padding: 4px 8px;

  display: flex;
  align-items: center;

  font-size: 24px;

  background-color: transparent;

  border-radius: 10px;
  box-shadow: inset -2px -2px 4px 0 #222222;

  cursor: pointer;

  transition: color ease-in-out 200ms, box-shadow ease-in-out 200ms;

  svg {
    fill: currentColor;
  }

  :hover,
  :focus {
    color: orangered;
    box-shadow: inset -2px -2px 4px 0 orangered;
  }

  :active {
    box-shadow: inset 2px 2px 4px 0 orangered;
  }
`;
