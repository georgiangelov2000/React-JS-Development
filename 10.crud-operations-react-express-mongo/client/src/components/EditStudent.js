import React, { Component } from "react";
import axios from "axios";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

export default class EditStudent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      facultyNumber: "",
      course: "",
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentWillUnmount() {
    this._isMounted = true;
    axios
      .get("http://localhost:8000/update/student/" + this.props.match.params.id)
      .then((res) => {
          this.setState({
            firstName: res.data,
            lastName: res.data,
            facultyNumber: res.data,
            course: res.data,
          });
      })
      .catch((error) => {
        console.log(error);
      });
    this.props.history.push("/students");
  }

  onChange(e) {
    e.target.name;
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const studentObject = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      facultyNumber: this.state.facultyNumber,
      course: this.state.course,
    };

    axios
      .put(
        "http://localhost:8000/update/student/" + this.props.match.params.id,
        studentObject
      )
      .then((res) => {
        console.log(res.data);
        console.log("Student successfully updated");
      })
      .catch((error) => {
        console.log(error);
      });

    // Redirect to Student List
    this.props.history.push("/students");
  }

  render() {
    console.log(this.props.match.params.id)
    return (
      <Container>
        <h1>Edit Form Student</h1>
          <h4>Current Student Id : {this.props.match.params.id}</h4>
        <Form onSubmit={this.onSubmit}>
          <Form.Group controlId="firstName">
            <Form.Control
              type="text"
              className="form-control"
              placeholder="Enter First name"
              name="firstName"
              onChange={this.onChange}
              value={this.state.firstName}
            />
          </Form.Group>
          <Form.Group controlId="lastName">
            <Form.Control
              type="text"
              className="form-control"
              placeholder="Enter Last name"
              name="lastName"
              onChange={this.onChange}
              value={this.state.lastName}
            />
          </Form.Group>
          <Form.Group controlId="facultyNumber">
            <Form.Control
              type="number"
              className="form-control"
              placeholder="Enter Faculty Number"
              name="facultyNumber"
              onChange={this.onChange}
              value={this.state.facultyNumber}
            />
          </Form.Group>
          <Form.Group controlId="course">
            <Form.Control
              type="number"
              className="form-control"
              placeholder="Enter Course"
              name="course"
              onChange={this.onChange}
              value={this.state.course}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
    );
  }
}
