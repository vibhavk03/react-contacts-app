import { useEffect, useState } from 'react';
import './App.css';
import NewContactForm from './components/NewContactForm';
import ContactList from './components/ContactList';

function App() {
  /* getting contactList data from local storage */
  const [contactList, setContactList] = useState(() => {
    const localValue = localStorage.getItem('CONTACT_LIST');
    if (localValue == null) {
      return [];
    } else {
      return JSON.parse(localValue);
    }
  });
  const [searchQuery, setSearchQuery] = useState('');

  /* this will update the value in local storage when the contactList data changes */
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

  /* this function will filter the contacts based on the search query */
  const keys = ['name', 'phone', 'email'];
  const search = (contactList) => {
    return contactList.filter((contact) =>
      keys.some((key) =>
        contact[key].toLowerCase().includes(searchQuery.toLowerCase())
      )
    );
  };

  // console.log('(((((((((((()))))))))))))', contactList);

  return (
    <div className="app-container">
      <div>
        <h1>Contact App</h1>
      </div>
      <input
        type="text"
        value={searchQuery}
        placeholder="Search..."
        className="search-box"
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <NewContactForm onSubmit={addContact} />
      <ContactList contactList={search(contactList)} />
    </div>
  );
}

export default App;
