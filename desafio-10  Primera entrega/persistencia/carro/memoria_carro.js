const listaproductos= require('../productos/memoria_producto')
const persistencia_carrito_txt = require('./persistencia_carro_txt')

class Carrito{

    constructor (){
        this.carrito_productos=[]
        this.carrito;
        this.id = 1
    }

    async guardar(id_producto){
        try {
            let producto_resultado =  await listaproductos.buscarProductoId(id_producto)
            if(producto_resultado.error){
                    return  producto_resultado;
            }
                this.carrito_productos.push(producto_resultado)
                this.carrito ={
                    id:this.id ,
                    timestamp : new Date().toLocaleString(),
                    productos: this.carrito_productos
                }
                this.id = this.id +1

                await  persistencia_carrito_txt.guardar(this.carrito).then((contenido) => {console.log(contenido)}).catch(err => console.log(err))
                
                return this.carrito
            
        

        } catch (error) {
            return {error:"existe un error en guardar de memoria_carrito"}

        }
       
    }


    async guardarCarroYproducto(id_carrito,id_producto){
        try {
            let producto_resultado =  await listaproductos.buscarProductoId(id_producto)
            if(producto_resultado.error){
                    return  producto_resultado;
            }
                this.carrito_productos.push(producto_resultado)
                this.carrito ={
                    id:id_carrito,
                    timestamp : new Date().toLocaleString(),
                    productos: this.carrito_productos
                }
               

                await  persistencia_carrito_txt.guardar(this.carrito).then((contenido) => {console.log(contenido)}).catch(err => console.log(err))
                
                return this.carrito
            
        

        } catch (error) {
            return {error:"existe un error en guardar de memoria_carrito"}

        }
       
    }




    leer(){
        try {
            return (this.carrito_productos.length === 0)? {error:"No hay productos en el carrito"}: this.carrito;
        } catch (error) {
            return {error:"existe un error en leer de memoria_carrito"}
        }
       
    }



    borrar(id_producto){
         
        try {
            let id = this.carrito.productos.findIndex(el => el.id == id_producto)
            if(id != -1){
                this.carrito.productos.splice(id,1)
            }else{
                return {error:"Producto no encontrado en el carrito"}
            }

        } catch (error) {
            return {errror:"No hay productos q se pueda eliminar"}
        }
        
        
    }


}


module.exports = new Carrito()