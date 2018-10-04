import React, { Component } from "react";
import { SliderPicker } from "react-color";

class MiniSelector extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hidden: false
    };
  }

  render() {
    return (
      <div
        className={
          this.state.hidden ? "miniPicker " : "miniPicker hiddenMinipicker"
        }
        style={{
          borderTopStyle: "solid",
          boderTopColor: this.props.color.hex,
          borderTopWidth: "2em",
          borderRightStyle: "solid",
          boderRightColor: this.props.color.hex,
          borderRightWidth: ".2em"
        }}
      >
        <div
          onClick={() => {
            this.setState(previousState => {
              return {
                hidden: !previousState.hidden
              };
            });
          }}
          className="titleMini"
        >
          Choose a color:
        </div>
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
