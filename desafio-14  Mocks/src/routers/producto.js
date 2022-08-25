const express = require('express');
const router = express.Router();

const productos = require('../api/productos')

router.get('/productos-test', async (req,res)=>{
        res.send("hola")
})

router.post('/productos/guardar', async(req,res)=>{
    let objeto = req.body
    let resultado = await productos.create(objeto)
    res.json(resultado)

})

router.get('/productos/listar',async (req,res)=> {
        let resultado= await productos.findAll()
       res.json(resultado)

})

router.get('/productos/listar/:id',async (req,res)=> {
    
        let id = req.params.id
        let obtenerProducto = await productos.findById(id)
        res.type('json').send(JSON.stringify(obtenerProducto,null,'\t'))

})


router.put('/productos/actualizar/:id',async (req,res) => {

        let id = req.params.id
        let modificar = await productos.update(id,req.body)
        res.send(modificar)

})


router.delete('/productos/borrar/:id',async (req,res) => {

        let id = req.params.id
        let borrar = await productos.remove(id)
        res.send(borrar)
})





module.exports = router