import React, { Component } from "react";
import "./App.css";
import contacts from './contacts.json';
import Contact from './Components/Contact';
import ContactDetails from './Components/Contact-Details';


class App extends Component {
  constructor() {
    super();
    this.state = {
      date: new Date(),
      counter: 0,
      contact: <ContactDetails {...contacts[0]}></ContactDetails>,
    };
    this.increment = this.increment.bind(this);
    this.showDetails = this.showDetails.bind(this);
  }

  increment() {
    this.setState((prevState) => ({
      counter: prevState.counter + 1,
    }));
  }
  showDetails(id) {
    this.setState({
      contact: <ContactDetails {...contacts[id - 1]}></ContactDetails>,
    });
  }
  render() {
    return (
      <div className="App">
        <div className="container">
          <header>
            <h1>Contact Book</h1>
          </header>
          <div className="list">
            <h2>List</h2>
            <div className="content">
              {contacts.map((item) => (
                <Contact
                  key={item.id}
                  click={() => this.showDetails(item.id)}
                  firstName={item.firstName}
                  lastName={item.lastName}
                ></Contact>
              ))}
            </div>
          </div>
          {this.state.contact}
        </div>
      </div>
    );
  }
}

export default App;
