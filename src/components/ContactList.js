import ContactTile from './ContactTile';
import ContactRow from './ContactRow';

export default function ContactList(props) {
  const { contactList } = props;
  return (
    <div className="contact-list-container flex">
      {/* {contactList.length === 0 && 'No Contacts Added'} */}
      <table>
        <thead>
          <tr>
            <th>🐲 Name</th>
            <th>📞 Phone</th>
            <th>📧 Email</th>
          </tr>
        </thead>
        <tbody>
          {contactList.map((contact) => {
            return <ContactRow contact={contact} />;
          })}
        </tbody>
      </table>
    </div>
  );
}
