const listaproductos= require('../productos/memoria_producto')

class Persistencia_carrito_txt{
    #fs = require('fs')
    constructor (){
    
    }

    async guardar(carrito){  
        let carritos=[]
        let informacion;
        try {
           let contenido =  await this.#fs.promises.readFile(__dirname + `/carro.txt`,'utf-8')
                if(contenido){ 
                    

                    carritos= JSON.parse(contenido)

                    carritos.push(carrito)

                    await  this.#fs.promises.writeFile(__dirname + `/carro.txt`,JSON.stringify(carritos,null,'\t'))

                return true;
                }
                return true;
             } catch (error) {
            throw error.message
         }
         
    } 

    
    async guardarCarroYproducto(id_carrito, producto){  
        let carritos=[]
        let informacion;
        try {
           let contenido =  await this.#fs.promises.readFile(__dirname + `/carro.txt`,'utf-8')
                if(contenido){ 
                    informacion= JSON.parse(contenido)

                    carritos.push(carrito)

                    await  this.#fs.promises.writeFile(__dirname + `/carro.txt`,JSON.stringify(carritos,null,'\t'))
                     return true;
                }
                return true;
             } catch (error) {
            throw error.message
         }
         
    } 
    


    
    leer(){
        try {
            const data = this.#fs.readFileSync(__dirname + `/carro.txt`,'utf-8')
            return  JSON.parse(data)
        } catch (error) {
            throw new Error("hay un problema al leer")
        }

    }
    


}


module.exports = new Persistencia_carrito_txt()