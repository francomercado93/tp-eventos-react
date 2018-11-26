import React, { Component } from 'react'
// import { EventosRow } from './EventoRow'
import { EventoService } from "../Services/EventoService"
import Paper from '@material-ui/core/Paper'


export class EventoList extends Component {

    constructor(props) {
        super(props);
        this.eventoService = new EventoService()
        this.state = {
            eventos: this.eventoService.getAllEventos()
        };
    }

    render() {
        return (
            <Paper>
                {/* {this.state.eventos.map(evento =>
                    <EventosRow evento={evento} key={evento.nombre} />
                )} */}
            </Paper>
        )
    }
}

