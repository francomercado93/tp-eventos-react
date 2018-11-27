import { REST_SERVER_URL } from './configuration';

export class EventosService {

    getAllEventos(id) {
        return fetch(REST_SERVER_URL + "/usuarios/" + id + "/eventos-interesantes")
    }

    getEventoById(id, idEvento) {
        return fetch(REST_SERVER_URL + "/usuarios/" + id + "/evento/" + idEvento)
    }
}