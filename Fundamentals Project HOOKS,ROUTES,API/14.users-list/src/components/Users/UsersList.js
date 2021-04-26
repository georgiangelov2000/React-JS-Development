import React from "react";

import Card from "../UI/Card";
import "./UsersList.css";

const UsersList = (props) => {
  return (
    <Card className="myCard">
      <h1>List Item</h1>
      <ul className="ul-wrapper">
        {props.users.map((user) => (
          <li key={user.id} className="li-item">
            {user.name} ({user.age} years old)
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UsersList;
