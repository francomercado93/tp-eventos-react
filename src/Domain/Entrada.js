import { Evento, EventoNulo } from "./Evento";

export class Entrada {
    constructor() {
        this.id = 0
        this.evento = EventoNulo

    }
    static fromJson(entradaJson) {
        const result = new Entrada()
        for (let key in entradaJson) {
            result[key] = entradaJson[key]
        }
        result.evento = Evento.fromJSON(entradaJson.evento)
        return result
    }
}