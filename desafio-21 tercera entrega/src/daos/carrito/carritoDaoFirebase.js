const contenedorFirebase = require('../../contenedores/contenedorFirebase')
const db_firebase= require('../../db/firebase/firebase')

class CarritoDaoFirebase extends contenedorFirebase {
  constructor() {
    super(db_firebase, 'carritos');
  }
}

module.exports = CarritoDaoFirebase