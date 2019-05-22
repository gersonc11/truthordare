// load random dare on page after choosing which route to go to
import React, { Component } from "react";
import Button from "../components/form/Button";

class RandomDare extends Component {
  state = {
    truths: [],
    dares: [],
    Choosen: { details: "Pick Truth or Dare" },
    // dare: null,
    loading: false,
    loadTruths: false
  };

  async componentDidMount() {
    const url = "http://localhost:3001/api/dares";
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    const truths = data.filter(element => element.type === "Truth");
    const dares = data.filter(element => element.type === "Dare");
    this.setState({ truths: truths, dares: dares, loading: true });
  }

  /**
   * Returns a random integer between min (inclusive) and max (inclusive).
   * The value is no lower than min (or the next integer greater than min
   * if min isn't an integer) and no greater than max (or the next integer
   * lower than max if max isn't an integer).
   * Using Math.round() will give you a non-uniform distribution!
   */
  getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  loadDares = () => {
    const amountOfDares = this.state.dares.length;

    const randomIndex = this.getRandomInt(0, amountOfDares - 1);

    console.log(`Dare Random Index: ${randomIndex}`);
    console.log(`Length: ${this.state.dares.length}`);

    const randomDare = this.state.dares[randomIndex];

    this.state.dares.splice(randomIndex, 1);

    console.log(`Length: ${this.state.dares.length}`);

    this.setState({ dares: this.state.dares, Choosen: randomDare });
  };

  loadTruths = () => {
    const amountOfTruths = this.state.truths.length;

    const randomIndex = this.getRandomInt(0, amountOfTruths - 1);

    console.log(`Truth Random Index: ${randomIndex}`);
    console.log(`Length: ${this.state.truths.length}`);

    const randomTruth = this.state.truths[randomIndex];

    this.state.truths.splice(randomIndex, 1);

    console.log(`Length: ${this.state.truths.length}`);

    this.setState({ truths: this.state.truths, Choosen: randomTruth });
  };

  render() {
    console.log(this.state);
    return (
      <div>
        <Button title="Truth" value="Truth" onClick={this.loadTruths} />
        <Button title="Dare" value="Dare" onClick={this.loadDares} />
        <div>
          <p>{this.state.Choosen.details}</p>
        </div>
      </div>
    );
  }
}

export default RandomDare;
