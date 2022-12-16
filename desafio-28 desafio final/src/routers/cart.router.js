const express = require('express');
const router = express.Router()
const cartController = require('../controllers/cart.controller')


//Crear carrito
router.post('/carrito' ,cartController.CREATE );

//listar carrito (para pruebas )
router.get('/carrito' ,cartController.GETALL );

router.get('/carrito/current' ,cartController.currenCart );
   
//eliminar carrito 
router.delete('/carrito/:id' , cartController.DELETE);

router.get('/carrito/:id',cartController.GET_CART_BY_ID)
   
//actualizar
router.post('/carrito/:id/productos' , cartController.UPDATE_PRODUCT_CART);


//obtener lista de productos por carro id
router.get ('/carrito/:id/productos', cartController.GET_PRODUCT_BY_CART);


//eliminando productos del carrito por el id de carrito y producto
router.delete('/carrito/:id_carro/productos/:id_producto' ,cartController.DELETE_PRODUCT_CART);



module.exports = router