const express = require('express');
const router = express.Router()
const ordertController = require('../controllers/order.controller')
const {isAdmin} = require('../middleware/idAdmin')



//router.post('/order' ,ordertController.CREATE );

router.get('/order',isAdmin,ordertController.GETALL );


module.exports = router