const persistencia_memoria_carrito= require('../persistencia/carro/memoria_carro')
const persistencia_memoria_text =  require('../persistencia/carro/persistencia_carro_txt')
class Carrito {

    constructor(){
    }

    async guardar(carrito){
        console.log(carrito)
       let guardarProducto= await persistencia_memoria_text.guardar(carrito)

       return guardarProducto
    }
    async guardarCarroYproducto(carrito_id, id_producto){
        let guardarProducto= await persistencia_memoria_text.guardarCarroYproducto(carrito_id,id_producto)
 
        return guardarProducto
     }

    async leer(){
        let data = await persistencia_memoria_text.leer();
        return  data
    }   

    borrar(id){
        return persistencia_memoria_carrito.borrar(id)
    }

}

module.exports = new Carrito()