import { Formik } from 'formik';
import { TiDocumentAdd } from 'react-icons/ti';
import { SubmitBtn } from './ContactForm.styled';

export const ContactForm = () => {
  return (
    <form>
      <label>
        Name
        <input type="text" />
      </label>
      <label>
        Phone
        <input />
      </label>
      <SubmitBtn type="submit">
        <TiDocumentAdd size="30" />
        Add contact
      </SubmitBtn>
    </form>
  );
};
