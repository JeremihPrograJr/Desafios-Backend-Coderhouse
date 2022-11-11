const CRUD = require('./repository')
const CartSchema = require('../../models/cart.model')

class CarDaoMongo extends CRUD{
    constructor(){
        super('product',CartSchema)
    }

}

module.exports = CarDaoMongo