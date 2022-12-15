const {Router} = require('express')
const router = Router()
const viewController = require('../controllers/view.controller')



//router.get('/',viewController.INDEX)
router.get('/home',viewController.HOME)
router.get('/register',viewController.REGISTER)
router.get('/',viewController.LOGIN)

/*
router.get('/failregister',(req,res) => {
    if(req.session.user){
        return res.render('error_register')
    } 
})
*/

module.exports = router