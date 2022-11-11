const CRUD = require('./repository')
const CartSchema = require('../../models/cart.model')

class CarDaoMongo extends CRUD{
    constructor(){
        super('cart',CartSchema)
    }

}

module.exports = CarDaoMongo