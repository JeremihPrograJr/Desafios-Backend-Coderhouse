const express = require('express');
const router = express.Router()
const ordertController = require('../controllers/order.controller')


//Crear carrito
router.post('/order' ,ordertController.CREATE );

//listar carrito (para pruebas )
router.get('/order' ,ordertController.GETALL );


module.exports = router