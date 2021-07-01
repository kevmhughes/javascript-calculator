import React, { Component } from 'react';
import Display from './components/display/display'
import DisplayTwo from './components/display-two/display-two'
import Buttons from './components/buttons/buttons'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentValue: '0',
      prevValue: '0',
    }
  }
  render() {
    return (
      <div id="calculator" >
        < Display />
        < DisplayTwo />
        < Buttons />
      </div>
    );
  }
}

export default App;