import React, { Component } from "react";

class Result extends Component {
  render() {
    return (
      <div className="result">
        {this.props.mode === "results" ? (
          <img alt="Sky" src={this.props.url} />
        ) : (
          <div className="loadingText">{this.props.mode ==="loading" ?"Loading":"Error"}</div>
        )}
      </div>
    );
  }
}

export default Result;
