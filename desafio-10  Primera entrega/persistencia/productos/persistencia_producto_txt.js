const memoria_producto = require('./memoria_producto')

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
    
    
    
}




module.exports = new Persistencia_producto_txt ()