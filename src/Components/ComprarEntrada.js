import React, { Component } from "react";
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDollarSign } from '@fortawesome/free-solid-svg-icons'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import { Container, Row, Col } from 'reactstrap';
import { Evento } from "../Domain/Evento";
import { EventoService } from "../Services/EventoService";

library.add(faDollarSign)

const eventoService = new EventoService()

export class ComprarEntrada extends Component {
    constructor(props) {
        super(props)
        this.state = { contador: 0, evento:new Evento()}
        this.initialize()  }
    
        generarError(errorMessage) {
            console.log(errorMessage)
            console.log("state", this.state)
            this.setState({
                errorMessage: errorMessage.toString()
            })
        }
    
      sumar() {
        this.cambiarContador(this.state.contador + 1)
      }
    
      restar() {
        this.cambiarContador(this.state.contador - 1)
      }
    
      cambiarContador(n) {
        this.setState({ contador: n })
      }

     initialize() {
        try {
           
         
            const evento = eventoService.getEventoById(this.props.match.params.id)
            
         
            this.setState({
         evento: evento
            })
        } catch (e) {
            this.generarError(e)
        }
    }
   
    render() {
        const evento = eventoService.getEventoById(this.props.match.params.id)
        return (
            
            <div>
               
                <h1 align="center">{evento.nombre}</h1>
                <br />
                <h1 align="center">
              
                <CardContent>
              {evento.nombre}<br />
              </CardContent>

                    <CardContent>
                        <FontAwesomeIcon icon="search-location" />{evento.lugar} <br />
                    </CardContent>

                    <CardContent>
                        <FontAwesomeIcon icon="clock" />{evento.fecha}<br />
                    </CardContent>

                    <CardContent>
                        <Card>
                        Precio por entrada:   <FontAwesomeIcon icon="dollar-sign" />{evento.precioEntrada} <br />
                        </Card>
                    </CardContent>
             </h1>
       
          <Typography gutterBottom variant="title" component="h2">
           </Typography>
          <h3 id="contadorValue"></h3>

          <Container fluid>  

                
         <h2>
          <Row>
         <Col></Col>
          <Col>
         <Button variant="contained" id="sumar" size="medium" color="primary" onClick={(event) => { this.sumar() }}>+</Button> <br/>
         &nbsp;&nbsp; {this.state.contador} <br/>
          <Button variant="contained" id="restar" size="medium" color="secondary" onClick={(event) => { this.restar() }}>-</Button>
         </Col>
         
         <Col>
          <br/>
          <FontAwesomeIcon icon="dollar-sign"/>{this.state.contador*evento.precioEntrada}
          </Col>
         
          </Row>
          <br/>
          <br/>
         <h1 align="center"><Button variant="contained" id="sumar" size="medium" color="primary" >Comprar Entrada</Button> <br/></h1> 
          </h2> 
         </Container>
         </div>

        )
    }
}

export default ComprarEntrada