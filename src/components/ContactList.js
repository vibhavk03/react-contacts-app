import ContactRow from './ContactRow';

export default function ContactList(props) {
  const { contactList, deleteContact } = props;
  return (
    <div className="contact-list-container flex">
      <table>
        <thead>
          <tr>
            <th>🐲 Name</th>
            <th>📞 Phone</th>
            <th>📧 Email</th>
            <th className="center-text">🗑️ Delete</th>
          </tr>
        </thead>
        <tbody>
          {contactList.map((contact) => {
            return (
              <ContactRow
                key={contact.id}
                contact={contact}
                deleteContact={deleteContact}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
