import React, { Component } from 'react';
import './formula.css';

export default class Formula extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
        <div id='formula'>
          {this.props.formula}
        </div>
    );
  }
}
