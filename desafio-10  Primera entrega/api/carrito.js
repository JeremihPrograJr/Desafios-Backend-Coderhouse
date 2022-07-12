const persistencia_memoria_carrito= require('../persistencia/carro/memoria_carro')

class Carrito {

    constructor(){
    }

    async guardar(id_producto){
       let guardarProducto= await persistencia_memoria_carrito.guardar(id_producto)

       return guardarProducto
    }

    leer(){
        return persistencia_memoria_carrito.leer();
    }   

    borrar(id){
        return persistencia_memoria_carrito.borrar(id)
    }

}

module.exports = new Carrito()