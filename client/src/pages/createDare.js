///page to upload dares
//  input type Truth or Dare
/// name of author
/// details of type submitted
// id that auto increments

import React, { Component } from "react";
import Button from "../components/form/Button";
import Input from "../components/form/Input";
import { Col, Row } from "reactstrap";
import API from "../utils/API";
import { withRouter } from "react-router-dom";

class CreateDare extends Component {
  state = {
    type: "",
    author: "",
    details: ""
  };

  handleInput = e => {
    e.preventDefault();
    let target = e.target;
    let value = target.value;
    let name = target.name;
    this.setState(
      {
        [name]: value
      },
      () => console.log(this.state)
    );
  };

  handleFormSubmit = e => {
    e.preventDefault();
    const dare = this.state;

    API.saveDare({
      type: dare.type,
      author: dare.author,
      details: dare.details
    }).then(() => this.nextPath("/play"));
  };

  nextPath = path => {
    this.props.history.push(path);
  };

  render() {
    return (
      <div>
        <h1>Create</h1>
        <form className="container" onSubmit={this.handleSubmit}>
          <Button
            name="type"
            value="Truth"
            onClick={this.handleInput}
            title="Truth"
          />
          <Button
            name="type"
            value="Dare"
            onClick={this.handleInput}
            title="Dare"
          />
          <Input
            name="author"
            type="text"
            value={this.state.author}
            handleChange={this.handleInput}
            placeholder="Enter Your Name"
          />
          <Input
            name="details"
            type="text"
            value={this.state.details}
            handleChange={this.handleInput}
            placeholder="Enter Your Text"
          />

          <Button title={"Submit"} onClick={this.handleFormSubmit} />
        </form>
      </div>
    );
  }
}

export default withRouter(CreateDare);
