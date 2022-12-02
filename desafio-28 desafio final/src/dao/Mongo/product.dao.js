const CRUD = require('./repository')
const productoSchema = require('../../models/product.model')

class ProductoDaoMongo extends CRUD{
    constructor(){
        super('product',productoSchema)
    }

}

module.exports = ProductoDaoMongo