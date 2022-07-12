const memoria_producto = require('./memoria_producto')

class Persistencia_producto_txt {
    #fs =require('fs')
        constructor(){
        }

        async guardar(producto){  
            let array_productos=[]
        try {
           let contenido =  await this.#fs.promises.readFile(__dirname + `/producto.txt`,'utf-8')
                if(contenido){ 
                    array_productos= JSON.parse(contenido)
                    array_productos.push(producto)
                    await  this.#fs.promises.writeFile(__dirname + `/producto.txt`,JSON.stringify(array_productos,null,'\t'))
                return true;
                }
             } catch (error) {
            throw error
         }
    } 

    
        leer(){
            try {
                const data = this.#fs.readFileSync(`./productos.txt`,'utf-8')
                return  JSON.parse(data)
            } catch (error) {
                throw error
            }
    
        }
    
    
    
}




module.exports = new Persistencia_producto_txt ()