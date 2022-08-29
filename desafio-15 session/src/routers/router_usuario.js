const express = require('express');
const router = express.Router();

const usersService = require('../api/usuarios')


router.post('/user/create', async(req,res)=>{
    
    
    const {id,name,last_name,age,alias,password}= req.body
    
    try {
        if(!id||!name||!last_name||!age||!alias|| !password) return res.status(400).send({error:"faltan completar datos"})

        let objeto = {
            id,
            name,
            last_name,
            age,
            alias,
            password,
            avatar:""
        }
       console.log(objeto)
        let resultado = await usersService.create(objeto)
        res.send({status:"sucess",payload:resultado})
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