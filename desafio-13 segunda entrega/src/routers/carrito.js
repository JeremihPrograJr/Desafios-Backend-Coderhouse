
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
        let id = parseInt(req.params.id)
        let eliminar = await carrito.remove(id)
        res.json(eliminar)
});
   

router.post('/carrito/:id/productos' , async (req,res) => {
        
        let carritoId  = req.params.id
        let  id_producto = req.body.id_producto
        
        let producto = await productos.buscarProductoId(id_producto)
         if (!producto){
                throw {"error":"No se encuentro el  producto"}
         }

        
       let carritos = await carrito.guardarCarroYproducto(carritoId,producto)
        res.json(
                carritos
        )
});

router.get ('/carrito/:id/productos', async (req,res) => {
       //res.json(carrito.leer(parseInt(req.params.id)))
       const { id } = req.params;
       let data = await carrito.findAll()
       let carritoId = data.find((e) => e.id == id)
       res.json(carritoId.productos)
});


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
        let respuesta = await carrito.actualizarCarro(id_carrito,DataCarrito)

        //let eliminar = await carrito.eliminarCarrito(id)
        res.json(respuesta)
});


router.delete ('/carrito/borrar/:id', (req,res) => {
        res.json(carrito.remove(parseInt(req.params.id)))
});


module.exports = router