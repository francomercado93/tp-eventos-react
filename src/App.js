import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React - Hola mundo!</h1>
          <h2>Tp de eventos!</h2>
        </header>
      </div>
    );
  }
}

export default App;
