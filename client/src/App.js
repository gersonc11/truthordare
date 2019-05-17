import React, { Component } from "react";
// import API from "./utils/API";
// import Card from "./components/dares/Card"
import createDare from './pages/createDare';


import './App.css';
import CreateDare from "./pages/createDare";

class App extends Component {
  // state = {
  //   dares: [],
  //   type: "",
  //   author: "",
  //   details: "",
  //   id: ""
  // };
  // componentDidMount() {
  //   this.loadDares();
  // };
  // loadDares = () => {
  //   API.getDares()
  //     .then(res =>
  //       this.setState({ dares: res.data, type: "", author: "", details: "", id: "" }
  //       )
  //     )
  //     .catch(err => console.log(err));
  // };



  render() {
    return (
      < div className="App" >
      <h1>hi</h1>
        <CreateDare/>
      </div>
    )
  }
}

export default App;
