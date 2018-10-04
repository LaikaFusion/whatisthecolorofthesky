import React, { Component } from "react";
import { SliderPicker } from "react-color";

class MiniSelector extends Component {
  render() {
    return (
      <div
        className="miniPicker"
        style={{
          borderTopStyle: "solid",
          boderTopColor: this.props.color.hex,
          borderTopWidth: "1em",
          borderRightStyle: "solid",
          boderRightColor: this.props.color.hex,
          borderRightWidth: ".2em"
        }}
      >
        <SliderPicker
          className="picker"
          color={this.props.color.hsl}
          onChange={this.props.colorSelection}
        />
        <button
          type="button"
          onClick={this.props.sendRequest}
          className="miniButton"
        >
          Pick
        </button>
      </div>
    );
  }
}

export default MiniSelector;
