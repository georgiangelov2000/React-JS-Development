import React, { Component } from 'react';
import './App.css';
import ToggleButton from './components/ToggleButton';
import FocusDiv from './components/FocusDiv';
import Form from './components/Form/Form';
import Converter from './components/Converter/Converter';
import List from './components/List';

class App extends Component {
  render() {
    return (
      <div className="App">
        <List>
          {['Pesho','Gosho','Vasil','Mariika'].map(u=>{
            return <li key={u}>{u}</li>
          })}
        </List>
        <Form />
        <Converter />
        <ToggleButton />
        {/*
        <FocusDiv number="1" />
        <FocusDiv number="2" />
        <br />
        <FocusDiv number="3" />
        <FocusDiv number="4" />
        */}
      
      {[1,2,3,4,].map((n,i)=>{
        return (
          <FocusDiv key={i} number={n} >
            <p>I mad this</p>
          </FocusDiv>
        )
      })}
      </div>
    );
  }
}

export default App;
