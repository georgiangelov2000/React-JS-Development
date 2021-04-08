import React, { Component } from 'react';
import './App.css';
import ToggleButton from './components/ToggleButton';
import FocusDiv from './components/FocusDiv';
import Form from './components/Form/Form';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Form />
        <ToggleButton />  
        <FocusDiv number="1" />
        <FocusDiv number="2" />
        <br />
        <FocusDiv number="3" />
        <FocusDiv number="4" />
      </div>
    );
  }
}

export default App;
