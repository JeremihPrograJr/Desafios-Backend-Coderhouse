const express = require('express');
const router = express.Router()
const cartController = require('../controllers/cart.controller')


//Crear carrito
router.post('/order' ,cartController.CREATE );

//listar carrito (para pruebas )
router.get('/order' ,cartController.GETALL );


module.exports = router