const express = require('express');
const router = express.Router();

const usersService = require('../api/usuarios')


router.post('/usuario/guardar', async(req,res)=>{
    let objeto = req.body
    let resultado = await usersService.create(objeto)
    res.json(resultado)

})

router.get('/usuario/listar',async (req,res)=> {
        let resultado= await usersService.findAll()
       res.json(resultado)

})



module.exports = router