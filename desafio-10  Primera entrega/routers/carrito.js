const express = require('express')
const router = express.Router()
const carrito = require('../api/carrito')
const productos = require('../api/producto')

router.post('/carrito/agregar/:id' , async (req,res) => {
        console.log(req.params.id)
        let carritos = await carrito.guardar(parseInt(req.params.id))
        res.json(carritos)
});
   


router.post('/carrito/:id/:idProductos' , async (req,res) => {
        
        let carritoId  = req.params.id
        let productoId = parseInt(req.params.idProductos)
  
        let resultadoProducto = productos.buscarProductoId(productoId)

        //console.log(resultadoProducto)
        //console.log(req.params.idProductos)
        let carritos = await carrito.guardarCarroYproducto(parseInt(carritoId),productoId)
        res.json(
                carrito
        )
});

router.get ('/carrito/listar', (req,res) => {
       //res.json(carrito.leer(parseInt(req.params.id)))
       res.json(carrito.leer())
});

router.delete ('/carrito/borrar/:id', (req,res) => {
        res.json(carrito.borrar(parseInt(req.params.id)))
});

module.exports = router