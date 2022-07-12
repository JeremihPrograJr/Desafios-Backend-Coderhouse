const persistencia_memoria_producto = require('../persistencia/productos/memoria_producto')

class Producto {

     async guardar(producto){
            let per = await persistencia_memoria_producto.guardar(producto)
           return per
    }

    async leer(){
          let le =  await persistencia_memoria_producto.leer()
           return  le
    }

    buscarProductoId(id){
           return persistencia_memoria_producto.buscarProductoId(id)
    }
    
    actualizar(id,producto){
           return persistencia_memoria_producto.actualizar(id,producto)
    }

    borrar(id){
           return persistencia_memoria_producto.borrar(id);
    }

}




module.exports = new Producto ()