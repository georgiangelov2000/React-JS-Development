import React, { useContext,useEffect } from "react";
import ContactContext from "../../../context/contacts/contactContext";
import ContactItem from "../ContactItem/ContactItem";

const Contacts = () => {
  const contactContext = useContext(ContactContext);

  const {contacts,filtered,getContacts} = contactContext;

  useEffect(() =>{
    getContacts();
  },[])

  if(contacts.length ===0){
    return <h4>Please add a contact</h4>
  }

  return (
    <div>
      {filtered !== null
        ? filtered.map(contact=> ( 
        <ContactItem key={contact._id} contact={contact} />
      )) 
      : contacts.map(contact => (
        <ContactItem key={contact._id} contact={contact} />
      ))}

    </div>
  );
};

export default Contacts;
