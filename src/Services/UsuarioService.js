import Usuario from '../Domain/Usuario'

export class UsuarioService {
    getUsuarioByID(id) {
        //obtener con id
        return new Usuario('Agustin5', 'agustin5@gmail.com')
    }
}
export default (UsuarioService);