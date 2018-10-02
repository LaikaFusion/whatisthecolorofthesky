import React, { Component } from 'react';

class Result extends Component {

    state = {
        result: []
    }

    resultToState = (color) => {
        this.setState({result: color.hex})
        console.log(this.state.color);
    }


    render() {
        console.log()
        return (
            <div className="App">
                <div className="result"></div>
                {this.state.result}
            </div>
        );
    }
}

export default Result;
