import { REST_SERVER_URL } from './configuration'
import { Usuario } from '../Domain/Usuario'

export class UsuariosService {

    async getUsuarioByID(id) {
        const res = await fetch(REST_SERVER_URL + "/usuarios/" + id)
        const usuarioJson = await res.json()
        return this.usuarioAsJson(usuarioJson)
    }

    usuarioAsJson(usuarioJson) {
        return Usuario.fromJson(usuarioJson)
    }

    actualizarUsuarioID(USRID, entrada) {
        return fetch(REST_SERVER_URL + "/usuarios/" + USRID, {
            method: 'put',
            body: JSON.stringify(entrada.toJSON())
        })
    }
}
export default (UsuariosService);