import React, { Component } from "react";
import "./App.css";
import Result from "./components/Result/Result";
import FullSizeSelector from "./components/FullSizeSelector";

class App extends Component {
  state = {
    color: {
      hex: "#008dff",
      hsl: { h: 206.8831168831169, s: 1, l: 0.5, a: 1 },
      hsv: { h: 206.8831168831169, s: 1, v: 1, a: 1 },
      oldHue: 206.88311688311688,
      rgb: { r: 0, g: 141, b: 255, a: 1 }
    },
    mode: "intial"
  };

  colorSelection = color => {
    this.setState({ color: color });
  };

  render() {
    return (
      <div
        className="App"
        style={{
          color: this.state.color.hex,
          borderColor: this.state.color.hex
        }}
      >
        <FullSizeSelector
          color={this.state.color}
          colorSelection={this.colorSelection}
        />
        <Result />
      </div>
    );
  }
}

export default App;
