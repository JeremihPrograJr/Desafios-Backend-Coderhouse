

class Persistencia_carrito_txt{
    #fs = require('fs')

    constructor (){
        
    }

    async guardar(carrito){  

        try {
           let contenido =  await this.leer()
           carrito.id =  contenido.length === 0 ? 1 : contenido[contenido.length - 1].id + 1;
           carrito.timestamp =  new Date().toLocaleString() 
          
           contenido.push(carrito)
           await  this.#fs.promises.writeFile(__dirname + `/carro.txt`,JSON.stringify(contenido,null,'\t'))
        return carrito

             } catch (error) {
            throw error.message
         }
         
    } 

    
    async guardarCarroYproducto(id_carrito, producto){  
  
        try {
            const data = await this.leer()
            //let carrito = data.find((c)=>c.id == id_carrito)

            let resultado =   data.findIndex((elem) => elem.id == id_carrito)

            if (resultado == -1){
                return {"error " : "Carrito no encontrado"}
            }
            
            

            data[resultado].productos.push(producto)
            


            await  this.#fs.promises.writeFile(__dirname + `/carro.txt`,JSON.stringify(data,null,'\t'))

            return data[resultado]


        } catch (error) {
              

                throw error
         }
         
    } 
    

    async  eliminarCarrito(id_carrito){
        try {
            let contenido =  await this.leer()
            let IndiceEliminar = contenido.findIndex(elem => elem.id === id_carrito)
            contenido.splice(IndiceEliminar,1)
            await  this.#fs.promises.writeFile(__dirname + `/carro.txt`,JSON.stringify(contenido,null,'\t'))

            return true 
              } catch (error) {
             throw error.message
          }
    }

    async buscarCarroId(id){
        try {
            const data =  await this.leer()
            let carrito = data.find((el)=>el.id == id)
            console.log(carrito)
            return  carrito
        } catch (error) {
            return error.message
        }

    }

    
    async leer(){
        try {
            const data = await this.#fs.promises.readFile(__dirname + `/carro.txt`,'utf-8')
            
            return  JSON.parse(data)
        } catch (error) {
            await this.#fs.promises.writeFile(__dirname + `/carro.txt`,'utf-8')
         //   throw new Error("hay un problema al leer")
         return []
        }


    }

    async ActualizarCarro(id, carro){
        try {
            let contenido =  await this.leer()
            let id_Carro = contenido.findIndex(elem => elem.id == id );

           
            if(id_Carro === -1 )return {error:"No se puede actualizar"};

            console.log("id de carro  " + id)
            carro.id = id
            carro.timestamp =contenido[id_Carro].timestamp
                            
            contenido[id_Carro]= carro
          // contenido.splice(id_Carro,1,carro)
    
            await  this.#fs.promises.writeFile(__dirname + `/carro.txt`,JSON.stringify(contenido,null,'\t'))

            return contenido[id_Carro]
         
        } catch (error) {
            return error.message
        }

    }
    


}


module.exports = new Persistencia_carrito_txt()