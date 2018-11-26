import { REST_SERVER_URL } from "./configuration";

export class EntradasService {
    getEntradasUsr(id) {
        return fetch(REST_SERVER_URL + "/usuarios/" + id + "/entradas")
    }
}