const mongo = require('../contenedores/Mongo/mongoCrud')
const mensajeSchema = require('../models/mensaje')

class Mensaje extends mongo{
    constructor(){
        super('mensajes',mensajeSchema)
    }


}

module.exports= new Mensaje()