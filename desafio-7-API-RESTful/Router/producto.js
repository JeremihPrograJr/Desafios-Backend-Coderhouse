const express = require('express');
const router = express.Router();

const Producto = require('../api/producto')
const productos = new Producto


router.post('/productos/guardar', (req,res)=>{
    try {
    let objeto = req.body
    productos.guardar(objeto)
    res.redirect('/')
  
    } catch (error) {
        res.send(error)
    }
    
})

router.get('/productos/listar',(req,res)=> {
    try {
        let obtenerProductos = productos.leer()
        res.type('json').send(JSON.stringify(obtenerProductos,null,'\t'))
    } catch (error) {
        res.send(error)
    }


})

router.get('/productos/listar/:id',(req,res)=> {
    try {
        let id = req.params.id
        let obtenerProducto = productos.buscarProductoId(id)
        res.type('json').send(JSON.stringify(obtenerProducto,null,'\t'))
    } catch (error) {
        console.log(error)
    }


})


router.put('/productos/actualizar/:id',(req,res) => {
    try {
        let id = parseInt(req.params.id)
        let modificar = productos.actualizar(id,req.body)
        res.send(modificar)
    } catch (error) {
        res.send(error)
    }
  
})


router.delete('/productos/borrar/:id',(req,res) => {
    try {
        let id = parseInt(req.params.id)
        let borrar = productos.borrar(id)
        res.send(borrar)
    } catch (error) {
        res.send(error)
    }
   
})





module.exports = router