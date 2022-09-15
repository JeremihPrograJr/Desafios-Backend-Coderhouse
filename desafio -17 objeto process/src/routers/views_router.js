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
router.get('/info', (req,res) => {
    let argumentos= process.argv
    let sistema = process.platform
    let version = process.version
    let memoria = process.memoryUsage()
    let path = process.execPath
    let pid = process.pid
    let carpeta = process.cwd()
    res.render('info',{
        argumentos:argumentos,
        sistema:sistema,
        version:version,
        memoria:JSON.stringify(memoria),
        path:path,
        pid:pid,
        carpeta:carpeta
        })
        /*
    console.log('Argumentos de entrada', process.argv);
    console.log('Sistema operativo', process.platform);
    console.log('Version node', process.version);
    console.log('memoria', process.memoryUsage());
    console.log('PATH de ejecucion ',process.execPath);
    console.log('PID  ',process.pid);
        */
})

module.exports = router