const express = require('express');
const router = express.Router();

const usersService = require('../api/usuarios')


router.post('/usuario/guardar', async(req,res)=>{
    const {id,nombre,apellidos,edad,alias,avatar}= req.body
    try {
        if(!id||!nombre||!apellidos||!edad||!alias||!avatar) return res.status(400).send({error:"faltan completar datos"})

        let objeto = {
            id,
            nombre,
            apellidos,
            edad,
            alias,
            avatar
        }
        let resultado = await usersService.create(objeto)
        res.json(resultado)
    } catch (error) {
        res.status(500).send({status:"error",error:"Ocurrio algun problema al guardar un usuario"})
    }
 

})

router.get('/usuario/listar',async (req,res)=> {
    try {
        let resultado= await usersService.findAll()
        res.json(resultado)
    } catch (error) {
        res.status(500).send({status:"error",error:"Ocurrio un error al mostrar los usuarios"})
    }
      

})



module.exports = router