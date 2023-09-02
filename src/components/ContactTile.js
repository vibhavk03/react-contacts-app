import defaultAvatar from '../assets/avatar.png';

export default function ContactTile(props) {
  const { contact } = props;
  return (
    <div className="contact-container flex">
      <div className="contact-container-left">
        <img src={defaultAvatar} alt="contact icon"></img>
      </div>
      <div className="contact-container-right">
        <div>{contact.name}</div>
      </div>
    </div>
  );
}
