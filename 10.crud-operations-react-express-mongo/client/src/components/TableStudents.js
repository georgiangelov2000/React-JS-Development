import React, { Component } from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import axios from "axios";

export default class TableStudents extends Component {
  constructor(props) {
    super(props);
    this.deleteStudent = this.deleteStudent.bind(this);
  }

  deleteStudent() {
    axios
      .delete("http://localhost:8000/delete/student/" + this.props.obj._id)
      .then((res) => {
        console.log("Student successfully deleted!");
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <tr>
        <td>{this.props.obj.firstName}</td>
        <td>{this.props.obj.lastName}</td>
        <td>{this.props.obj.facultyNumber}</td>
        <td>{this.props.obj.course}</td>
        <td>
          <Link
            className="edit-link"
            to={"/update/student/"+ this.props.obj._id}
          >
            Edit
          </Link>
          <Button onClick={this.deleteStudent} size="sm" variant="danger">
            Delete
          </Button>
        </td>
      </tr>
    );
  }
}
