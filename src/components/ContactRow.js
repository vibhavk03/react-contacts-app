export default function ContactTile(props) {
  const { contact, deleteContact } = props;

  return (
    <tr>
      <td>{contact.name}</td>
      <td>{contact.phone}</td>
      <td>{contact.email}</td>
      <td
        className="delete-td center-text"
        onClick={() => deleteContact(contact.id)}
      >
        ❌
      </td>
    </tr>
  );
}
