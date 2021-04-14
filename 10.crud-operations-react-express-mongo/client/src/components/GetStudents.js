import React, { Component } from "react";
import TableStudents from "./TableStudents";
import { Link } from "react-router-dom";
import axios from "axios";

export default class GetStudents extends Component {
  constructor(props) {
    super(props);

    this.state = {
      students: [],
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:8000/students/")
      .then((res) => {
        this.setState({
          students: res.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  DataTable() {
    return this.state.students.map((res, i) => {
      return <TableStudents obj={res} key={i} />;
    });
  }

  render() {
    return (
      <div>
        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col">First name</th>
              <th scope="col">Last name</th>
              <th scope="col">Faculty Number</th>
              <th scope="col">Faculty Course</th>
            </tr>
          </thead>
          <tbody>
              {this.DataTable()}
          </tbody>
        </table>
      </div>
    );
  }
}

/*
 <div>
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">First name</th>
            <th scope="col">Last name</th>
            <th scope="col">Faculty Number</th>
            <th scope="col">Faculty Course</th>
          </tr>
        </thead>
        <tbody>
          {this.DataTable()}
        </tbody>
      </table>
      </div>
      */
