import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import ComprarEntrada from './Components/ComprarEntrada'
import { EventoList } from './Components/EventoList';

export const EventosRoutes = () => (
    <Router>
        <Switch>
            <Route exact path="/" component={EventoList} />
            <Route path="/comprarEntrada/:id" component={ComprarEntrada} />
        </Switch>
    </Router>
)