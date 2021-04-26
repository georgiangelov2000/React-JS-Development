import React, { Component } from "react";
import "./App.css";
// import store from "./calculator/calculatorApp";
import * as actions from "./calculator/actionCreator";
import Display from "./Display";
import {connect} from "react-redux";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { storeData: 0, value: 0 };

    this.onChange = this.onChange.bind(this);
    this.onButtonClick=this.onButtonClick.bind(this);
    //this.onStoreUpdate = this.onStoreUpdate.bind(this);

   // store.subscribe(this.onStoreUpdate);
  }

  onChange(e) {
    if (isNaN(e.target.value)) return;
    this.setState({ value: Number(e.target.value) });
  }

  /*
  componentDidMount() {
    this.setState({
      storeData: store.getState(),
    });
  }
*/

  onButtonClick(e) {
    this.props[e.target.name](this.state.value);

    //const action = actions[e.target.name](this.state.value);
    //store.dispatch(action);
    //this.props.dispatch(action);
    // console.log(action);

    console.log(this.state.value);
  }

  /*
  onStoreUpdate() {
    this.setState({
      storeData: store.getState(),
    });
  }
*/

  render() {
    return (
      <div className="App">
        <input type="text" onChange={this.onChange} value={this.state.value} />
        <button name="add" onClick={this.onButtonClick}>
          +
        </button>
        <button name="subtract" onClick={this.onButtonClick}>
          -
        </button>
        <button name="multiplication" onClick={this.onButtonClick}>
          *
        </button>
        <button name="division" onClick={this.onButtonClick}>
          /
        </button>
        <p>Current value in store: {this.props.appState}</p>
        <p>lorem ipsum dolor .</p>
        <Display />
      </div>
    );
  }
}

function mapStateProps(state) {
  return {
    appState:state
  };
};

function mapDispatchToProps(dispatch) {
  return {
    add: (value)=>dispatch(actions.add(value)),
    subtract: (value)=>dispatch(actions.subtract(value)),
    multiplication: (value)=>dispatch(actions.multiplication(value)),
    division: (value)=>dispatch(actions.division(value))
  };
};

export default connect(mapStateProps,mapDispatchToProps)(App);
