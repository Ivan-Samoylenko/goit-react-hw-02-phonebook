import { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from 'components/ContactForm';
import { Filter } from 'components/Filter';
import { ContactList } from 'components/ContactList';

const initialState = [
  {
    id: 'dffdg5f4ds6gf',
    name: 'Alevperevertina Gofrovmagnitogoskivna',
    number: '+380 (95) 758-65-98',
  },
  { id: 'dfgdfgdffdg', name: 'Solomiya', number: '+38095465' },
  { id: '446dfgh6456fg', name: 'Portfel', number: '+38095465' },
  { id: '46fgh64dfgh232', name: 'Kolomiets', number: '+38095465' },
];

export class App extends Component {
  state = {
    contacts: initialState,
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

  handleDeleteBtn = event => {
    const targetId = event.currentTarget.id;

    this.setState(state => ({
      contacts: state.contacts.filter(contact => contact.id !== targetId),
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
