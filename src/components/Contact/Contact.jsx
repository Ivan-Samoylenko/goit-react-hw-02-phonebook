import { Name, Phone, DeleteBtn } from './Contact.styled';
import { TiDocumentDelete } from 'react-icons/ti';
import PropTypes from 'prop-types';

export const Contact = ({ id, name, number, onClick }) => {
  return (
    <>
      <Name>{name}</Name>
      <Phone>{number}</Phone>
      <DeleteBtn onClick={() => onClick(id)}>
        <TiDocumentDelete size="30" />
        delete
      </DeleteBtn>
    </>
  );
};

Contact.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
