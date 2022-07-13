const persistencia_memoria_carrito= require('../persistencia/carro/memoria_carro')

class Carrito {

    constructor(){
    }

    async guardar(carrito){
       let guardarProducto= await persistencia_memoria_carrito.guardar(carrito)

       return guardarProducto
    }
    async guardarCarroYproducto(carrito_id, id_producto){
        let guardarProducto= await persistencia_memoria_carrito.guardarCarroYproducto(carrito_id,id_producto)
 
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