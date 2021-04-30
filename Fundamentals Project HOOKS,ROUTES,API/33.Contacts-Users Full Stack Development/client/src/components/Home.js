import React from "react";
import Contacts from "./contacts/Contacts";
import ContactForm from "./contacts/ContactForm";
import ContactFilter from "./contacts/ContactFilter";

const Home = () => {
  return (
    <div>
      <div>
        <ContactForm />
      </div>
      <div>
        <ContactFilter />
      </div>
      <div>
        <Contacts />
      </div>
    </div>
  );
};
export default Home;
