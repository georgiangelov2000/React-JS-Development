import React, { Component } from "react";
import styled from 'styled-components'

const MyUser=styled.li`
  margin: 1rem 0;
  font-weight: bold;
`

class User extends Component {

  render() {
    return (
    <MyUser>{this.props.name}</MyUser>
    );
  }
}

/*
const MyUser = (props) => {
  return <li>{props.name}</li>;
};
*/
export default User;
