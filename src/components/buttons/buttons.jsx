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
                AC
            </button>
            <button 
                id='divide'
                onClick={this.props.operators}
                value='/'>
                /
            </button>
            <button 
                id='multiply'
                onClick={this.props.operators}
                value='x'>
                x
            </button>
            <button 
                id='seven'
                onClick={this.props.numbers}
                value='7'>
                7
            </button>
            <button 
                id='eight'
                onClick={this.props.numbers}
                value='8'>
                8
            </button>
            <button 
                id='nine'
                onClick={this.props.numbers}
                value='9'>
                9
            </button>
            <button 
                id='subtract'
                onClick={this.props.operators}
                value='-'>
                -
            </button>
            <button 
                id='four'
                onClick={this.props.numbers}
                value='4'>
                4
            </button>
            <button 
                id='five'
                onClick={this.props.numbers}
                value='5'>
                5
            </button>
            <button 
                id='six'
                onClick={this.props.numbers}
                value='6'>
                6
            </button>
            <button 
                id='add'
                onClick={this.props.operators}
                value='+'>
                +
            </button>
            <button 
                id='one'
                onClick={this.props.numbers}
                value='1'>
                1
            </button>
            <button 
                id='two'
                onClick={this.props.numbers}
                value='2'>
                2
            </button>
            <button 
                id='three'
                onClick={this.props.numbers}
                value='3'>
                3
            </button>
            <button 
                id='equals' 
                style={{height:'130px'}}
                onClick={this.props.evaluate}
                value='='>
                =
            </button>
            <button 
                id='zero' 
                style={{width:'160px', position:'relative', bottom:'65px', right:'40px' }}
                onClick={this.props.numbers}
                value='0'>
                0
            </button>
            <button 
                id='decimal' 
                style={{position:'relative', bottom:'65px', right:'40px' }}
                onClick={this.props.decimal}
                value='.'>
                .
            </button>
        </div>
    );
  }
}
