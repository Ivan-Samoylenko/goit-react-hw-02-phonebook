import { Name, Phone, DeleteBtn } from './Contact.styled';
import { TiDocumentDelete } from 'react-icons/ti';

export const Contact = () => {
  return (
    <>
      <Name>Name</Name>
      <Phone>Phone</Phone>
      <DeleteBtn>
        <TiDocumentDelete size="30" />
        delete
      </DeleteBtn>
    </>
  );
};
