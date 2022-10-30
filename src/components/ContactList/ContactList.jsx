import { Contacts, ContactsItem } from './ContactList.styled';
import PropTypes from 'prop-types';
import { Contact } from 'components/Contact';

export const ContactList = ({ contacts, filter, onClick }) => {
  const lowerCaseFilter = filter.toLowerCase();
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(lowerCaseFilter)
  );

  return (
    <Contacts>
      {filteredContacts.map(contact => {
        const { name, number, id } = contact;
        return (
          <ContactsItem key={id}>
            <Contact name={name} number={number} onClick={onClick} id={id} />
          </ContactsItem>
        );
      })}
    </Contacts>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  filter: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
