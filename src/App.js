import React, { Component } from 'react';
import Display from './components/display/display'
import DisplayTwo from './components/display-two/display-two'
import Buttons from './components/buttons/buttons'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentVal: '0',
      prevVal: '0',
    }
    this.initialize = this.initialize.bind(this);
    this.handleNumbers = this.handleNumbers.bind(this);
  }

  handleNumbers(e) {
    const value = e.target.value;
    this.setState({
      currentVal: value,
      prevVal: value,
    })
  }

  initialize() {
    this.setState({
      currentVal: '0',
      prevVal: '0',
    });
  }

  render() {
    return (
      <div id="calculator" >
        < Display 
          prevValue={this.state.prevVal}/>
        < DisplayTwo 
          currentValue={this.state.currentVal}/>
        < Buttons 
          initialize={this.initialize}
          numbers={this.handleNumbers}
        />
      </div>
    );
  }
}

export default App;