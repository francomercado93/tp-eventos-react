import React, { Component } from 'react'
import { EventosRow } from './EventoRow'
import {EventoService }from "../Services/EventoService"


export class EventoList extends Component {

    constructor(props) {
        super(props);


        this.eventoService = new EventoService()
        this.estate = {
       
            
          
        };
        
             
     
    }


    render() {
     
      const eventos=   this.eventoService.getAllEventos()
     //const {eventos}=this.state.eventos
      
        return (
            eventos.map(evento =>
                <EventosRow evento={evento} key={evento.nombre}/>
            )

         );
        }

       }

