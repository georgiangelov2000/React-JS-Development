import React from "react";
import {Link} from "react-router-dom";

const Navbar = ({title}) => {
  return (
    <div>
      <h1>{title}</h1>
      <ul>
          <li>
              <Link to='/'>Home</Link>
          </li>
          <li>
              <Link to='/about'>About</Link>
          </li>
      </ul>
    </div>
  );
};

Navbar.defaultProps = {
  title: "Contacts Full Stack Javascipt Project",
};

export default Navbar;
