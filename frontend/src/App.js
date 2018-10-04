import React, { Component } from "react";
import "./App.css";
import Result from "./components/Result/Result";
import FullSizeSelector from "./components/FullSizeSelector";
import axios from "axios";
import MiniSelector from "./components/MiniSelector";

class App extends Component {
  state = {
    color: {
      hex: "#008dff",
      hsl: { h: 206.8831168831169, s: 1, l: 0.5, a: 1 },
      hsv: { h: 206.8831168831169, s: 1, v: 1, a: 1 },
      oldHue: 206.88311688311688,
      rgb: { r: 0, g: 141, b: 255, a: 1 }
    },
    mode: "intial",
    url: ""
  };

  colorSelection = color => {
    this.setState({ color: color });
  };
  sendRequest = () => {
    axios
      .post(`${process.env.REACT_APP_URL}/sky/`, {
        color: this.state.color.hex
      })
      .then(response => {
        this.setState({
          mode: "results",
          url: response.data.url
        });
      })
      .catch(function(error) {
        console.log(error);
      });
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
        {this.state.mode === "intial" ? (
          <FullSizeSelector
            color={this.state.color}
            colorSelection={this.colorSelection}
            sendRequest={this.sendRequest}
          />
        ) : (
          <div>
            <Result url={this.state.url} />
            <MiniSelector
              color={this.state.color}
              colorSelection={this.colorSelection}
              sendRequest={this.sendRequest}
            />
          </div>
        )}
      </div>
    );
  }
}

export default App;
