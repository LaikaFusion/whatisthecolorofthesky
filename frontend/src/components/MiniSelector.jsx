import React, { Component } from "react";
import CustomSlider from "./CustomSlider";

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
          style={{
            color:
              (this.props.color.hsl.l + 0.05) / (0.0 + 0.05) >
              (2 + 0.1) / (this.props.color.hsl.l + 0.1)
                ? "#000000 "
                : "#ffffff"
          }}
        >
          <span />
          <span className="titleChoose">Choose a color: </span>{" "}
          {this.state.hidden ? <span>&#9660;</span> : <span>&#9650;</span>}
        </div>
        {/* if you don't give this .hsl the last bottom selector won't work */}
        <CustomSlider
          className=""
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
