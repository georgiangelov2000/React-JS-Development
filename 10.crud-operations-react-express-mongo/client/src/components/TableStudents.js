import React, { Component } from 'react';

export default class TableStudents extends Component {
  render() {
    return (
      <tr>
        <td>{this.props.obj.firstName}</td>
        <td>{this.props.obj.lastName}</td>
        <td>{this.props.obj.facultyNumber}</td>
        <td>{this.props.obj.course}</td>
      </tr>
    );
  }
}
