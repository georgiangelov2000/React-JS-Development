import React, { Component } from "react";
import "./App.css";
import store from "./calculator/calculatorApp";
import * as actions from './calculator/actionCreator';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { storeData: 0, value: 0 };
  };

  componentDidMount(){
    this.setState({storeData: store.getState() })
  }


  render() {
    return (
      <div className="App">
        <input type="text"/>
        <button name="add">+</button>
        <button name="minus">-</button>
        <button name="multiply">*</button>
        <button name="divide">/</button>
        <p>{this.state.storeData}</p>
        <p>
          lorem ipsum dolor .
        </p>
      </div>
    );
  }
}

export default App;
