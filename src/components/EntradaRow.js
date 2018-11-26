import { library } from '@fortawesome/fontawesome-svg-core';
import { faClock, faMapMarkerAlt, faUndo } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import React, { Component } from "react";
import { UsuariosService } from '../Services/UsuariosService';
import { Usuario } from '../Domain/Usuario'
import { USRID } from '../Services/configuration'


library.add(faMapMarkerAlt, faClock, faUndo)

const usuariosService = new UsuariosService()

export class EntradaRow extends Component {

    constructor(props) {
        super(props)
        this.state = {
            usuario: new Usuario(),
        }
        this.initialize()
    }

    async initialize() {
        try {
            const usuario = await usuariosService.getUsuarioByID(USRID)
            const res = await this.entradasService.getEntradasUsr(USRID)
            const entradas = await res.json()
            this.setState({
                usuario: usuario,
                entradas: entradas
            })
        } catch (e) {
            this.generarError(e)
        }
    }

    generarError(errorMessage) {
        console.log(errorMessage)
        // this.setState({
        //     errorMessage: errorMessage.toString()
        // })
    }

    async devolverEntrada(entrada) {
        try {
            this.state.usuario.validarDevolucion(entrada)
            await usuariosService.actualizarUsuarioID(USRID, entrada)
            // this.eliminarEntrada(entrada)
        } catch (e) {
            this.generarError(e)
        }
    }

    // cambiarEstado(closureChange) {
    //     const usuario = this.state.usuario
    //     closureChange(usuario)
    //     this.setState({
    //         usuario: usuario
    //     })
    // }

    // eliminarEntrada(entrada) {
    //     this.cambiarEstado((usuario) => usuario.devolverEntrada(entrada))
    // }

    render() {
        const entrada = this.props.entrada
        return (
            <div>
                <Card>
                    <CardContent>
                        <h3>
                            {entrada.evento.nombreEvento}<br /><br />
                            <div>
                                <div align="left">
                                    <FontAwesomeIcon icon="clock" spin />
                                    {entrada.evento.inicioEvento}&nbsp;&nbsp;
                                    [{entrada.cantidad} X ${entrada.evento.valorEntrada}]
                                </div>
                                <div align="right">
                                    <Button size="medium" id="Devolver entrada" color="inherit" variant='fab' onClick={(event) => this.devolverEntrada(entrada)}>
                                        <FontAwesomeIcon icon="undo" size="3x" />
                                    </Button>
                                </div>
                            </div>
                        </h3>
                    </CardContent>
                </Card>
            </div >
        )
    }
}