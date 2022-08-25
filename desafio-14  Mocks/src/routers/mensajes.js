const { json } = require('express');
const express = require('express');
const router = express.Router();

const mensajeServices = require('../api/mensajes');
const usersServices = require('../api/usuarios');


router.post('/mensaje/:usuario/descripcion', async(req,res)=>{
    

    let id_usuario = req.params.usuario
    let mensaje = req.body.descripcion
    
    let usuario= await usersServices.findById(id_usuario)
    let objeto = {mensaje:mensaje,author:usuario }
    let resultado = await mensajeServices.create(objeto)
    
    res.json(resultado)


})

router.get('/mensaje/listar',async (req,res)=> {
        let resultado= await mensajeServices.findAll()
       res.json(resultado)

})

module.exports= router