const contenedorFirebase = require('../../contenedores/contenedorFirebase')
const db_firebase= require('../../db/firebase/firebase')

class ProductoDaoFirebase extends contenedorFirebase {
  constructor() {
    super(db_firebase, 'productos');
  }
}

module.exports = ProductoDaoFirebase