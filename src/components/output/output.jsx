import React, { Component } from 'react';
import './output.css';

export default class Output extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
        <div id='display'>
            {this.props.currentValue}
        </div>
    );
  }
}
