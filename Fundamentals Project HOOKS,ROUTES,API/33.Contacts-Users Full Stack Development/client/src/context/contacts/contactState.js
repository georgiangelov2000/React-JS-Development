import React, { useReducer } from "react";
import { v4 as uuid } from "uuid";
import ContactContext from "./contactContext";
import ContactReducer from "./ContactReducer";
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTER,
} from "../types";

const ContactState = (props) => {
  const initialState = {
    contacts: [
      {
        id: 1,
        name: "George Angelov",
        email: "angelov2000@abv.bg",
        phone: "089631823",
        type: "personal",
      },
      {
        id: 2,
        name: "Ivan Petrov",
        email: "ivanPetor2000@abv.bg",
        phone: "089631824",
        type: "personal",
      },
      {
        id: 3,
        name: "Steven Ivanov",
        email: "angelov2000@abv.bg",
        phone: "089631823",
        type: "personal",
      },
    ],
  };

  const [state, dispatch] = useReducer(ContactReducer, initialState);

  const addContact = (contact) => {
    contact.id = uuid;
    dispatch({
      type: ADD_CONTACT,
      payload: contact,
    });
  };

  const deleteContact = id => {
    dispatch({
      type: DELETE_CONTACT,
      payload: id,
    });
  };

  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts,
        addContact,
        deleteContact,
      }}
    >
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;
