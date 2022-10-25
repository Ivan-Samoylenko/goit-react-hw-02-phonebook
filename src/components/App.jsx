import { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from 'components/ContactForm';
import { Filter } from 'components/Filter';
import { ContactList } from 'components/ContactList';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  handleSubmit = event => {
    this.setState(state => [...state.contacts, { ...event, id: nanoid() }]);
  };

  handleFind = event => {
    this.setState({ name: event.target.value });
  };

  handleDeleteBtn = event => {
    this.setState(state =>
      state.contacts.filter(contact => contact.id !== event.currentTarget.id)
    );
  };

  render() {
    return (
      <>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.handleSubmit} />

        <h2>Contacts</h2>
        <Filter onChange={this.handleFind} />
        <ContactList
          contacts={this.state.contacts}
          filter={this.state.filter}
          onClick={this.handleDeleteBtn}
        />
      </>
    );
  }
}
