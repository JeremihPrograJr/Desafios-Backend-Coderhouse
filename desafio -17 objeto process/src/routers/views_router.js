const {Router} = require('express')
const router = Router()


router.get('/home',(req,res) => {
   if(!req.session.user) return res.redirect('http://localhost:8080/login')
 // console.log(req.session.user.name)
    res.render('home',{name:req.session.user.name})
})

router.get('/register',(req,res) => {
    if(req.session.user) return res.redirect('http://localhost:8080/home')
    res.render('register')
})

router.get('/login',(req,res) => {
     if(req.session.user) return res.redirect('http://localhost:8080/home')
    
    res.render('login')
})

router.get('/failregister',(req,res) => {
    if(req.session.user) return res.render('error_register')
})


module.exports = router