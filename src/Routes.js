import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Toolbars from './Components/Toolbars';
import { EventoList } from './Components/EventoList'
import { MisEntradas } from './Components/MisEntradas'
import { ComprarEntrada } from './Components/ComprarEntrada'

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
                    <Route path="/comprar-entrada/:id" component={ComprarEntrada} />
                    <Route path="/mis-entradas" component={MisEntradas} />
                </Switch>
            </div>
        </div>
    </Router>
)