import React, { Component } from "react";
import "./AddPerson.css";

class addPerson extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      age: "",
    };
    this.onNameChangeHandler= this.onNameChangeHandler.bind(this);
    this.onAgeChangeHandler=this.onAgeChangeHandler.bind(this);
  }

    onNameChangeHandler(event){
        this.setState({
            name:event.target.value
        })
    }

    onAgeChangeHandler(event){
        this.setState({
            age:event.target.value
        })
    }

  render() {
    return (
      <div className="AddPerson">
        <input 
        type="text" 
        name="name" 
        placeholder="Enter name" 
        onChange={this.onNameChangeHandler}
        value={this.state.name}
        />
        <input 
        type="number" 
        name="age" 
        placeholder="Enter Age"
        onChange={this.onAgeChangeHandler}
        value={this.state.age}
        />
        <button onClick={()=>this.props.personAdded(this.state.name,this.state.age)}>Add Person</button>
      </div>
    );
  }
}

export default addPerson;
