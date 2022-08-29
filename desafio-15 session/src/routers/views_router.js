const {Router, application} = require('express')
const { ro } = require('faker/lib/locales')
const router = Router()


router.get('/',(req,res) => {
   
    res.render('home')
})

router.get('/register',(req,res) => {
    res.render('register')
})

router.get('/login',(req,res) => {
    res.render('login')
})

router.get('/logout',(req,res) => {
    res.render('logout')
})



module.exports = router