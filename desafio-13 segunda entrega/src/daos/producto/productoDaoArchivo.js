const ContenedorArchivo = require('../../contenedores/contenedorArchivo')

class ProductoDaoArchivo extends ContenedorArchivo{
    constructor(){
        super('productos')
    }

}

module.exports = ProductoDaoArchivo