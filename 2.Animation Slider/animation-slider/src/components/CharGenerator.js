import React, { Component } from "react";
import Characters from "./Characters";

class CharacterGenerator extends Component {
  constructor() {
    super();
    this.state = {
      charArray: [],
    };
  }

  componentDidMount() {
    fetch("http://localhost:9999/roster")
      .then((data) => {
        return data.json();
      })
      .then((parsedData) => {
        console.log(parsedData);
        this.setState({ charArray: parsedData });
      });
  }

  render() {
    return (
      <div className="image-container">
        {this.state.charArray.map((x, index) => {
          return <Characters key={index} params={x} />;
        })}
      </div>
    );
  }
}

export default CharacterGenerator;
