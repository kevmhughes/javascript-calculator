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
        <div id='keypad'>
            <button id='clear' style={{width:'160px'}}>
                <h3>AC</h3>
            </button>
            <button id='divide'>
                <h3>/</h3>
            </button>
            <button id='multiply'>
                <h3>x</h3>
            </button>
            <button id='seven'>
                <h3>7</h3>
            </button>
            <button id='eight'>
                <h3>8</h3>
            </button>
            <button id='nine'>
                <h3>9</h3>
            </button>
            <button id='subtract'>
                <h3>-</h3>
            </button>
            <button id='four'>
                <h3>4</h3>
            </button>
            <button id='five'>
                <h3>5</h3>
            </button>
            <button id='six'>
                <h3>6</h3>
            </button>
            <button id='add'>
                <h3>+</h3>
            </button>
            <button id='one'>
                <h3>1</h3>
            </button>
            <button id='two'>
                <h3>2</h3>
            </button>
            <button id='three'>
                <h3>3</h3>
            </button>
            <button id='equals' style={{height:'130px'}}>
                <h3>=</h3>
            </button>
            <button id='zero' style={{width:'160px', position:'relative', bottom:'65px', right:'40px' }}>
                <h3>0</h3>
            </button>
            <button id='decimal' style={{position:'relative', bottom:'65px', right:'40px' }}>
                <h3>.</h3>
            </button>
        </div>
    );
  }
}
