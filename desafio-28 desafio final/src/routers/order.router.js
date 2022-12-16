const express = require('express');
const router = express.Router()
const ordertController = require('../controllers/order.controller')



//router.post('/order' ,ordertController.CREATE );

router.get('/order' ,ordertController.GETALL );


module.exports = router