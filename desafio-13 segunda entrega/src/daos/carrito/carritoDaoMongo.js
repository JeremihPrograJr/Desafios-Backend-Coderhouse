const ContenedorMongo= require('../../contenedores/contenedorMongo')
const CarritoSchema = require('../../db/mongoDb/carritoSchema')

class CarritoDaoMongo extends ContenedorMongo{
    constructor(){
        super('carrito',CarritoSchema)
    }

}

module.exports = CarritoDaoMongo