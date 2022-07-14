const listaproductos= require('../productos/memoria_producto');
const { carrito } = require('./memoria_carro');

class Persistencia_carrito_txt{
    #fs = require('fs')

    constructor (){
        
    }

    async guardar(carrito){  
       
       // let informacion;
       
        try {
           let contenido =  await this.leer()
           carrito.id =  contenido.length === 0 ? 1 : contenido[contenido.length - 1].id + 1;
           carrito.timestamp =  new Date().toLocaleString() 
          
           contenido.push(carrito)
           await  this.#fs.promises.writeFile(__dirname + `/carro.txt`,JSON.stringify(contenido,null,'\t'))
            return carrito

          // await this.#fs.promises.writeFile(this.path, JSON.stringify(elements, null, 2));

             //   if(contenido){ 


                  //  carritos= JSON.parse(contenido)

                 //   carritos.push(carrito)


                  //  await  this.#fs.promises.writeFile(__dirname + `/carro.txt`,JSON.stringify(carritos,null,'\t'))

             // return true;
               // }
               // return true;
             } catch (error) {
            throw error.message
         }
         
    } 

    
    async guardarCarroYproducto(id_carrito, producto){  
  
        try {
            const data = await this.leer()
            //let carrito = data.find((c)=>c.id == id_carrito)

            let resultado = await  data.findIndex((elem) => elem.id === id_carrito)

            if (resultado == -1){
                return {"error " : "Carrito no encontrado"}
            }
            
            console.log("carro ")
            data[resultado] = data[resultado].productos.push(producto)
            console.log("mostrando producto")
            console.log(producto)
            
           //
        //    data[resultado] = { ...data[resultado], ...producto };
          // data[resultado].productos.push({n:"s","e":3})
           // carrito.productos.push(producto)

      

            await  this.#fs.promises.writeFile(__dirname + `/carro.txt`,JSON.stringify(data,null,'\t'))

return resultado
        } catch (error) {
              

                throw error
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
    


}


module.exports = new Persistencia_carrito_txt()