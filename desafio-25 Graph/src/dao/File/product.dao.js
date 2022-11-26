const Crud = require('./repository')
//const config = require('../config/database')


class ProductDaoArchivo extends Crud {
    constructor() {
      super('product');
    }
  }

module.exports = ProductDaoArchivo