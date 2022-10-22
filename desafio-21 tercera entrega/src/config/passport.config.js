const passport = require('passport')
const local = require('passport-local')
const   {usuarioDao}  =require('../daos/index.js');
const usersService =usuarioDao

const {createHash,isValidPassword}= require('../utils')

const LocalStrategy = local.Strategy    //local  = username +password  o email +password



const initializedPassport = () => {
    passport.use('register',new LocalStrategy({passReqToCallback:true,usernameField:'email'},async(req,email,password,done) => {
        try {
            const {name,last_name,age,alias}= req.body 
            if(!email||!name||!last_name||!age||!alias|| !password)return done(null,false)
            const existe =  await usersService.findEmail({email:email})
            if(existe) return done(null,false)
            let objeto = {
                email,
                name,
                last_name,
                age,
                alias,
                avatar:"",
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
        let resultado = await usersService.findOne({_id:id})
        return done(null,resultado)
    })
}




module.exports = initializedPassport