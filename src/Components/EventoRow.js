import { library } from '@fortawesome/fontawesome-svg-core';
import { faClock, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
library.add(faMapMarkerAlt, faClock)

export class EventosRow extends Component {

    render() {
        return (
            <div>
                <br />
                <Card>
                    <CardContent>
                        <Link to={'/ComprarEntrada/' + this.props.evento.id}>
                            <h3>
                                {this.props.evento.nombre}<br />
                                <FontAwesomeIcon icon="map-marker-alt" />{this.props.evento.lugar}
                                <div align="right"><FontAwesomeIcon icon="clock" /> {this.props.evento.fecha}
                                </div>
                            </h3>
                        </Link>
                    </CardContent>
                </Card>
            </div>
        )
    }

}


export default withRouter(EventosRow)