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
            <button 
                id='clear' 
                style={{width:'160px'}}
                onClick={this.props.initialize}>
                <h3>AC</h3>
            </button>
            <button id='divide'>
                <h3>/</h3>
            </button>
            <button id='multiply'>
                <h3>x</h3>
            </button>
            <button 
                id='seven'
                onClick={this.props.numbers}
                value='7'>
                <h3>7</h3>
            </button>
            <button 
                id='eight'
                onClick={this.props.numbers}
                value='8'>
                <h3>8</h3>
            </button>
            <button 
                id='nine'
                onClick={this.props.numbers}
                value='9'>
                <h3>9</h3>
            </button>
            <button id='subtract'>
                <h3>-</h3>
            </button>
            <button 
                id='four'
                onClick={this.props.numbers}
                value='4'>
                <h3>4</h3>
            </button>
            <button 
                id='five'
                onClick={this.props.numbers}
                value='5'>
                <h3>5</h3>
            </button>
            <button 
                id='six'
                onClick={this.props.numbers}
                value='6'>
                <h3>6</h3>
            </button>
            <button id='add'>
                <h3>+</h3>
            </button>
            <button 
                id='one'
                onClick={this.props.numbers}
                value='1'>
                <h3>1</h3>
            </button>
            <button 
                id='two'
                onClick={this.props.numbers}
                value='2'>
                <h3>2</h3>
            </button>
            <button 
                id='three'
                onClick={this.props.numbers}
                value='3'>
                <h3>3</h3>
            </button>
            <button id='equals' style={{height:'130px'}}>
                <h3>=</h3>
            </button>
            <button 
                id='zero' 
                style={{width:'160px', position:'relative', bottom:'65px', right:'40px' }}
                onClick={this.props.numbers}
                value='0'>
                <h3>0</h3>
            </button>
            <button id='decimal' style={{position:'relative', bottom:'65px', right:'40px' }}>
                <h3>.</h3>
            </button>
        </div>
    );
  }
}
