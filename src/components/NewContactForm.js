import { useState } from 'react';

/* custom hook to avoid using useState repeatedly */
function useFormInputs(initialValue) {
  const [value, setValue] = useState(initialValue);

  function handleChange(e) {
    setValue(e.target.value);
  }

  return {
    value,
    setValue,
    onChange: handleChange,
  };
}

export default function NewContactForm(props) {
  const { onSubmit } = props;

  const contactName = useFormInputs('');
  const contactPhone = useFormInputs('');
  const contactEmail = useFormInputs('');

  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmit({
      name: contactName.value,
      phone: contactPhone.value,
      email: contactEmail.value,
    });

    contactName.setValue('');
    contactPhone.setValue('');
    contactEmail.setValue('');
  };

  return (
    <div className="contact-form-container">
      <form onSubmit={handleSubmit} className="new-contact-form">
        <div className="form-row flex">
          <input
            value={contactName.value}
            id="name"
            type="text"
            onChange={contactName.onChange}
            placeholder="Name"
            required
          />
          <input
            value={contactPhone.value}
            id="phone"
            type="number"
            placeholder="Phone"
            onChange={contactPhone.onChange}
            required
          />
          <input
            value={contactEmail.value}
            id="email"
            type="email"
            placeholder="Email"
            onChange={contactEmail.onChange}
            required
          />
          <button className="primary-btn">Add</button>
        </div>
      </form>
    </div>
  );
}
