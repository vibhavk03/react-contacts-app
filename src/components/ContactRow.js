export default function ContactTile(props) {
  const { contact } = props;
  return (
    <tr>
      <td>{contact.name}</td>
      <td>{contact.phone}</td>
      <td>{contact.email}</td>
    </tr>
  );
}
