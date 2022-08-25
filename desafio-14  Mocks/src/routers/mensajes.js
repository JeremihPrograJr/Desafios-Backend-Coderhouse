const express = require('express');
const router = express.Router();

const mensajeServices = require('../api/mensajes')


router.post('/mensaje/guardar', async(req,res)=>{
    let objeto = req.body
    let resultado = await mensajeServices.create(objeto)
    res.json(resultado)

})

router.get('/mensaje/listar',async (req,res)=> {
        let resultado= await mensajeServices.findAll()
       res.json(resultado)

})

module.exports= router