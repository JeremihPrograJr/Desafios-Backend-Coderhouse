const express = require('express')
const router = express.Router()
const carrito = require('../api/carrito')
const productos = require('../api/producto')

//Crear carrito
router.post('/carrito' , async (req,res) => {
        
        let carritos = await carrito.guardar({productos:[]})
        res.json(carritos)
});
   
//eliminar carrito 
router.delete('/carrito/:id' , async (req,res) => {
        let id = parseInt(req.params.id)
        let eliminar = await carrito.eliminarCarrito(id)
        res.json(eliminar)
});
   

router.post('/carrito/:id/producto' , async (req,res) => {
        
        let carritoId  = parseInt(req.params.id)
        let id_producto = req.body
        console.log("Recibiendo id carro " + carritoId)
        console.log("Recibiendo id producto "  + id_producto.id_producto)
        let producto = await productos.leer()
        let producto_id = producto.find((p) => p.id == parseInt( id_producto.id_producto) )
        console.log("Producto encontrado " )
       let carritos = await carrito.guardarCarroYproducto(carritoId,producto_id)
        res.json(
                carritoId
        )
});

router.get ('/carrito/:id/productos', async (req,res) => {
       //res.json(carrito.leer(parseInt(req.params.id)))
       const { id } = req.params;
       let data = await carrito.leer()
       let carritoId = data.find((e) => e.id == id)
       res.json(carritoId.productos)
});

router.delete ('/carrito/borrar/:id', (req,res) => {
        res.json(carrito.borrar(parseInt(req.params.id)))
});

module.exports = router