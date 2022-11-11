const express = require('express');
const router = express.Router();
const multer = require('multer')
const passport = require('passport');
const UserController = require('../controllers/user.controller')
const {upload} = require('../utils')



router.post('/user/create',upload.single('avatar'), passport.authenticate('register',{failureRedirect:'/api/registerfail'}), async(req,res)=>{
    console.log(req.user)
    res.send({status:"success",payload:req.user._id})
})

router.get('/registerfail',UserController.REGISTERFAIL)

router.post('/user/login',UserController.LOGIN)


router.get('/user/listar',UserController.GETALL)


router.get('/user/logout',UserController.LOGOUT)



module.exports = router