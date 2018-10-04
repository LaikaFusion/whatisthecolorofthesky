import React, { Component } from "react";
import { SliderPicker } from "react-color";

class FullSizeSelector extends Component {
  render() {
    return (
      <div className="fsSelector">
        <i className="fas fa-cloud colorCloud" />
        <h1>Find Your Sky</h1>
        <p className="twoREMbottom">Choose a Color:</p>
        {/* if you don't give this .hsl the last bottom selector won't work */}
        <SliderPicker
          className="twoREMbottom picker"
          color={this.props.color.hsl}
          onChange={this.props.colorSelection}
        />
        <button
          type="button"
          onClick={this.props.sendRequest}
          className="twoREMbottom"
        >
          Pick
        </button>
      </div>
    );
  }
}

export default FullSizeSelector;
