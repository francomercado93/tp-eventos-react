import React, { Component } from 'react';
import { EventosRoutes } from './Routes'
import { BrowserRouter } from 'react-router-dom'
import './App.css';
import {Toolbars} from './Components/Toolbar/Toolbars';





class App extends Component {
  render() {
    return (
    <div>
  <Toolbars></Toolbars>
  <br/> <br/> <br/> <br/> <br/> <br/>
  <BrowserRouter>
         
          <EventosRoutes/>
        
        </BrowserRouter>
        </div>
    ) 
  }
}
      
    export default App



    

