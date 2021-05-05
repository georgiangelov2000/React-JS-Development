import React,{useContext,useEffect} from "react";
import Contacts from "../Contacts/Contacts/Contacts";
import ContactForm from "../Contacts/ContactForm/ContactForm";
import ContactFilter from "../Contacts/ContactFilter/ContactFilter";
import AuthContext from "../../context/auth/authContext";

const Home = () => {
  const authContext=useContext(AuthContext);

  useEffect(()=>{
    authContext.loadUser();
  },[]);

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
