import { library } from '@fortawesome/fontawesome-svg-core';
import { faClock, faDollarSign, faMapMarkerAlt, faSortDown, faSortUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Typography } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import CardContent from "@material-ui/core/CardContent";
import Divider from '@material-ui/core/Divider';
import Grid from "@material-ui/core/Grid";
import Snackbar from '@material-ui/core/Snackbar';
import React, { Component } from "react";
import { Usuario } from '../Domain/Usuario';
import { USRID } from '../Services/configuration';
import { EventosService } from "../Services/EventosService";
import { UsuariosService } from "../Services/UsuariosService";
import { Entrada } from '../Domain/Entrada'

library.add(faMapMarkerAlt, faClock, faDollarSign, faSortUp, faSortDown)

const styles = {
    root: {
        flexGrow: 1,
    }
};

export class ComprarEntrada extends Component {
    constructor(props) {
        super(props);
        this.eventoService = new EventosService();
        this.usuariosService = new UsuariosService()
        this.state = {
            contador: 0,
            usuario: new Usuario(),
            evento: this.props.location.state,
            errorMessage: ""
        };
    }

    async componentWillMount() {
        try {
            const usuario = await this.usuariosService.getUsuarioByID(USRID)
            this.setState({
                usuario: usuario,
            })
        } catch (e) {
            this.errorHandler(e)
        }
    }
    errorHandler(errorMessage) {
        throw errorMessage
    }

    sumar() {
        this.cambiarContador(this.state.contador + 1);
    }

    restar() {
        if (this.state.contador > 0) {
            this.cambiarContador(this.state.contador - 1);
        }
    }

    cambiarContador(n) {
        this.setState({ contador: n });
    }

    async comprarEntrada(evento) {
        try {
            this.state.usuario.puedeComprarEntrada(evento)
            const entrada = new Entrada()
            entrada.evento = this.state.evento
            entrada.cantidad = this.state.contador
            await this.usuariosService.usuarioCompraEntrada(USRID, entrada)
            this.volver()
        } catch (e) {
            this.generarError(e)
        }
    }
    volver() {
        this.props.history.push('/')
    }
    
    generarError(errorMessage) {
        this.setState({
            errorMessage: errorMessage.toString()
        })

    }
    snackbarOpen() {
        return this.state.errorMessage !== ""
    }

    cantidadNoValida() {
        return this.state.contador === 0 || this.state.contador > this.state.evento.cantidadDisponibles
    }

    handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        this.setState({ errorMessage: "" });
    };

    render() {
        const comprarButton =
            <Typography variant="button" gutterBottom align="center">
                <Button disabled={this.cantidadNoValida()} variant="contained" id="sumar" size="medium" color="primary"
                    onClick={event => { this.comprarEntrada(this.state.evento); }}>
                    Comprar Entrada
                        </Button>
            </Typography>
        return (
            <div className={styles.root}>
                <br />
                <br />
                <Grid container spacing={0}>
                    <Grid item xs={12}>
                        <Typography variant="h3" gutterBottom align="center">
                            {this.state.evento.nombreEvento}
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <CardContent>
                            <Typography variant="h3" gutterBottom align="left">
                                <FontAwesomeIcon icon="map-marker-alt" />
                                {this.state.evento.locacion}
                            </Typography>
                        </CardContent>
                    </Grid>
                    <Grid item xs={12}>
                        <CardContent>
                            <Typography variant="h5" gutterBottom align="left">
                                <FontAwesomeIcon icon="clock" />
                                {this.state.evento.inicioEvento} - {this.state.evento.finEvento}
                            </Typography>
                        </CardContent>
                    </Grid>
                    <Grid item xs={12}>
                        <CardContent>
                            <Typography variant="h3" gutterBottom align="left">
                                $ {this.state.evento.valorEntrada}
                            </Typography>
                        </CardContent>
                        <Divider />
                    </Grid>
                    <Grid item xs={6}>
                        <div align="center">
                            <Button id="sumar" size="medium" color="inherit" onClick={event => { this.sumar(); }}>
                                <FontAwesomeIcon icon="sort-up" size="3x" />
                            </Button>
                            <br />
                            <Typography variant="h4" gutterBottom align="center">
                                {this.state.contador}
                            </Typography>
                            <br />
                            <Button id="restar" size="medium" color="secondary" disabled={this.state.contador === 0}
                                onClick={event => { this.restar(); }}>
                                <FontAwesomeIcon icon="sort-down" size="3x" />
                            </Button>
                        </div>
                    </Grid>
                    <Grid item xs={6}>
                        <br />
                        <br />
                        <Typography variant="h4" gutterBottom align="left">
                            $ {this.state.contador * this.state.evento.valorEntrada}
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        {comprarButton}
                    </Grid>
                </Grid>
                <Snackbar
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                    }}
                    open={this.snackbarOpen()}
                    autoHideDuration={2000}
                    onClose={this.handleClose}
                    ContentProps={{
                        'aria-describedby': 'message-id',
                    }}
                    message={<span id="message-id">{this.state.errorMessage}</span>}
                />
            </div >
        );
    }
}

