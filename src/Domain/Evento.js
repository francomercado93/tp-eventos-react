export class Evento {
    constructor() {
        this.id = 0
        this.nombreEvento = ""
        this.edadMinima = 0
        this.valorEntrada = 0
        this.capacidadMaxima = 0
        this.locacion = ""
        this.inicioEvento = new Date()
        this.organizadorEvento = ""
        this.finEvento = new Date()
        this.fechaMaximaConfirmacion = new Date()
        this.cantidadDisponibles = 0
    }

    static fromJson(eventoJson) {
        const result = Object.assign(new Evento(), eventoJson)
        // for (let key in eventoJson) {
        //     result[key] = eventoJson.id
        // }
        return result
    }

    diasfechaMaximaConfirmacion() {
        return 1
        // (Duration.between(unUsuario.fechaHoraActual, this.fechaMaximaConfirmacion)).getSeconds() / 86400
    }

    
}
export default (Evento)

export const EventoNulo = new Evento("")