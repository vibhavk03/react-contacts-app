import { useState } from 'react';
import './App.css';
import NewContactForm from './components/NewContactForm';
import ContactList from './components/ContactList';

function App() {
  const [contactList, setContactList] = useState([]);

  const addContact = (contact) => {
    setContactList((currentContactList) => {
      return [
        ...currentContactList,
        {
          id: crypto.randomUUID(),
          name: contact,
        },
      ];
    });
  };

  // console.log('(((((((((((()))))))))))))', contactList);

  return (
    <div className="app-container">
      <div>
        <h1>Contact App</h1>
      </div>
      <NewContactForm onSubmit={addContact} />
      <ContactList contactList={contactList} />
    </div>
  );
}

export default App;
