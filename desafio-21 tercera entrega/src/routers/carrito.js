
const  {carritoDao, productoDao } =require('../daos/index.js');


const express = require('express');
const router = express.Router()

const carrito = carritoDao
const productos = productoDao


//Crear carrito
router.post('/carrito' , async (req,res) => {
        
       
        let carritos = await carrito.create({productos:[]})
        res.json(carritos)
});
   
//eliminar carrito 
router.delete('/carrito/:id' , async (req,res) => {
        let id = req.params.id
        let eliminar = await carrito.remove(id)
        res.json(eliminar)
});
   
//actualizar
router.post('/carrito/:id/productos' , async (req,res) => {
        
        //obtego las id
        let carritoId  = req.params.id
        let  id_producto = req.body.id_producto
        
        //busco si el carro existe
        let carro = await carrito.findById(carritoId)
        if (!carro){
                throw { error: "No se encontro el carrito"};

        }
   


        //busco si el producto existe
        let producto = await productos.findById(id_producto)
        if (!producto){
                throw { error: "No se encontro el producto"};
        }
        
        //agrego producto el productos al array de productos que contiene el carrito
        carro.productos.push(producto)

        //se envia el id del carrito y array (carro.productos)  con el nuevo producto agregado
       let carritos = await carrito.update(carritoId,carro)

        res.json(carritos)
});

//obtener lista de productos por carro id
router.get ('/carrito/:id/productos', async (req,res) => {
       //res.json(carrito.leer(parseInt(req.params.id)))
       const { id } = req.params;
       let data = await carrito.findById(id)
      
        if (!data){
                console.log("emtre aca")
                throw { error: "No se encontro el carrito"};
        }

       //let carritoId = data.find((e) => e.id == id)

       res.json(data.productos)
});

//eliminando productos del carrito por el id de carrito y producto
router.delete('/carrito/:id/productos/:id_prod' , async (req,res) => {
        let id_carrito = req.params.id
        let id_producto = req.params.id_prod
        let DataCarrito = await carrito.findById(id_carrito)

        if (!DataCarrito ){
                throw {"error" : "No se puede encontrar el carrito"}
        }

        let dataProducto = DataCarrito.productos.find((el)=> el.id ==id_producto)
        if (!dataProducto ){
                throw {"error " :"No se puede encontrar el producto"}
        }

        
        DataCarrito.productos = DataCarrito.productos.filter((el)=> el.id != id_producto)


        console.log("id carro " & id_carrito)
        console.log(DataCarrito)
        let respuesta = await carrito.update(id_carrito,DataCarrito)

        //let eliminar = await carrito.eliminarCarrito(id)
        res.json(respuesta)
});

//eliminar carrito
router.delete ('/carrito/borrar/:id', (req,res) => {
        res.json(carrito.remove(req.params.id))
});


module.exports = router