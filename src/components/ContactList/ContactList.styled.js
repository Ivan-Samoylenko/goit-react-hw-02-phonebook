import styled from 'styled-components';

export const Contacts = styled.ul``;

export const ContactsItem = styled.li`
  display: flex;
  align-items: center;
  gap: 8px;

  background-color: #dddddd;

  :not(:last-child) {
    margin-bottom: 8px;
  }
`;
