import React, { Component } from "react";
import { HashRouter as Router, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";

import backgroundImage from "./pattern.png";

import NavBar from "./components/layout/NavBar";
import Dashboard from "./components/layout/Dashboard";
import Pokemon from "./components/pokemon/Pokemon";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App" style={{ background: `url(${backgroundImage})` }}>
          <NavBar />
          <div className="container">
            <div>
              <Route exact path="/" component={Dashboard} />
              <Route exact path="/pokemon/:pokemonIndex" component={Pokemon} />
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
