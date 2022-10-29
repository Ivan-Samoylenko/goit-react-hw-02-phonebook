import styled from 'styled-components';
import {
  Form as FormikForm,
  Field as FormikField,
  ErrorMessage as FormikErrorMessage,
} from 'formik';

export const Form = styled(FormikForm)`
  width: 312px;
  margin-right: auto;
  margin-left: auto;
  padding-top: ${p => p.theme.space[1]};
  padding-bottom: ${p => p.theme.space[1]};

  display: flex;
  flex-direction: column;
  gap: ${p => p.theme.space[2]};

  background-color: ${p => p.theme.colors.bcg.secondary};

  border-radius: ${p => p.theme.radii.main};
`;

export const FieldWraper = styled.label`
  padding: ${p => p.theme.space[1]};

  display: flex;
  flex-direction: column;
`;

export const Field = styled(FormikField)`
  padding: ${p => p.theme.space[1]};

  font-size: ${p => p.theme.fontSizes.fields};

  background-color: ${p => p.theme.colors.bcg.input};

  border-radius: ${p => p.theme.radii.main};
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

  border-radius: ${p => p.theme.radii.addBtn};
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
