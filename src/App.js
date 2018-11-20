import React, { Component } from 'react';
import { EventosRoutes } from './Routes'
import { BrowserRouter } from 'react-router-dom'
import './App.css';
import { Toolbars } from './Components/Toolbar/Toolbars';
// import { EventoList } from './Components/EventoList';
// import { ComprarEntrada } from './Components/ComprarEntrada';

class App extends Component {
  render() {
    return (
      <div className="ToolbarEventos">
        <Toolbars />
        <div className="AppEventos">
          <BrowserRouter>
            <EventosRoutes />
          </BrowserRouter>
        </div>
      </div>
    )
  }
}

export default App


