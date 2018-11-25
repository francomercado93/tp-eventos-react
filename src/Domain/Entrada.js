import { Evento } from "./Evento";
import { Usuario } from "./Usuario"

export class Entrada {
    constructor(unEvento, unAsistente, id) {
        this.evento = unEvento
        this.asistente = unAsistente
        this.id = id
    }
    asignarEvento(evento, lugar, fechaInicio, id, valorEntrada) {
        this.evento = new Evento(evento, lugar, fechaInicio, id, valorEntrada)
    }
    asignarAsistente(usuario) {
        this.asistente = new Usuario(usuario)
    }
    asignarId(id) {
        this.id = id
    }
}