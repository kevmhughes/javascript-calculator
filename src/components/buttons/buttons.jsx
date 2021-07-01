import React, { Component } from 'react';
import './buttons.css';

export default class Buttons extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
        <div>
            <button id='equals'>
                <h3>=</h3>
            </button>
        </div>
    );
  }
}
