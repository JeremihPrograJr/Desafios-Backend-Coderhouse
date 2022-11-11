const {createHash,isValidPassword,upload,logger} = require('../utils')

const {user} =require('../dao/factory').getPersistence();
const usersService =user
const passport = require('passport');
const { compareSync } = require('bcrypt');

const LOGIN = async(req,res) => {

    try {
        const {email,password} = req.body
        console.log(email) 
        console.log(password)
        if(!email || !password) return res.status(400).send({error:"faltan completar datos"})
        
        const user =  await usersService.findByOne({email:email})
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


module.exports = {LOGIN,
                GETALL,
                LOGOUT,
                REGISTERFAIL}