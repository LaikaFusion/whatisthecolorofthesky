import React, { Component } from "react";

class Result extends Component {
  render() {
    return (
      <div className="result">
        <img alt="Sky" src={this.props.url} />
      </div>
    );
  }
}

export default Result;
