import { Evento } from "../Domain/Evento"

const eventos = [
    new Evento('Lollapaloza', 'Autodromo', "10/5/2018", 0, 1200),
    new Evento('Riot Fest', 'Groove', "10/8/2018", 1, 900),
    new Evento('Venom Party', 'Apple', "9/12/2018", 2, 500),
    new Evento('Green day', 'Estadio Velez', "10/10/2018", 3, 2000),
    new Evento('Soundhearts', 'Tecnopolis', "5/04/2018", 4, 2000),
    new Evento('pep', 'Tecnopolis', "5/04/2018", 5, 2000),
    new Evento('tete', 'Tecnopolis', "5/04/2018", 6, 2000),
    new Evento('sareers', 'Tecnopolis', "5/04/2018", 7, 2000),

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