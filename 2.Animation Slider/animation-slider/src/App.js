import React, { Component } from "react";
import "./App.css";
import Slider from "./components/Slider";
import CharacterGenerator from "./components/CharGenerator";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Image Slider Fetching from server</h1>
        <Slider />
        <CharacterGenerator />
      </div>
    );
  }
}

export default App;
