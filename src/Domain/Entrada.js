import { Evento, EventoNulo } from "./Evento";

export class Entrada {
    constructor() {
        this.id = 0
        this.evento = EventoNulo
        this.cantidad = 0

    }
    static fromJson(entradaJson) {
        const result = new Entrada()
        for (let key in entradaJson) {
            result[key] = entradaJson[key]
        }
        result.evento = Evento.fromJSON(entradaJson.evento)
        return result
    }

    toJSON() {
        const result = Object.assign({}, this)
        return result
    }
}