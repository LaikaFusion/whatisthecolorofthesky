import React, { Component } from "react";
import "./App.css";
import { SliderPicker } from "react-color";
import Result from "./components/Result/Result";

class App extends Component {
  state = {
    color: {
      hex: "#008dff",
      hsl: { h: 206.8831168831169, s: 1, l: 0.5, a: 1 },
      hsv: { h: 206.8831168831169, s: 1, v: 1, a: 1 },
      oldHue: 206.88311688311688,
      rgb: { r: 0, g: 141, b: 255, a: 1 }
    }
  };

  colorSelection = color => {
    this.setState({ color: color });
    console.log(this.state.color);
  };

  render() {
    console.log();
    return (
      <div
        className="App"
        style={{
          color: this.state.color.hex,
          borderColor: this.state.color.hex
        }}
      >
        <i class="fas fa-cloud" />
        <br />
        <br />
        <br />
        <br />
        <form onSubmit={this.colorSelection}>
          <h1>Find Your Sky</h1>
          <p>Choose a Color:</p>
          <br />
          <br />
          <SliderPicker
            className="picker"
            color={this.state.color.hex}
            onChange={this.colorSelection}
          />
          <br />
          <br />
          <button>Pick</button>
          <br />
          <br />
        </form>
        <Result />
      </div>
    );
  }
}

export default App;
