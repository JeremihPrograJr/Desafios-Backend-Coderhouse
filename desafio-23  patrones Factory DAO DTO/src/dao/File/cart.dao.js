const Crud = require('./repository')
//const config = require('../config/database')


class CartDaoArchivo extends Crud {
    constructor() {
      super('cart');
    }
  }

module.exports = CartDaoArchivo