import { Name, Phone, DeleteBtn } from './Contact.styled';
import { TiDocumentDelete } from 'react-icons/ti';

export const Contact = ({ name, number, onClick, id }) => {
  return (
    <>
      <Name>{name}</Name>
      <Phone>{number}</Phone>
      <DeleteBtn id={id} onClick={onClick}>
        <TiDocumentDelete size="30" />
        delete
      </DeleteBtn>
    </>
  );
};
