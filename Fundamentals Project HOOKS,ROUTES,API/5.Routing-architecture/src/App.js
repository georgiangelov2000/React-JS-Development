import React, { Component } from "react";
import "./App.css";
import { Route, Switch, Redirect } from "react-router-dom";
import Header from "./Component/Header";

const Home = ({ match }) => (
  <div>
    <h1>Home Page</h1>
  </div>
);

const Dashboard = (props) => (
  <div>
    <h1>Your Dashboard</h1>
  </div>
)

const About = (props) => (
  <div>
    <h1>About Page</h1>
  </div>
);

const User = (props) => (
  <div>
    <h1>User Details</h1>
    <p>Display details for {props.match.params.userName}</p>
  </div>
);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { loggedIn: false };
  }
  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route
            exact
            path="/"
            render={() => {
              if (this.state.loggedIn) return (<Redirect to="/dashboard" />);
              else return <Home />;
            }}
          />
          <Route path="/dashboard" component={Dashboard}></Route>
          <Route path="/about" component={About} />
          <Route path="/details/:userName" component={User} />
        </Switch>
      </div>
    );
  }
}

export default App;
