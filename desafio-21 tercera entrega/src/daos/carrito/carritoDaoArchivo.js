const ContenedorArchivo = require('../../contenedores/contenedorArchivo')
//const config = require('../config/database')


class CarritoDaoArchivo extends ContenedorArchivo {
    constructor() {
      super('carritos');
    }
  }

module.exports = CarritoDaoArchivo