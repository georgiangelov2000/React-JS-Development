import React from "react";

const Users = ({ users }) => {
  return (
    <div>
      <div>
        <center>
          <h1>Contact List</h1>
        </center>
        {users.map((user, index) => (
          <div key={index}>
            <div className="card-body">
              <h5 className="card-title">{user.name}</h5>
              <h6 className="card-subtitle mb-2 text-muted">{user.email}</h6>
              <p className="card-text">{user.company.catchPhrase}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Users;
