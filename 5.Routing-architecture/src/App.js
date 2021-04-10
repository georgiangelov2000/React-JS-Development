import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Header from './Component/Header';

const Home = ({match}) => (
  <div>
    <h1>Home Page</h1>
    <Route path={match.url + '/contact'} component={Contact} />
  </div>
)

const About = props => (
  <div>
    <h1>About Page</h1>
  </div>
)

const Contact= props => (
  <div>
    <h1>Contact nested Page</h1>
  </div>
)

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Route path="/home" component={Home} />
        <Route path="/about" component={About}/>
      </div>
    );
  };
};

export default App;
