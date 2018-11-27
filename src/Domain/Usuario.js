import { fechaHoraActual } from '../Services/configuration'

export class Usuario {
    constructor() {
        this.id = 0
        this.nombreUsuario = ""
        this.nombre = ""
        this.apellido = ""
        this.mail = ""
        this.edad = 0
        this.entradas = []
        this.saldoAFavor = 0
    }

    static fromJson(usuarioJson) {
        const result = Object.assign(new Usuario(), usuarioJson)
        return result
    }

    validarDevolucion(entrada) {
        console.log(entrada.evento)
        if (!(entrada.evento.diasfechaMaximaConfirmacion() > 0)) {
            throw new UserException("Error: usuario no puede devolver entrada")
        }
    }

    puedeComprarEntrada(evento) {
        if (!this.cumpleCondiciones(evento)) {
            throw new UserException("Error: no se puede comprar entrada")
        }
    }
    cumpleCondiciones(evento) {
        return this.superaEdadMin(evento) && this.quedanEntradas(evento) && this.estaATiempo(evento)
    }

    quedanEntradas(evento) {
        return evento.cantidadDisponibles > 0
    }

    superaEdadMin(evento) {
        return this.edad >= evento.edadMinima
    }

    estaATiempo(evento) {
        return fechaHoraActual.getTime() < new Date(evento.fechaMaximaConfirmacion).getTime()
    }

}

class UserException extends Error {
    toString() {
        return this.message
    }
}
export const UsuarioNulo = new Usuario("")