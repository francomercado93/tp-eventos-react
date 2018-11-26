import { library } from '@fortawesome/fontawesome-svg-core';
import { faClock, faMapMarkerAlt, faUndo } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import React, { Component } from "react";


library.add(faMapMarkerAlt, faClock, faUndo)

export class EntradaRow extends Component {
    render() {
        return (
            <div>
                <Card>
                    <CardContent>
                        <h3>
                            {this.props.entrada.evento.nombreEvento}<br /><br />
                            <div>
                                <div align="left"><FontAwesomeIcon icon="clock" /> {this.props.entrada.evento.inicioEvento}&nbsp;&nbsp;</div>
                                <div align="right">
                                    <Button size="medium" id="Devolver entrada" color="inherit" variant='fab'>
                                        <FontAwesomeIcon icon="undo" />
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