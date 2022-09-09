const express = require('express');
const router = express.Router();
const {createHash,isValidPassword} = require('../utils')

const usersService = require('../api/usuarios');


router.post('/user/create', async(req,res)=>{
    
    
    const {email,name,last_name,age,alias,password}= req.body
    
    try {
        if(!email||!name||!last_name||!age||!alias|| !password) return res.status(400).send({error:"faltan completar datos"})
        let c = createHash(password)
        console.log(email)
        let existe = await usersService.findEmail({email})
      console.log(existe)
        if (existe) return res.send({status:"error", payload:"ya existe el email"})

        let objeto = {
            email,
            name,
            last_name,
            age,
            alias,
            avatar:"",
            password:createHash(password),
           
        }
       console.log("1")
    
        let resultado = await usersService.create(objeto)   //creando usuario
        console.log("2")
    
        console.log(resultado)

        res.send({status:"success",payload:resultado})
    } catch (error) {
        res.status(500).send({status:"error",error:"Ocurrio algun problema al guardar un usuario"})
    }
 

})

router.post('/user/login',async (req,res) => {
    
   try {
    const {email,password} = req.body
    if(!email || !password) return res.status(400).send({error:"faltan completar datos"})
    
    const user =  await usersService.findEmail({email:email})//await usersService.findOne([{email,password}],{name:1,last_name:1,email:1})
    if(!user) return res.status(400).send({status:"error",error:"usuario no encontrado"})
    if (isValidPassword(user,password)) return res.status(400).send({status:"error",error:"password incorrecta"})

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
        res.send({status:"ok"})
    })
    
})



module.exports = router