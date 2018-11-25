import Usuario from '../Domain/Usuario'

export const agustin5 = new Usuario('Agustin5', 'agustin5@gmail.com')

export class UsuarioService {
    getUsuarioByID(id) {
        //obtener con id
        return agustin5
    }
}
export default (UsuarioService);