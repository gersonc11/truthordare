import React, { Component } from "react";
import API from "./utils/API";
import Card from "./components/dares/Card"


import './App.css';

class App extends Component {
  state = {
    dares: [],
    type: "",
    author: "",
    details: "",
    id: ""
  };
  componentDidMount() {
    this.loadDares();
  };
  loadDares = () => {
    API.getDares()
      .then(res =>
        this.setState({ dares: res.data, type: "", author: "", details: "", id: "" }
        )
      )
      .catch(err => console.log(err));
  };



  render() {
    return (
      < div className="App" >
      <h1>hi</h1>
        {this.state.dares.map((dare, i) => (
          <Card
            key={i}
            type={dare.type}
            author={dare.author}
            details={dare.details}
            id={dare.id}
          />
        ))}
      </div>
    )
  }
}

export default App;
