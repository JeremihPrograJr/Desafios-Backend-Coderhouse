

class Contenedor{
    #fs =require('fs')
    constructor(ruta){
        this.ruta = ruta
        
    }

    async save(producto){
        let productosAll= []
        let ob,objetoAgregar;
        try {
      
          
        let contenido = await  this.#fs.promises.readFile(`${this.ruta}.txt`,'utf-8')
       // let contenido =  await this.#fs.promises.readFile(__dirname + `/producto.txt`,'utf-8')
          console.log(contenido)
           if(contenido){
            ob = JSON.parse(contenido)
            
            for(let i =0; i < ob.length;i++){
                productosAll.push(ob[i])
            }

            objetoAgregar = {   
                title : producto.title,
                price : producto.price,
                thumbnail :producto.thumbnail,
                id : productosAll.length+1

            }

            productosAll.push(objetoAgregar)

            this.#fs.promises.writeFile(`${this.ruta}.txt`,JSON.stringify(productosAll,null,'\t'))
           
           }
         
          


        } catch (error) {
            throw new Error("hay un problema al guardar")
        }
        
    }

    async getAll(ruta){

        try {
            let contenido = await  this.#fs.promises.readFile(`${'productos'}.txt`,'utf-8')
           
            return contenido
           
        } catch (error) {
                return []   //+
        }
    }

    async deleteAll(ruta){
        try {
            await this.#fs.promises.unlink(`./${ruta}.txt`)
        } catch (error) {
            console.log("no se encontro el archivo "+error)    //validando  +
        }
        

    }

    async crearArchivo(){
        this.#fs.promises.writeFile(`${this.ruta}.txt`,JSON.stringify([],null,'\t'))

    }

    async getById(id){


        let objeto
        let contenido = await  this.#fs.promises.readFile(`${this.ruta}.txt`,'utf-8')
        objeto = JSON.parse(contenido)
       
        let result = objeto.find( elem => { return elem.id == id})
       
        return  (result === undefined || result ===null )?{error:"Producto no encontrado"}:result;
       
    }

    async deleteById(id){
        console.log(id)
        let objeto
        let contenido = await  this.#fs.promises.readFile(`${this.ruta}.txt`,'utf-8')
        objeto = JSON.parse(contenido)

        let id_producto = objeto.findIndex( elem => { return elem.id === id})
        
        if(id_producto != -1){
        objeto.splice(id_producto,1)
        this.#fs.promises.writeFile(`${this.ruta}.txt`,JSON.stringify(objeto,null,'\t'))
       

        }else{
           return {error:"producto no encontrado"}
        }
      
    
    }
}




let productos1={
    title:'pc',
    price:1000,
    thumbnail:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fhardzone.es%2Ftutoriales%2Fcompras%2Fcomprar-pc-gaming-consejos%2F&psig=AOvVaw05kNDFEoOr8x156UytAD2V&ust=1622070665237000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCICCvqD65fACFQAAAAAdAAAAABAD"
}
let productos2={
    title:'calculador',
    price:2000,
    thumbnail:"chttps://www.google.com/url?sa=i&url=https%3A%2F%2Fsimple.ripley.cl%2Fcalculadora-casio-mx-12b-bk-w-dc-mpm00006342126&psig=AOvVaw14mA_lyD-SRjpnx4EbsR-R&ust=1622070679994000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCJjfsaf65fACFQAAAAAdAAAAABAD"

}
let productos3 ={
    title:'tijeras',
    price:3000,
    thumbnail:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.caleu.cl%2Flibreria%2F833-tijera-escritorio-dahle.html&psig=AOvVaw35A_Zog9EQtgxtt6sSuYY1&ust=1622070695783000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCNjx_q765fACFQAAAAAdAAAAABAD"
}

module.exports=Contenedor;
/*
let archivo = new Contenedor('productos')
//archivo.crearArchivo()



 //GUARDAR
archivo.save(productos2).then(contenido => {
  
}).catch(error =>{
    console.log(error)
})


/*
archivo.leer('productos').then(contenido => {
    console.log(contenido)
}).catch( error => {
    console.log(error)
})
console.log("S")
*/
/*
archivo.borrar('borr').then( contenido => {
}).catch(error => {
    console.log(error)
})


*/

/*eliminar by id 
let id = 1
archivo.getById(id).then(contenido => {
  console.log(contenido)
}).catch(error =>{
    console.log(error)
})

*/

/*
let id = 4
archivo.deleteById(id).then(contenido => {
  console.log(contenido)
}).catch(error =>{
    console.log(error)
})
*/
