import React, { Component } from "react";
import { SliderPicker } from "react-color";

class FullSizeSelector extends Component {
  render() {
    return (
      <div>
        <i className="fas fa-cloud" />
        <br />
        <br />
        <br />
        <br />
        <h1>Find Your Sky</h1>
        <p>Choose a Color:</p>
        <br />
        <br />
        <SliderPicker
          className="picker"
          color={this.props.color.hex}
          onChange={this.props.colorSelection}
        />
        <br />
        <br />
        <button>Pick</button>
        <br />
        <br />
      </div>
    );
  }
}

export default FullSizeSelector;
