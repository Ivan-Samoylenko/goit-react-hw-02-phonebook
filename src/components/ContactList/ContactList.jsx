import { Contacts, ContactsItem } from './ContactList.styled';
import { Contact } from 'components/Contact';

export const ContactList = ({ contacts, filter, onClick }) => {
  const filteredContacts = contacts.filter(contact =>
    contact.name.includes(filter)
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
