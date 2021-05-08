import React, { Fragment, useContext } from "react";

import { Link } from "react-router-dom";
import AuthContext from "../../context/auth/authContext";
import ContactContext from "../../context/contacts/contactContext";
import style from "./Navbar.module.css";

const Navbar = ({ title }) => {
  const authContext = useContext(AuthContext);
  const contactContext = useContext(ContactContext);

  const { isAuthenticated, logout, user } = authContext;
  const { clearContacts } = contactContext;

  const onLogout = () => {
    logout();
    clearContacts();
  };

  const authLinks = (
    <Fragment>
      <li>Hello {user && user.name}</li>
      <li>
        <a onClick={onLogout} href="#!">
          <span className={style.spanElement}>Logout</span>
        </a>
      </li>
    </Fragment>
  );

  const guestLinks = (
    <Fragment>
      <li className={style.list}>
        <Link className={style.links} to="/register">Register</Link>
      </li>
      <li className={style.list}>
        <Link className={style.links} to="/login">Login</Link>
      </li>
    </Fragment>
  );

  return (
    <div className={style.navbar}>
      <h1>{title}</h1>
      <ul >{isAuthenticated ? authLinks : guestLinks}</ul>
    </div>
  );
};

Navbar.defaultProps = {
  title: "Contacts Full Stack Javascipt Project",
};

export default Navbar;
