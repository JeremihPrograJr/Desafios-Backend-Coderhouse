const Mongo = require('../contenedores/Mongo/mongoCrud')
const usuarioSchema = require('../models/usuario')

class Usuario extends Mongo{
    constructor(){
        super('users',usuarioSchema)
    }


}

module.exports= new Usuario()