const Mongo = require('../contenedores/Mongo/mongoCrud')
const productosSchema = require('../models/productos')
const generateProducto =require('../utils')

class Productos extends Mongo{
    constructor(){
      
        super('productos',productosSchema)
        this.productos = []
    }

   async  populate(quantity=5){
        const newProductos =[]
        for (let i =0;i<quantity;i++){
           
            let newProducto= generateProducto()

            this.productos.push(newProducto)
            newProductos.push(newProducto)
            
        }
        console.log(this.productos)
        return newProductos

    }

    async ProductosGenerados(){
    
        return [...this.productos]
    }

}

module.exports= new Productos()