export class Evento {
    constructor() {
        this.nombreEvento = ""
        this.edadMinima = 0
        this.valorEntrada = 0
        this.capacidadMaxima = 0
        this.locacion = ""
        this.inicioEvento = ""
        this.organizadorEvento = ""
        this.finEvento = ""
        this.fechaMaximaConfirmacion = ""
    }

    static fromJSON(eventoJson) {
        const result = Object.assign(new Evento(), eventoJson)
        return result
    }

    diasfechaMaximaConfirmacion(usuario) {
        return 1
        // (Duration.between(unUsuario.fechaHoraActual, this.fechaMaximaConfirmacion)).getSeconds() / 86400
    }
}
export default (Evento)

export const EventoNulo = new Evento("")