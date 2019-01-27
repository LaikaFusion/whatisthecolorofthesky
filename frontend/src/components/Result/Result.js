import React, { Component } from "react";

class Result extends Component {
  render() {
    return (
      <div className="result">
        {this.props.mode === "results" ? (
          <img alt="Sky" src={this.props.url} />
        ) : (
          <div className="loadingText">
            {this.props.mode === "loading" ? (
              <div className="loading-dots">
                <div>Loading</div>
                <span aria-label="Cloud"  role="img" className="dot one">
                  ☁️
                </span>
                <span aria-label="Cloud"  role="img" className="dot two">
                  ☁️
                </span>
                <span aria-label="Cloud"  role="img" className="dot three">
                  ☁️
                </span>
              </div>
            ) : (
              "Error"
            )}
          </div>
        )}
      </div>
    );
  }
}

export default Result;
