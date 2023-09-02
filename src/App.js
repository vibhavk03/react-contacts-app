import { useEffect, useState } from 'react';
import './App.css';
import NewContactForm from './components/NewContactForm';
import ContactList from './components/ContactList';

function App() {
  const [contactList, setContactList] = useState(() => {
    const localValue = localStorage.getItem('CONTACT_LIST');
    if (localValue == null) {
      return [];
    } else {
      return JSON.parse(localValue);
    }
  });

  useEffect(() => {
    localStorage.setItem('CONTACT_LIST', JSON.stringify(contactList));
  }, [contactList]);

  const addContact = (contact) => {
    const { name, phone, email } = contact;
    setContactList((currentContactList) => {
      return [
        ...currentContactList,
        {
          id: crypto.randomUUID(),
          name,
          phone,
          email,
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
