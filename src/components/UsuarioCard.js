import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import React, { Component } from 'react';
import { Usuario } from '../Domain/Usuario';
import imgPerfil from '../images/tincho.png';
import { USRID } from '../Services/configuration';
import { UsuariosService } from '../Services/UsuariosService';

const usuariosService = new UsuariosService()

export class UsuarioCard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            usuario: new Usuario()
        }
        this.initialize()
    }

    async initialize() {
        try {
            const usuarioPpal = await usuariosService.getUsuarioByID(USRID)
            this.setState({
                usuario: usuarioPpal
            })
        } catch (e) {
            this.generarError(e)
        }
    }

    generarError(errorMessage) {
        console.log(errorMessage)
        console.log("state", this.state)
        this.setState({
            errorMessage: errorMessage.toString()
        })
    }

    render() {
        return (
            <Card >
                <List>
                    <ListItem>
                        <Avatar alt="Tincho" src={imgPerfil}></Avatar>
                        <ListItemText primary={this.state.usuario.nombreUsuario} secondary={this.state.usuario.mail} />
                    </ListItem>
                </List>
            </Card>
        )
    }
}
