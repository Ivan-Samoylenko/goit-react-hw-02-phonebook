import { Component } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { TiDocumentAdd } from 'react-icons/ti';
import { SubmitBtn } from './ContactForm.styled';

const initialValues = {
  name: '',
  number: '',
};

export class ContactForm extends Component {
  render() {
    return (
      <Formik initialValues={initialValues} onSubmit={this.props.onSubmit}>
        <Form>
          <label>
            Name
            <Field
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
            <ErrorMessage name="name" />
          </label>
          <label>
            Phone
            <Field
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
            <ErrorMessage name="number" />
          </label>
          <SubmitBtn type="submit">
            <TiDocumentAdd size="30" />
            Add contact
          </SubmitBtn>
        </Form>
      </Formik>
    );
  }
}
