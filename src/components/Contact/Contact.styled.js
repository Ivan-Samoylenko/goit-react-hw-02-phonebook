import styled from 'styled-components';

export const Name = styled.p`
  font-size: 30px;
`;

export const Phone = styled.p`
  font-size: 30px;
`;

export const DeleteBtn = styled.button`
  width: 45px;
  height: 45px;
  border: 0 solid transparent;

  display: flex;
  flex-direction: column;
  align-items: center;

  font-size: 8px;

  color: currentColor;
  background-color: transparent;

  border-radius: 50%;
  cursor: pointer;
  outline: none;

  transition: color ease-in-out 200ms, box-shadow ease-in-out 200ms,
    transform ease-in-out 200ms;

  svg {
    fill: currentColor;
  }

  :hover,
  :focus {
    color: orangered;
    box-shadow: 0 0 2px 2px orangered;
  }

  :active {
    transform: scale(0.94);
  }
`;
