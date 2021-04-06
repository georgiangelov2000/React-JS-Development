import React, { Component } from "react";
import "./App.css";

import Slider from "./components/Slider";
import CharacterGenerator from "./components/CharGenerator";
import Bio from "./components/Bio";
import utils from "./utils/observer";

class App extends Component {
  constructor(){
    super()
    this.state={
      focusedCharacter:0
    }
    this.eventHandler=(newState)=>{
      this.setState(newState)
    }
  }
  componentDidMount(){
    utils.addObserver("changeFocus", this.eventHandler)
  }
  render() {
    return (
      <div className="App">
        {console.log (this.state) }
        <h1>Image Slider Fetching from server</h1>
        <Slider />
        <CharacterGenerator />
        <Bio />
      </div>
    );
  }
}

export default App;
