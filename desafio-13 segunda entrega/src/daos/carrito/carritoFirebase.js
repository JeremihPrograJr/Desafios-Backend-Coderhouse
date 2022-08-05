const contenedorFirebase = require('../../contenedores/contenedorFirebase')
const db= require('../../db/firebase/firebase')

class CarritoDaoFirebase extends contenedorFirebase {
  constructor() {
    super(db, 'carritos');
  }
}

module.exports = CarritoDaoFirebase