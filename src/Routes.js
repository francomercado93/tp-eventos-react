import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Toolbars from './components/Toolbars';
import { ComprarEntrada } from './components/ComprarEntrada';
import { EventoList } from './components/EventoList';
import { MisEntradas } from './components/MisEntradas';

export const EventosRoutes = () => (
    <Router>
        <div>
            <Toolbars />
            <Switch>
                <Route exact path="/" component={EventoList} />
                <Route path="/ComprarEntrada/:id" component={ComprarEntrada} />
                <Route path="/mis-entradas" component={MisEntradas} />
            </Switch>
        </div>
    </Router>
)