import React, { Component } from 'react';
import './App.css';
import { HuePicker } from 'react-color';
import Result from './components/Result/Result';

class App extends Component {

  state = {
    color: []
  }

  colorSelection = (color) => {
    this.setState({color: color.hex})
    console.log(this.state.color);
  }


  render() {
    console.log()
    return (
      <div className="App" style={{color: this.state.color, borderColor: this.state.color}}>
        <i class="fas fa-cloud"></i>
          <br /><br /><br /><br />
          <form onSubmit={this.colorSelection}>
              <h1>Find Your Sky</h1>
              <p>Choose a Color:</p>
              <br /><br />
            <HuePicker
              className="picker" 
              color={this.state.color}
              onChangeComplete={this.colorSelection}/>
            <br /><br />
            <button type="submit">Pick</button>
            <br /><br />
          </form>
          <Result />
      </div>
    );
  }
}

export default App;
