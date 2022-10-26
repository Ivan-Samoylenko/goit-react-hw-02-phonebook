import styled from 'styled-components';
import {
  Form as FormikForm,
  Field as FormikField,
  ErrorMessage as FormikErrorMessage,
} from 'formik';

export const Form = styled(FormikForm)`
  width: 600px;
  margin-right: auto;
  margin-left: auto;

  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const FieldWraper = styled.label`
  display: flex;
  flex-direction: column;
`;

export const Field = styled(FormikField)`
  background-color: rgb(255, 200, 0);
`;

export const ErrorMessage = styled(FormikErrorMessage)`
  color: red;
`;

export const SubmitBtn = styled.button`
  margin-right: auto;
  margin-left: auto;
  border: 0 solid transparent;
  padding: 4px 16px;

  display: flex;
  justify-content: center;
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
