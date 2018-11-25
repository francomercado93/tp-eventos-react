import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Toolbars from './components/Toolbars';
import { ComprarEntrada } from './components/ComprarEntrada';
import { EventoList } from './components/EventoList';
import { MisEntradas } from './components/MisEntradas';

const styles = {
    pantalla: {
        marginTop: '5em'
    }
}
export const EventosRoutes = () => (
    <Router>
        <div>
            <Toolbars />
            <div style={styles.pantalla}>
                <Switch>
                    <Route exact path="/" component={EventoList} />
                    <Route path="/ComprarEntrada/:id" component={ComprarEntrada} />
                    <Route path="/mis-entradas" component={MisEntradas} />
                </Switch>
            </div>
        </div>
    </Router>
)