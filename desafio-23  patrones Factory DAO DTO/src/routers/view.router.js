const { compareSync } = require('bcrypt')
const {Router} = require('express')
const router = Router()
const viewController = require('../controllers/view.controller')
const {logger}=require('../utils')


router.use(logger)


router.get('/',viewController.INDEX)
router.get('/home',viewController.HOME)
router.get('/register',viewController.REGISTER)
router.get('/login',viewController.LOGIN)

/*
router.get('/failregister',(req,res) => {
    if(req.session.user){
        return res.render('error_register')
    } 
})
*/

module.exports = router