

class Memoria {
    constructor(){
        this.productos = []
        this.id =0
    }

    async create(data){
        try {
                this.id+=1
                data.id = this.id
                data.timestamp = new Date().toLocaleString()
                this.productos.push(data)
               // persistencia_producto_txt.guardar(this.productos)
            console.log(this.productos)
            
        
        } catch (error) {
            return console.log(`existe problema al guardar :${error}`)
           // throw new Error("existe un problema al guardar el producto")
        }
        
    }

    async findAll(){
        
        try {
            console.log(this.productos)
            return (this.productos.length ===0)? {error:"No hay productos cargados"}: this.productos
        } catch (error) {
            return console.log(`existe problema al leer:${error.message}`)
        }

    }

    async findById(id){
        try {
            let result = this.productos.find( elem => elem.id ===id)
            return (result ===undefined || result ===null )?{error:"Producto no encontrado"}:result;
        } catch (error) {
            return console.log(`existe problema al buscar por id: ${error.message}`)
        }
       
    }

    async update (id,data){
        try {
            let id_producto = this.productos.findIndex(elem => elem.id ===id );
            if(id_producto === -1 )return {error:"No se puede actualizar"};
            producto.id = id
            producto.timestamp =this.productos[id_producto].timestamp
            return  this.productos.splice(id_producto,1,producto)

        } catch (error) {
            return console.log(`existe problema al actualizar por id: ${error.message}`)
        }
       
    }

    async remove(id){
        try {
            let resultado = this.productos.findIndex(elem => elem.id === id)
            return (resultado != -1 ) ?this.productos.splice(resultado,1):{error:"No es posible borrar el producto"}
        } catch (error) {
            return console.log(`existe problema al borrar por id: ${error.message}`)

        }
        
    }
    
}
