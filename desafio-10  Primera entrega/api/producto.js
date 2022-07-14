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

    async buscarProductoId(id){
       let respuesta= await persistencia_producto_txt.buscarProductoId(id)
           return respuesta
    }
    
    async eliminarProducto(id){
       let respuesta= await persistencia_producto_txt.EliminarProductoPorId(id)
              return respuesta
    }
    async ActualizarProducto(id,producto){

       let respuesta= await persistencia_producto_txt.ActualizarProducto(id,producto)
       return respuesta
    }

}




module.exports = new Producto ()