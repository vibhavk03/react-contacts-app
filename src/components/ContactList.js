import ContactTile from './ContactTile';

export default function ContactList(props) {
  const { contactList } = props;
  return (
    <div className="contact-list-container flex">
      {contactList.length === 0 && 'No Contacts Added'}
      {contactList.map((contact) => {
        return <ContactTile contact={contact} />;
      })}
    </div>
  );
}
