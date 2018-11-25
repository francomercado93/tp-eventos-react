import { Entrada } from '../Domain/Entrada';

const entrada1 = new Entrada()
entrada1.asignarEvento('Lollapaloza', 'Autodromo', "10/5/2018", 0, 1200)
entrada1.asignarAsistente("agustin5")
entrada1.asignarId(1)
const entrada2 = new Entrada()
entrada2.asignarEvento('Venom Party', 'Apple', "9/12/2018", 2, 500)
entrada2.asignarAsistente("agustin5")
entrada2.asignarId(2)
const entradas = [
    entrada1,
    entrada2
]

export class EntradasService {
    getEntradasUsr(id) {
        return entradas
    }
}