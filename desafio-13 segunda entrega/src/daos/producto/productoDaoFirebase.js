const contenedorFirebase = require('../../contenedores/contenedorFirebase')
const db= require('../../db/firebase/firebase')

class ProductoDaoFirebase extends contenedorFirebase {
  constructor() {
    super(db, 'productos');
  }
}

module.exports = ProductoDaoFirebase