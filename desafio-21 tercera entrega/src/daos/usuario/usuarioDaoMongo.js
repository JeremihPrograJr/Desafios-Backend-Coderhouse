const ContenedorMongo= require('../../contenedores/contenedorMongo')
const UsuarioSchema = require('../../db/mongoDb/usuarioSchema')

class UsuarioDaoMongo extends ContenedorMongo{
    constructor(){
        super('users',UsuarioSchema)
    }

}

module.exports = UsuarioDaoMongo