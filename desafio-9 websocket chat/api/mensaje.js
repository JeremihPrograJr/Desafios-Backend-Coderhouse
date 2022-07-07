class Mensaje{
    #fs =require('fs')
        constructor(){
            this.mensajes=[];
            this.ruta = 'mensajes'
        }

         async leer(){
            //return this.mensajes
            try {
                const data = await this.#fs.promises.readFile(`public/mensajes.txt`,'utf-8')
                console.log(data)
                return  JSON.parse(data)
            } catch (error) {
                throw new Error("hay un problema al leer")  
            }
     
        }

        
        async guardar(mensaje){  
            let objeto,objetoAgregar;
            this.mensajes.push(mensaje)
            let arrayMensajes=[]
        try {
            //let contenido =  await this.#fs.promises.readFile(`./public/${this.ruta}.txt`,'utf-8')
            let contenido =  await this.#fs.promises.readFile(`./public/mensajes.txt`,'utf-8')
                if(contenido){ 
                     objeto = JSON.parse(contenido)
                     for(let i =0; i < objeto.length;i++){
                            arrayMensajes.push(objeto[i])
                         }
                        objetoAgregar = {   
                            email : mensaje.email,
                            texto : mensaje.texto,
                            fecha : mensaje.fecha
                        }
                        arrayMensajes.push(objetoAgregar)
                   //     this.#fs.promises.writeFile(`./public/${this.ruta}.txt`,JSON.stringify(arrayMensajes,null,'\t'))
                   this.#fs.promises.writeFile(`public/mensajes.txt`,JSON.stringify(arrayMensajes,null,'\t'))
                }
                return arrayMensajes;
         } catch (error) {
            throw new Error("hay un problema al guardar")
         }
        }

}

module.exports= new Mensaje();