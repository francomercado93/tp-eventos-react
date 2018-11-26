import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/styles';
import React, { Component } from 'react';
import { EntradasService } from "../Services/EntradasService";
import { EntradaRow } from './EntradaRow'
import { USRID } from '../Services/configuration'
import { Entrada } from '../Domain/Entrada'
import { Usuario } from '../Domain/Usuario'
import { UsuariosService } from '../Services/UsuariosService';

const styles = {
    precioTotal: {
        height: 100,
        padding: '3em',
        // boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    },
};
const usuariosService = new UsuariosService()

export class MisEntradas extends Component {
    constructor(props) {
        super(props);
        this.entradasService = new EntradasService()
        this.state = {
            usuario: new Usuario(),
            entradas: []
        }
    }
    async componentWillMount() {
        try {
            const usuario = await usuariosService.getUsuarioByID(USRID)
            const res = await this.entradasService.getEntradasUsr(USRID)
            const entradasJson = await res.json()
            this.setState({
                usuario: usuario,
                entradas: entradasJson.map((entradaJson) => Entrada.fromJson(entradaJson))
            })
            // this.asignarEntradasUsr(this.state.entradas)
        } catch (e) {
            this.errorHandler(e)
        }
    }
    // asignarEntradasUsr(entradasService) {
    //     this.cambiarEstado((usuario) => usuario.entradas = entradasService)
    // }

    // cambiarEstado(closureChange) {
    //     const usuario = this.state.usuario
    //     closureChange(usuario)
    //     this.setState({
    //         usuario: usuario
    //     })
    // }

    errorHandler(errorMessage) {
        throw errorMessage
    }

    render() {
        return (
            <Paper>
                <Grid>
                    {this.state.entradas.map(entrada =>
                        <EntradaRow entrada={entrada} key={entrada.id} />
                    )}
                </Grid>
                <Grid item style={styles.precioTotal}>
                    <Typography gutterBottom variant="h2" align="center">
                        Saldo: ${this.state.usuario.saldoAFavor}
                    </Typography>
                </Grid>
            </Paper>
        )
    }
}

export default withStyles(styles)(MisEntradas)


