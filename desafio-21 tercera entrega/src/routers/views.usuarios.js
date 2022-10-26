const { compareSync } = require('bcrypt')
const {Router} = require('express')
const router = Router()
const {logger}=require('../utils')


router.use(logger)

router.get('/',(req,res) => {

     res.render('index')
 })

 

router.get('/home',(req,res) => {
   if(!req.session.user){
     return res.redirect('login')
   } 
    
    const {email,name,last_name,age,phone,alias,avatar,
    adress} = req.session.user

    res.render('perfil_usuario',{
       email,name,
        last_name,age,phone,alias,adress})
})

router.get('/register',(req,res) => {
    if(req.session.user) {
        req.logger.info(`session activa : ${req.session.user.name} `)
        return res.redirect('http://localhost:8080/home')
    }
    res.render('register')
})

router.get('/login',(req,res) => {
     if(req.session.user){
        req.logger.error(`inicio de session activa : ${req.session.user.name} `)
        return res.redirect('http://localhost:8080/home')
     }
    res.render('login')
})

router.get('/failregister',(req,res) => {
    if(req.session.user){
        return res.render('error_register')
    } 
})


module.exports = router