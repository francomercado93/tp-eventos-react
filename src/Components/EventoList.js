import Paper from '@material-ui/core/Paper';
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { EventosRow } from '../components/EventoRow';
import { Evento } from '../Domain/Evento';
import { USRID } from '../Services/configuration';
import { EventosService } from "../Services/EventosService";

export class EventoList extends Component {

    constructor(props) {
        super(props);
        this.eventosService = new EventosService()
        this.state = {
            eventos: []
        };
    }

    async componentWillMount() {
        try {
            const res = await this.eventosService.getAllEventos(USRID)
            const eventosJson = await res.json()
            this.setState({
                eventos: eventosJson.map((eventoJson) => Evento.fromJson(eventoJson))
            })
        } catch (e) {
            this.errorHandler(e)
        }
    }

    errorHandler(errorMessage) {
        throw errorMessage
    }

    render() {
        return (
            <Paper>
                {this.state.eventos.map(evento =>
                    <EventosRow evento={evento} key={evento.id} history={this.props.history} eventosService={this.eventosService}/>
                )}
            </Paper>
        )
    }
}

export default withRouter(EventoList)
