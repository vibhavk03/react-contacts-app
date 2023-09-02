import ContactRow from './ContactRow';

export default function ContactList(props) {
  const { contactList } = props;
  return (
    <div className="contact-list-container flex">
      <table>
        <thead>
          <tr>
            <th>🐲 Name</th>
            <th>📞 Phone</th>
            <th>📧 Email</th>
            <th>🗑️ Delete</th>
          </tr>
        </thead>
        <tbody>
          {contactList.map((contact) => {
            return <ContactRow key={contact.id} contact={contact} />;
          })}
        </tbody>
      </table>
    </div>
  );
}
