const express = require('express');
const router = express.Router();

const productos = require('../api/productos')

router.get('/productos-test', async (req,res)=>{

        try {
           let resultado= await productos.populate()
           res.send({status:"ok", payload:resultado})          
        } catch (error) {
                res.status(500).send({status:"error",error:"Hubo un problema al cargar productos"})
        }

    
})

router.post('/productos/guardar', async(req,res)=>{
        try {
                let objeto = req.body
                let resultado = await productos.create(objeto)
                res.json(resultado)
        } catch (error) {
                res.status(500).send({status:"error", error:"No se guardaron los valores"})
        }


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