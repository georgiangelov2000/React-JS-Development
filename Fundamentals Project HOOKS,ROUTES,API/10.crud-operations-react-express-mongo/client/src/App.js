import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import AddStudent from "./components/AddStudent";
import GetStudents from "./components/GetStudents";
import EditStudent from "./components/EditStudent";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header mb-2">
            <Navbar bg="dark" variant="dark">
              <Container>
                <Navbar.Brand>
                  <Link to={"/students"} className="nav-link">
                    Mern Stack Project
                  </Link>
                </Navbar.Brand>

                <Nav className="justify-content-end">
                  <Nav>
                    <Link to={"/new/student"} className="nav-link">
                      Create Student
                    </Link>
                  </Nav>

                  <Nav>
                    <Link to={"/students"} className="nav-link">
                      Student List
                    </Link>
                  </Nav>
                </Nav>
              </Container>
            </Navbar>
          </header>

          <Container>
            <Row>
              <Col md={12}>
                <div className="wrapper">
                  <Switch>
                    <Route exact path="/students" component={GetStudents} />
                    <Route path="/new/student" component={AddStudent} />
                    <Route path="/update/student/:id" component={EditStudent} />
                  </Switch>
                </div>
              </Col>
            </Row>
          </Container>

          {/* <ADDSTUDENT />
       <GETSTUDENTS /> */}
        </div>
      </Router>
    );
  }
}

export default App;
