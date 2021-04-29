import React, { useContext } from "react";
import ContactContext from "../../context/contacts/contactContext";

const ContactItem = ({contact}) => {
  const contactContext = useContext(ContactContext);
  const { deleteContact } = contactContext;

  const onDelete = () => {
    deleteContact(id);
  };

  const { id, name, email, phone, type } = contact;

  return (
    <div>
      <h3>{name}</h3>
      <ul>
        {email && <li>{email}</li>}
        {phone && <li>{phone}</li>}
      </ul>
      <button>Edit</button>
      <button onClick={onDelete}>Delete</button>
    </div>
  );
};

export default ContactItem;
