import { Evento } from "../Domain/Evento"

export const lolla = new Evento('Lollapaloza', 'Autodromo', "10/5/2018", 0, 1200)
export const RiotFest = new Evento('Riot Fest', 'Groove', "10/8/2018", 1, 900)
export const VenomParty = new Evento('Venom Party', 'Apple', "9/12/2018", 2, 500)
export const GreenDay = new Evento('Green day', 'Estadio Velez', "10/10/2018", 3, 2000)
export const Soundhearts = new Evento('Soundhearts', 'Tecnopolis', "5/04/2018", 4, 2000)
export const Pep = new Evento('pep', 'Tecnopolis', "5/04/2018", 5, 2000)
export const tete = new Evento('tete', 'Tecnopolis', "5/04/2018", 6, 2000)
export const sareers = new Evento('sareers', 'Tecnopolis', "5/04/2018", 7, 2000)
const eventos = [
    lolla,
    RiotFest,
    VenomParty,
    GreenDay,
    Soundhearts,
    Pep,
    tete,
    sareers
]

var resultado = new Evento()

export class EventoService {

    getAllEventos() {
        return eventos
    }

    getEventoById(id) {
        resultado = eventos.find(evento => evento.id === id)
        return resultado
    }
}

export default (EventoService);