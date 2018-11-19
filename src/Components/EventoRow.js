import React, { Component } from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearchLocation,faClock } from '@fortawesome/free-solid-svg-icons'
import { withRouter } from 'react-router-dom'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
library.add(faSearchLocation)
library.add(faClock)

export class EventosRow extends Component {


    render() {
       

        return (
            <div>
                <Card>
                    <CardContent>
                    <Link to={'/ComprarEntrada/' + this.props.evento.id}>
                        <h3>
                         
                        {this.props.evento.nombre}<br/>
                        <FontAwesomeIcon icon="search-location" />{this.props.evento.lugar}
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