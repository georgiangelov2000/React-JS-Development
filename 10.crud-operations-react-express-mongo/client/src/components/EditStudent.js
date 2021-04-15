import React, { Component } from "react";
import axios from "axios";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

export default class EditStudent extends Component {
  
  constructor(props) {
    super(props)
  
    this.onChangeStudentFirstName= this.onChangeStudentFirstName.bind(this);
    this.onChangeStudentLastName= this.onChangeStudentLastName.bind(this);
    this.onChangeStudentfacultyNumber = this.onChangeStudentfacultyNumber.bind(this);
    this.onChangeCourse=this.onChangeCourse.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  
    // State
    this.state = {
      firstName: "",
      lastName: "",
      facultyNumber: "",
      course: "",
    }
  }
  
  componentDidMount() {
    axios.get('http://localhost:8000/update/student/' + this.props.match.params.id)
      .then(res => {
        this.setState({
          firstName: res.data.firstName,
          lastName: res.data.lastName,
          faculyNumber: res.data.facultyNumber,
          course:res.data.course
        });
      })
      .catch((error) => {
        console.log(error);
      })
  }
  
  onChangeStudentFirstName(e) {
    this.setState({ firstName: e.target.value })
  };
  
  onChangeStudentLastName(e) {
    this.setState({ lastName: e.target.value })
  };
  
  onChangeStudentfacultyNumber(e) {
    this.setState({ facultyNumber: e.target.value })
  };
  
  onChangeCourse(e) {
    this.setState({ course: e.target.value })
  };
  
  onSubmit(e) {
    e.preventDefault()
  
    const studentObject = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      facultyNumber: this.state.facultyNumber,
      course:this.state.course,
    };
  
    axios.put('http://localhost:8000/update/student/' + this.props.match.params.id, studentObject)
      .then((res) => {
        console.log(res.data)
        console.log('Student successfully updated')
      }).catch((error) => {
        console.log(error)
      })
  
    // Redirect to Student List 
    this.props.history.push('/students')
  }

  render() {
    return (
      <Container>
        <h1>Edit Form Student</h1>
          <h4>Current Student Id : {this.props.match.params.id}</h4>
        <Form onSubmit={this.onSubmit}>
          <Form.Group controlId="firstName">
            <Form.Control
              type="text"
              placeholder="Enter First name"
              onChange={this.onChangeStudentFirstName}
              value={this.state.firstName}
            />
          </Form.Group>
          <Form.Group controlId="lastName">
            <Form.Control
              type="text"
              placeholder="Enter Last name"
              onChange={this.onChangeStudentLastName}
              value={this.state.lastName}
            />
          </Form.Group>
          <Form.Group controlId="facultyNumber">
            <Form.Control
              type="number"
              placeholder="Enter Faculty Number"
              onChange={this.onChangeStudentfacultyNumber}
              value={this.state.facultyNumber}
            />
          </Form.Group>
          <Form.Group controlId="course">
            <Form.Control
              type="number"
              placeholder="Enter Course"
              onChange={this.onChangeCourse}
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






