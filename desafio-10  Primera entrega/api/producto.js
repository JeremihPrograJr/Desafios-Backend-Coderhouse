//const persistencia_memoria_producto = require('../persistencia/productos/memoria_producto')
const persistencia_producto_txt = require('../persistencia/productos/persistencia_producto_txt')


class Producto {

     async guardar(producto){
            let per = await persistencia_producto_txt.guardar(producto)
           return per
    }

    async leer(){
          let le =  await persistencia_producto_txt.leer()
           return  le
    }

    buscarProductoId(id){
           return persistencia_producto_txt.buscarProductoId(id)
    }
    
    actualizar(id,producto){
           return persistencia_producto_txt.actualizar(id,producto)
    }

    borrar(id){
           return persistencia_producto_txt.borrar(id);
    }

}




module.exports = new Producto ()