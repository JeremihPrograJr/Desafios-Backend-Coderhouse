const ContenedorMongo= require('../../contenedores/contenedorMongo')
const ProductoSchema = require('../../db/mongoDb/productosSchema')

class ProductoDaoMongo extends ContenedorMongo{
    constructor(){
        //console.log(ProductoSchema)
        super('productos',ProductoSchema)
    }

}

module.exports = ProductoDaoMongo