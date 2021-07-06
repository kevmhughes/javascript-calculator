import React, { Component } from 'react';
import './display-two.css';

export default class DisplayTwo extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
        <div id='display-two'>
            {this.props.currentValue}
        </div>
    );
  }
}
