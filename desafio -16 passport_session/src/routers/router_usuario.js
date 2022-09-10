const express = require('express');
const router = express.Router();
const {createHash,isValidPassword} = require('../utils')
const usersService = require('../api/usuarios');
const passport = require('passport')


router.post('/user/create', passport.authenticate('register',{failureRedirect:'/api/registerfail'}),async(req,res)=>{
    console.log(req.user)
    res.send({status:"success",payload:req.user._id})
})

router.get('/registerfail',(req,res) => {
    console.log("rEGISTER fallido")
//res.render('error_register')
    res.status(400).send({status:"error",error:"registro fallido"})
   // res.render('error_register')
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