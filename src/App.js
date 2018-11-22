import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { EventosRoutes } from './routes';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <EventosRoutes />
      </BrowserRouter>
    )
  }
}
export default App


