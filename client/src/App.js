import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./pages/landing";
import CreateDare from "./pages/createDare";
import RandomDare from "./pages/randomDare";
import logo from "./logo.png";


class App extends Component {
  render() {
    return (
          <div className="App">
              <img src={logo} className="App-logo" alt="logo" />        
              <Router>
          <div>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/create" component={CreateDare} />
              <Route exact path="/play" component={RandomDare} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
