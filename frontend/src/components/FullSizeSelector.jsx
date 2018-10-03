import React, { Component } from "react";
import { SliderPicker } from "react-color";

class FullSizeSelector extends Component {
  render() {
    return (
      <div>
        <i className="fas fa-cloud colorCloud" />
        <h1>Find Your Sky</h1>
        <p className="twoREMbottom">Choose a Color:</p>
        <SliderPicker
          className="twoREMbottom picker"
          color={this.props.color.hex}
          onChange={this.props.colorSelection}
        />
        <button onClick={this.props.sendRequest} className="twoREMbottom">
          Pick
        </button>
      </div>
    );
  }
}

export default FullSizeSelector;
