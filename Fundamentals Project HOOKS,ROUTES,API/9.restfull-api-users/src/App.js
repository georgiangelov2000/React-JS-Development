import React, { Component } from "react";
import "./App.css";
import Users from "./Components/Users";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      active: false,
    };
    this.onClick = this.onClick.bind(this);
    this.onClickHide = this.onClickHide.bind(this);
  }

  componentDidMount() {
    fetch("http://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          users: data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  onClick() {
    this.setState({ active: true });
  }

  onClickHide() {
    this.setState({ active: false });
  }

  render() {
    let currentClass = "users-list";
    if (this.state.active) {
      currentClass += "active";
    }
    return (
      <div className="App">
        <h1>RESTFull API and Events  </h1>
        <Row>
          <Col>
          <Button variant="primary" onClick={this.onClick} >Show</Button>
          </Col>
          <Col>
          <Button variant="secondary" onClick={this.onClickHide}>Hide</Button>
          </Col>
        </Row>

        <div className={currentClass}>
          <Users users={this.state.users} />
        </div>
      </div>
    );
  }
}

export default App;
