import React, { Component } from "react";
import styled from "styled-components";
// import { useState } from "react";
import User from "./User";

const MyUsers = styled.div`
  margin: 2rem auto;
  background-color: grey;
  padding: 1rem;
  border-radius: 12px;
  max-width: 40rem;
  text-align: center;
  color: white;
  margin: auto;
  padding: 0;
`;
const Button = styled.button`
  background: white;
  padding: 10px 10px 10px 10px;
`;

const Ul=styled.ul`
list-style: none;
padding:0
`

class Users extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showUsers: true,
    };
  }

  toggleUsersHandler() {
    this.setState((curState) => {
      return {
        showUsers: !curState.showUsers,
      };
    });
  }

  render() {
    const usersList = (
      <Ul>
        {this.props.users.map((user) => (
          <User key={user.id} name={user.name} />
        ))}
      </Ul>
    );

    return (
      <MyUsers>
          <Button onClick={this.toggleUsersHandler.bind(this)}>
            {this.state.showUsers ? "Hide" : "Show"} Users
          </Button>
        {this.state.showUsers && usersList}
      </MyUsers>
    );
  }
}
export default Users;

/*
const Users = () => {
  const [showUsers, setShowUsers] = useState(true);

  const toggleUsersHandler = () => {
    setShowUsers((curState) => !curState);
  };

  const usersList = (
    <ul>
      {DUMMY_USERS.map((user) => (
        <User key={user.id} name={user.name} />
      ))}
    </ul>
  );

  return (
    <div>
      <button onClick={toggleUsersHandler}>
        {showUsers ? "Hide" : "Show"} Users
      </button>
      {showUsers && usersList}
    </div>
  );
};
export default Users;
*/
