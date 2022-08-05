
class Persistencia_txt {
    #fs =require('fs')
        constructor(archivo){
            this.ruta = `./db/fileSystem/${archivo}.txt`
            
        }
     

        async create(data){  
          
        try {
           let contenido =  await this.findAll()
            console.log(contenido)
          
           data.id =  contenido.length === 0 ? 1 : contenido[contenido.length - 1].id + 1;
           data.timestamp =  new Date().toLocaleString() 
           contenido.push(data)
            await  this.#fs.promises.writeFile(this.ruta,JSON.stringify(contenido,null,'\t'))
                return true;
                
             } catch (error) {
            throw error
         }
        } 

       async findAll(){
            try {
                const data =  await this.#fs.promises.readFile(this.ruta,'utf-8')
               
                return  JSON.parse(data)
            } catch (error) {
                await this.#fs.promises.writeFile(this.ruta,'utf-8')
                return []
             
            }
    
        }

        async findById(id){
            try {
                const data =  await this.findAll()
                let resultado = data.find((el)=>el.id == id)
                
                return  resultado
            } catch (error) {
                return error.message
            }
    
        }

        async remove(id){
            try {
                let contenido =  await this.leer()
                let IndiceEliminar = contenido.findIndex(elem => elem.id == parseInt(id))
                console.log("id "+id)

                if (IndiceEliminar == -1){
                    return {"error":"No hay producto con esta id"}
                }
                contenido.splice(IndiceEliminar,1)

                await  this.#fs.promises.writeFile(this.ruta,JSON.stringify(contenido,null,'\t'))
    
                return true 
             
            } catch (error) {
                return error.message
            }
    
        }

        async buscarProductoId(id){
            try {
                const data =  await this.findAll()
                let producto = data.find((el)=>el.id == id)
                console.log(producto)
                return  producto
            } catch (error) {
                return error.message
            }
    
        }
    
        async update(id, producto){
            try {
                let contenido =  await this.findAll()
                let id_producto = contenido.findIndex(elem => elem.id == parseInt(id) );

               
                if(id_producto === -1 )return {error:"No se puede actualizar"};
                console.log("Id producto " +producto)
                console.log("Id productod desde router " +id)

                
                console.log("Id productod desde router " +producto)
                producto.id = id
                producto.timestamp =contenido[id_producto].timestamp
               
                contenido[id_c]
               contenido.splice(id_producto,1,producto)
        
                await  this.#fs.promises.writeFile(this.ruta,JSON.stringify(contenido,null,'\t'))
    
                return true 
             
            } catch (error) {
                return error.message
            }
    
        }

        async ActualizarCarro(id, carro){
            try {
                let contenido =  await this.findAll()
                let id_Carro = contenido.findIndex(elem => elem.id == id );
    
               
                if(id_Carro === -1 )return {error:"No se puede actualizar"};
    
                console.log("id de carro  " + id)
                carro.id = id
                carro.timestamp =contenido[id_Carro].timestamp
                                
                contenido[id_Carro]= carro
              // contenido.splice(id_Carro,1,carro)
        
                await  this.#fs.promises.writeFile(this.ruta,JSON.stringify(contenido,null,'\t'))
    
                return contenido[id_Carro]
             
            } catch (error) {
                return error.message
            }
    
        }

        async guardarCarroYproducto(id_carrito, producto){  
  
            try {
                const data = await this.findAll()
                //let carrito = data.find((c)=>c.id == id_carrito)
    
                let resultado =   data.findIndex((elem) => elem.id == id_carrito)
    
                if (resultado == -1){
                    return {"error " : "Carrito no encontrado"}
                }
                
                
    
                data[resultado].productos.push(producto)
                
    
    
                await  this.#fs.promises.writeFile(this.ruta,JSON.stringify(data,null,'\t'))
    
                return data[resultado]
    
    
            } catch (error) {
                  
    
                    throw error
             }
             
        } 




}




module.exports =  Persistencia_txt 