const express = require('express');
const router = express.Router();
const multer = require('multer')
const {createHash,isValidPassword,upload,logger} = require('../utils')
const   {usuarioDao}  =require('../daos/index.js');
const usersService =usuarioDao

const passport = require('passport');
const { compareSync } = require('bcrypt');


router.use(logger)


router.post('/user/create',upload.single('avatar'), passport.authenticate('register',{failureRedirect:'/api/registerfail'}), async(req,res)=>{
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
    console.log(email) 
    console.log(password)
    if(!email || !password) return res.status(400).send({error:"faltan completar datos"})
    
    const user =  await usersService.findEmail({email:email})//await usersService.findOne([{email,password}],{name:1,last_name:1,email:1})
    if(!user) return res.status(400).send({status:"error",error:"usuario no encontrado"})
    console.log(user)
    if (!isValidPassword(user,password)) {
        return res.status(400).send({status:"error",error:"password incorrecta"})
    }
    req.session.user = user
    res.send({status:"success", payload:user})

   } catch (error) {
    req.logger.error(`Error en el login : ${error}`)
    res.status(500).send({status:"error",error:"Ocurrio algun problema en el login"})

   }
  
})


router.get('/user/listar',async (req,res)=> {
    try {
        let resultado= await usersService.findAll()
        res.json(resultado)
    } catch (error) {
        req.logger.error(`ocurrio un problema al listar usuarios : ${error}`)
        res.status(500).send({status:"error",error:"Ocurrio un error al mostrar los usuarios"})
    }
})


router.get('/user/logout',  (req,res) => {
    req.session.destroy((err) => {
        if(err){
            req.logger.error(`Ocurrio un problema al deslogear: ${error}`)
        return res.status(500).send({status:"error", payload:"ocurrio un error"})
        }
    })
    res.send({status:"ok"})
    
})



module.exports = router