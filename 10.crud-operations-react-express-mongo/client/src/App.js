import React, { Component } from 'react';
import './App.css';
import AddStudent from './components/AddStudent';
import GetStudents from './components/GetStudents';

class App extends Component {
  render() {
    return (
      <div className="App">
       <AddStudent />
       <GetStudents />
      </div>
    );
  }
}

export default App;
