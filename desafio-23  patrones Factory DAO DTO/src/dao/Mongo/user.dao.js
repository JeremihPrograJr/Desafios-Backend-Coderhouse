const CRUD = require('./repository')
const UsuarioSchema = require('../../models/user.model')

class UsuarioDaoMongo extends CRUD{
    constructor(){
        super('users',UsuarioSchema)
    }

}

module.exports = UsuarioDaoMongo