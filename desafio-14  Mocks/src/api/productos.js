const Mongo = require('../contenedores/Mongo/mongoCrud')
const productosSchema = require('../models/productos')

class Productos extends Mongo{
    constructor(){
        super('productos',productosSchema)
    }

    populate(){
        
    }

}

module.exports= new Productos()