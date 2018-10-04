import React from "react";
import { CustomPicker } from "react-color";
var { Saturation, Hue } = require("react-color/lib/components/common");
var { SliderPointer } = require("react-color/lib/components/hue/HuePointer");
var {
  PhotoshopPointerCircle
} = require("react-color/lib/components/photoshop/PhotoshopPointerCircle");
class CustomSlider extends React.Component {
  render() {
    return (
      <div className="picker">
        <div className="hue">
          <Hue
            pointer={SliderPointer}
            {...this.props}
            onChange={this.props.onChange}
          />
        </div>
        <div className="saturation">
          <Saturation
            pointer={PhotoshopPointerCircle}
            {...this.props}
            onChange={this.props.onChange}
          />
        </div>
      </div>
    );
  }
}

export default CustomPicker(CustomSlider);
