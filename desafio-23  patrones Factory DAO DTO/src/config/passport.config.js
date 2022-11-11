const { compareSync } = require('bcrypt');
const passport = require('passport')
const local = require('passport-local')
const   {usuarioDao}  =require('../daos/index.js');
const usersService =usuarioDao

const {createHash,isValidPassword}= require('../utils')

const LocalStrategy = local.Strategy    //local  = username +password  o email +password



const initializedPassport = () => {
    passport.use('register',new LocalStrategy({passReqToCallback:true,usernameField:'email'},async(req,email,password,done) => {
        try {
            const {name,last_name,age,alias,adress,phone,avatar}= req.body 
            console.log(req.file)
           
            
            if(!email||!name||!last_name|| !phone || !age||!alias|| !password || !adress)return done(null,false)
            const existe =  await usersService.findByOne({email:email})
            
            if(existe) return done(null,false)
            
            let objeto = {
                email,
                name,
                last_name,
                phone,
                age,
                adress,
                alias,
                avatar:req.file.filename ,
                password:createHash(password),
               
            }
            let resultado = await usersService.create(objeto) 
            return done(null,resultado)
        } catch (error) {
            return done(error)
        }
  
    }))

    passport.serializeUser((user,done) => {
        done(null,user._id)
    })

    passport.deserializeUser( async (id,done) => {
        let resultado = await usersService.findByOne({_id:id})
        return done(null,resultado)
    })
}




module.exports = initializedPassport