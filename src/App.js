import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div onClick={this.props.onClick}>We have manufactured <strong>{this.props.clicks}</strong> Terminators.
         Let's make some more by clicking here... </div>
    );
  }
}

export default App;
