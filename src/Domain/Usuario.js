export class Usuario {
    constructor() {
        this.id = 0
        this.nombreUsuario = ""
        this.nombre = ""
        this.apellido = ""
        this.mail = ""
        this.edad = 0
        this.entradas = []
        this.saldoAFavor = 0
    }

    static fromJson(usuarioJson) {
        const result = Object.assign(new Usuario(), usuarioJson)
        return result
    }

    validarDevolucion(entrada) {
        if (!(entrada.evento.diasfechaMaximaConfirmacion() > 0)) {
            throw new UserException("Error: usuario no puede devolver entrada")
        }
    }
  
}

class UserException extends Error {
    toString() {
        return this.message
    }
}
export const UsuarioNulo = new Usuario("")