import { Contacts, ContactsItem } from './ContactList.styled';
import { Contact } from 'components/Contact';

export const ContactList = () => {
  return (
    <Contacts>
      {[1, 2, 3].map(el => {
        return (
          <ContactsItem>
            <Contact />
          </ContactsItem>
        );
      })}
    </Contacts>
  );
};
