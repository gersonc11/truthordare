import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./pages/landing";
import CreateDare from "./pages/createDare";
import RandomDare from "./pages/randomDare";

class App extends Component {
  // state = {
  //   currentPage: "Home"
  // };

  // handlePageChange = page => {
  //   this.setState({ currentPage: page });
  // };

  // renderPage = () => {
  //   if (this.state.currentPage === "Home") {
  //     return <Home
  //       handlePageChange={this.handlePageChange} />;
  //   } else if (this.state.currentPage === "CreateDare") {
  //     return <CreateDare />;
  //   } else {
  //     return <RandomDare />;
  //   }
  // };

  render() {
    return (
      <div className="App">
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
