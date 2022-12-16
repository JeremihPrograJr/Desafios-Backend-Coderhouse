const CRUD = require('./repository')
const orderSchema = require('../../models/order.model')

class OrderDaoMongo extends CRUD{
    constructor(){
        super('order',orderSchema)
    }

}

module.exports = OrderDaoMongo