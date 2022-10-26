import { Component } from 'react';
import { Formik } from 'formik';
import { TiDocumentAdd } from 'react-icons/ti';
import {
  Form,
  FieldWraper,
  Field,
  ErrorMessage,
  SubmitBtn,
} from './ContactForm.styled';
import { contactsFormValidate } from 'constants';

const initialValues = {
  name: '',
  number: '',
};

export class ContactForm extends Component {
  handleSubmit = (values, { resetForm }) => {
    this.props.onSubmit(values);
    resetForm(initialValues);
  };

  render() {
    return (
      <Formik
        initialValues={initialValues}
        validationSchema={contactsFormValidate}
        onSubmit={this.handleSubmit}
      >
        <Form>
          <FieldWraper>
            Name
            <Field type="text" name="name" />
            <ErrorMessage name="name" component="span" />
          </FieldWraper>
          <FieldWraper>
            Phone
            <Field type="tel" name="number" />
            <ErrorMessage name="number" component="span" />
          </FieldWraper>
          <SubmitBtn type="submit">
            <TiDocumentAdd size="30" />
            Add contact
          </SubmitBtn>
        </Form>
      </Formik>
    );
  }
}
