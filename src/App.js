import React, { Component } from 'react';
import Display from './components/display/display'
import Buttons from './components/buttons/buttons'
import './App.css';

class App extends Component {
  render() {
    return (
      <div id="calculator" style={{width:'360px', backgroundColor:'black', marginLeft:'auto', marginRight:'auto', height:'500px' }}>
        < Display />
        < Buttons />
      </div>
    );
  }
}

export default App;