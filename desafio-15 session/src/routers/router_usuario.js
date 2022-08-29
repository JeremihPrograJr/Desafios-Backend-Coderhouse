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

router.post('/user/login',async (req,res) => {
    console.log(req.body)
   try {
    const {id,password} = req.body
    if(!id || !password) return res.status(400).send({error:"faltan completar datos"})
    const user = await usersService.findOne([{id,password}],{name:1,last_name:1,id:1})
    if(!user) return res.status(400).send({error:"usuario no encontrado"})
    req.session.user = user
    res.send({status:"sucess", payload:user})

   } catch (error) {
    res.status(500).send({status:"error",error:"Ocurrio algun problema en el login"})

   }
  
})


router.get('/user/listar',async (req,res)=> {
    try {
        let resultado= await usersService.findAll()
        res.json(resultado)
    } catch (error) {
        res.status(500).send({status:"error",error:"Ocurrio un error al mostrar los usuarios"})
    }
})


router.get('/user/logout',(req,res) => {
    
    req.session.destroy((err) => {
        if(err)return res.status(500).send({status:"error", payload:"ocurrio un error"})
        res.render('logout',{name:req.session.user.name})
    })
   // if(!req.session.user) return res.redirect('/login')
    
})



module.exports = router