

class Persistencia_producto_txt {
    #fs =require('fs')
        constructor(){
        }

        async guardar(producto){  
            
        try {
           let contenido =  await this.leer()
           producto.id =  contenido.length === 0 ? 1 : contenido[contenido.length - 1].id + 1;
           producto.timestamp =  new Date().toLocaleString() 
          
           contenido.push(producto)

            await  this.#fs.promises.writeFile(__dirname + `/producto.txt`,JSON.stringify(contenido,null,'\t'))
                return true;
                
             } catch (error) {
            throw error
         }
        } 

       async leer(){
            try {
                const data =  await this.#fs.promises.readFile(__dirname + `/producto.txt`,'utf-8')
               
                return  JSON.parse(data)
            } catch (error) {
                await this.#fs.promises.writeFile(__dirname + `/producto.txt`,'utf-8')
                return []
             
            }
    
        }

        async buscarProductoId(id){
            try {
                const data =  await this.leer()
                let producto = data.find((el)=>el.id == id)
                
                return  producto
            } catch (error) {
                return error.message
            }
    
        }

        async buscarProductoId(id){
            try {
                const data =  await this.leer()
                let producto = data.find((el)=>el.id == id)
                console.log(producto)
                return  producto
            } catch (error) {
                return error.message
            }
    
        }
        async EliminarProductoPorId(id){
            try {
                let contenido =  await this.leer()
                let IndiceEliminar = contenido.findIndex(elem => elem.id == id)
                console.log("id "+id)

                if (IndiceEliminar == -1){
                    return {"error":"No hay producto con esta id"}
                }
                contenido.splice(IndiceEliminar,1)

                await  this.#fs.promises.writeFile(__dirname + `/producto.txt`,JSON.stringify(contenido,null,'\t'))
    
                return true 
             
            } catch (error) {
                return error.message
            }
    
        }

        async ActualizarProducto(id, producto){
            try {
                let contenido =  await this.leer()
                let id_producto = contenido.findIndex(elem => elem.id == id );

               
                if(id_producto === -1 )return {error:"No se puede actualizar"};
                console.log("Id producto " +producto)
                console.log("Id productod desde router " +id)

                
                console.log("Id productod desde router " +producto)
                producto.id = id
                producto.timestamp =contenido[id_producto].timestamp
               
                contenido[id_c]
               contenido.splice(id_producto,1,producto)
        
                await  this.#fs.promises.writeFile(__dirname + `/producto.txt`,JSON.stringify(contenido,null,'\t'))
    
                return true 
             
            } catch (error) {
                return error.message
            }
    
        }
    
}




module.exports = new Persistencia_producto_txt ()