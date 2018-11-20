import { Usuario } from "../Domain/Usuario";


const usrPrincipal = new Usuario('Diego Alvarez', 'diegazoalva@gmail.com',2400,0)

 



export class UsuarioService {

    getUsuarioPrincipal() { 
 
        return  usrPrincipal
    }

 



}
export default  (UsuarioService);