import React, { Component } from "react";
import axios from "axios";

export default class AddStudent extends Component {
  constructor(props) {
    super(props);

    this.state = { firstName: "", lastName: "", facultyNumber: "", course: "" };

    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  };

  onSubmit(e) {
    e.preventDefault();
    console.log(this.state.firstName);
    console.log(this.state.lastName);
    console.log(this.state.facultyNumber);
    console.log(this.state.course);

    const studentObject ={
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      facultyNumber: this.state.facultyNumber,
      course: this.state.course
    };
    axios.post('http://localhost:8000/new/student', studentObject)
    .then(res => console.log(res.data));

    this.setState({firstName: "", lastName: "", facultyNumber: "", course: ""})
  
  };

  onChange(e) {
    e.target.name;
    this.setState({
       [e.target.name]: e.target.value 
      });
  };

  render() {
    return (
      <div className="container">
        <h1>Add Student Form</h1>
        <form className="myForm" onSubmit={this.onSubmit}>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Enter First name"
              name="firstName"
              onChange={this.onChange}
              value={this.state.firstName}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Last name"
              name="lastName"
              onChange={this.onChange}
              value={this.state.lastName}
            />
          </div>
          <div className="form-group">
            <input
              type="number"
              className="form-control"
              placeholder="Enter Faculty Number"
              name="facultyNumber"
              onChange={this.onChange}
              value={this.state.facultyNumber}
            />
          </div>
          <div className="form-group">
            <input
              type="number"
              className="form-control"
              placeholder="Enter Course"
              name="course"
              onChange={this.onChange}
              value={this.state.course}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}
