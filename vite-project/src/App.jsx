import './App.css'
import { useState } from 'react';
import initialContacts from '../src/contacts.json'
import ContactList from './components/ContactList/ContactList';
import SearchBox from './components/SearchBox/SearchBox';
import ContactForm from './components/ContactForm/ContactForm';

const App = () => {

  const [contacts, setContacts] = useState(initialContacts);
  const [filter, setFilter] = useState("");

  const addContact = ((newContact) =>{
    setContacts((prevContact) => {
  return [...prevContact, newContact]
    })
  })
  
  const deleteContact = (contactId) => {
    setContacts((prevContacts) => {
      return prevContacts.filter((contact)=> contact.id !== contactId)
    })
  }



  const filterContacts = contacts.filter((contact) => contact.name.toLowerCase().includes(filter.toLowerCase()));

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm onAdd ={addContact} />
      <SearchBox value={filter} onFilter={ setFilter } />
      <ContactList contacts={filterContacts} onDelete={deleteContact} />
    </>)
};


export default App
