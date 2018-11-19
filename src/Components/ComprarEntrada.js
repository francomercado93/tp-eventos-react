import React, { Component } from "react";
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDollarSign } from '@fortawesome/free-solid-svg-icons'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import { Container, Row, Col } from 'reactstrap';


library.add(faDollarSign)

export class ComprarEntrada extends Component {
    constructor(props) {
        super(props)
        this.state = { contador: 0 }
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

      async initialize() {
        try {
            const response = await eventoService.getAllEventos()
         
            const tarea = await tareaService.getTareaById(this.props.match.params.id)
            this.setState({
                usuarios: usuarios,
                tarea: tarea
            })
        } catch (e) {
            this.generarError(e)
        }
    }
   
    render() {

        return (
            
            <div>
               
                <h1 align="center">NombreEvento</h1>
                <br />
                <h1 align="center">

                    <CardContent>
                        <FontAwesomeIcon icon="search-location" />Ubicacion del lugar <br />
                    </CardContent>

                    <CardContent>
                        <FontAwesomeIcon icon="clock" />Hora de lugar <br />
                    </CardContent>

                    <CardContent>
                        <Card>
                        <FontAwesomeIcon icon="dollar-sign" />Precio <br />
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
          <FontAwesomeIcon icon="dollar-sign"/>{this.state.contador*2}
          </Col>
         
          </Row>
         <h1 align="center"><Button variant="contained" id="sumar" size="medium" color="primary" >Paga la pratita</Button> <br/></h1> 
          </h2> 
         </Container>
         </div>

        )
    }
}

export default ComprarEntrada