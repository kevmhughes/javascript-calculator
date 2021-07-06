import React, { Component } from 'react';
import './display.css';

export default class Display extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
        <div id='display'>
            {this.props.prevValue}
        </div>
    );
  }
}
