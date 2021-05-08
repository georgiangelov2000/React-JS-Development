import React, { useContext } from "react";
import ContactContext from "../../../context/contacts/contactContext";
import style from "./ContactItem.module.css";

const ContactItem = ({contact}) => {
  const contactContext = useContext(ContactContext);
  const { deleteContact,setCurrentContact,clearCurrentContact } = contactContext;

  const onDelete = () => {
    deleteContact(_id);
    clearCurrentContact();
  };

  const { _id, name, email, phone, type } = contact;

  return (
    <div>
      <h3>{name}</h3>
      <ul>
        {email && <li className={style.liElement} >{email}</li>}
        {phone && <li className={style.liElement} >{phone}</li>}
      </ul>
      <button className={style.buttons} onClick={()=>setCurrentContact(contact)}>Edit</button>
      <button className={style.buttons} onClick={onDelete}>Delete</button>
    </div>
  );
};

export default ContactItem;
