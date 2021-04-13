import React, { Component } from "react";
import "./App.css";
import Users from "./Components/Users";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      active: false,
    };
    this.onClick = this.onClick.bind(this);
    this.onClickHide = this.onClickHide.bind(this);
  }

  componentDidMount() {
    fetch("http://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          users: data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  onClick() {
    this.setState({ active: true });
  }

  onClickHide() {
    this.setState({ active: false });
  }

  render() {
    let currentClass = "users-list";
    if (this.state.active) {
      currentClass += "active";
    }
    return (
      <div className="App">
        <h1>RESTFull API and Events  </h1>
        <div className="row">
          <div className="col">
            <button
              type="button"
              onClick={this.onClick}
              className="btn btn-primary btn-lg w-50"
            >
              Show
            </button>
          </div>
          <div className="col">
            <button
              onClick={this.onClickHide}
              type="button"
              className="btn btn-secondary btn-lg w-50"
            >
              Hide
            </button>
          </div>
        </div>

        <div className={currentClass}>
          <Users users={this.state.users} />
        </div>
      </div>
    );
  }
}

export default App;
