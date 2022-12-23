const {createHash,isValidPassword,upload,logger} = require('../utils')

const usersService =require('../services/userService')
const cartService= require('../services/cartService')
const userDTO = require('../dtos/user.dto')

const passport = require('passport');
const { compareSync } = require('bcrypt');

const LOGIN = async(req,res) => {
    try {
        const {email,password} = req.body
        console.log(email,password)
        if(!email || !password) return res.status(400).send({error:"faltan completar datos"})
        if (email === "admin" & password==="admin"){
            req.session.user ={rol:'admin'}
            console.log(req.session.user.rol)
           return  res.send({status:"success", payload:'admin'})

        }
        
        const user =  await usersService.findByOne({email:email})
        if(!user ) return res.status(400).send({status:"error",error:"usuario no encontrado"})
        
        if (!isValidPassword(user,password)) {
            return res.status(400).send({status:"error",error:"password incorrecta"})
        }
  
     
             let usuario = {
                email:user.email,
                name:user.name,
                rol:'usuario',
                cart:user.cart,
                last_name: user.last_name,
                alias: user.alias,
                adress: user.adress,
                age: user.age

             }
             let cartIdUser= user.cart.toString()

             console.log(cartIdUser)
             let carro = await cartService.findById(cartIdUser) 

             req.session.cart = carro
             req.session.user= usuario
             //req.session.cart=cart.productos


            res.send({status:"success", payload:usuario})
        
        
    
       } catch (error) {
        req.logger.error(`Error en el login : ${error}`)
        res.status(500).send({status:"error",error:"Ocurrio algun problema en el login"})
    
       }
}
const GETALL = async (req,res) =>{

    try {
        let resultado= await usersService.findAll()
        res.json(resultado)
    } catch (error) {
        req.logger.error(`ocurrio un problema al listar usuarios : ${error}`)
        res.status(500).send({status:"error",error:"Ocurrio un error al mostrar los usuarios"})
    }
}
const LOGOUT = async(req,res) =>{
    req.session.destroy((err) => {
        if(err){
            req.logger.error(`Ocurrio un problema al deslogear: ${error}`)
        return res.status(500).send({status:"error", payload:"ocurrio un error"})
        }
    })
    res.send({status:"ok"})
}
const REGISTERFAIL= (req,res) => {
    res.status(400).send({status:"error",error:"registro fallido"})
}
const UPDATE= async(req,res) => {
    //Aun por realizar
}

module.exports = {LOGIN,
                GETALL,
                LOGOUT,
                REGISTERFAIL,
                UPDATE}