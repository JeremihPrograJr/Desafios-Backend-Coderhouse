const listaproductos= require('../productos/memoria_producto')

class Persistencia_carrito_txt{
    #fs = require('fs')
    constructor (){
    
    }

    async guardar(carrito){  

        try {
           let contenido =  await this.#fs.promises.readFile(__dirname + `/carro.txt`,'utf-8')
                if(contenido){ 
                    await  this.#fs.promises.writeFile(__dirname + `/carro.txt`,JSON.stringify(carrito,null,'\t'))
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