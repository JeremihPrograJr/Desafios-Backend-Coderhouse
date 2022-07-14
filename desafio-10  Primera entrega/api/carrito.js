const persistencia_memoria_text =  require('../persistencia/carro/persistencia_carro_txt')
const producto = require('./producto')

class Carrito {

    constructor(){
    }

    async guardar(carrito){
        console.log(carrito)
       let guardarProducto= await persistencia_memoria_text.guardar(carrito)

       return guardarProducto
    }
    async guardarCarroYproducto(carrito_id, producto){
        let guardarProducto= await persistencia_memoria_text.guardarCarroYproducto(carrito_id,producto)
 
        return guardarProducto
     }

    async leer(){
        let data = await persistencia_memoria_text.leer();
        return  data
    }   
    async buscarCarroId(id){
        let data = await persistencia_memoria_text.buscarCarroId(id);
        return  data
    }   

    async eliminarCarrito(id){
        let respuesta = await persistencia_memoria_text.eliminarCarrito(id);
        return  respuesta
    }
    async actualizarCarro(id,carro){
        let respuesta = await persistencia_memoria_text.ActualizarCarro(id,carro);
        return  respuesta
    }

}

module.exports = new Carrito()