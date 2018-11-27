import { library } from '@fortawesome/fontawesome-svg-core';
import { faClock, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Divider from "@material-ui/core/Divider";
import Grid from '@material-ui/core/Grid';
import List from "@material-ui/core/List";
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
// import Card from '@material-ui/core/Card';
// import CardContent from '@material-ui/core/CardContent';
import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

library.add(faMapMarkerAlt, faClock)

export class EventosRow extends Component {

    render() {
        const evento = this.props.evento
        return (
            <div>
                <br />
                <List>
                    <Paper component={Link} to={{
                        pathname: `/comprar-entrada/${evento.id}`, state: evento
                    }}>
                        <Grid container spacing={0}>
                            <Grid item xs={6}>
                                <Typography gutterBottom variant="h4" align="left">
                                    {evento.nombreEvento}
                                </Typography>
                                <Typography gutterBottom variant="h5" align="left" color="textSecondary">
                                    <FontAwesomeIcon icon="map-marker-alt" />
                                    {evento.locacion}
                                </Typography>
                            </Grid>
                            <Grid item xs={6}>
                                <Typography gutterBottom variant="h5" align="right" color="textSecondary">
                                    <FontAwesomeIcon icon="clock" />
                                    {evento.inicioEvento}
                                </Typography>
                            </Grid>
                        </Grid>
                    </Paper>
                    <Divider />
                </List>
            </div>
        )
    }

}


export default withRouter(EventosRow)

