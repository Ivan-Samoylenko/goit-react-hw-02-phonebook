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

  handleSubmit = value => {
    this.setState(state => ({
      contacts: [...state.contacts, { ...value, id: nanoid(10) }],
    }));
  };

  onFilterChange = event => {
    this.setState({ filter: event.target.value });
  };

  handleDeleteBtn = id => {
    this.setState(state => ({
      contacts: state.contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
    const { filter, contacts } = this.state;

    return (
      <>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.handleSubmit} contacts={contacts} />

        <h2>Contacts</h2>
        <Filter onChange={this.onFilterChange} value={filter} />
        <ContactList
          contacts={contacts}
          filter={filter}
          onClick={this.handleDeleteBtn}
        />
      </>
    );
  }
}
