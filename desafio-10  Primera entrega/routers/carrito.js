const express = require('express')
const router = express.Router()
const carrito = require('../api/carrito')

router.post('/carrito/agregar/:id' , async (req,res) => {
        let carritos = await carrito.guardar(parseInt(req.params.id))
        res.json(carritos)
});

router.get ('/carrito/listar', (req,res) => {
       //res.json(carrito.leer(parseInt(req.params.id)))
       res.json(carrito.leer())
});

router.delete ('/carrito/borrar/:id', (req,res) => {
        res.json(carrito.borrar(parseInt(req.params.id)))
});

module.exports = router