import { useState } from 'react';

export default function NewContactForm(props) {
  const { onSubmit } = props;
  const [newContact, setNewContact] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (newContact === '') return;

    onSubmit(newContact);

    setNewContact('');
  };

  return (
    <div className="contact-form-container">
      <form onSubmit={handleSubmit} className="new-contact-form">
        <div className="form-row">
          <label htmlFor="newContact">New Contact</label>
          <input
            value={newContact}
            id="newContact"
            type="text"
            onChange={(e) => setNewContact(e.target.value)}
          />
        </div>
        <button className="btn">Add</button>
      </form>
    </div>
  );
}
