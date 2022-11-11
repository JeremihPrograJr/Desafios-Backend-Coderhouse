const express = require('express');
const router = express.Router();
const productController = require('../controllers/product.controller')


router.post('/productos/guardar', productController.CREATE);
  
router.get('/productos/listar',productController.GETALL);

router.get('/productos/listar/:id',productController.GET_BY_ID);

router.put('/productos/actualizar/:id/producto',productController.UPDATE);

router.delete('/productos/borrar/:id' ,productController.DELETE)


module.exports = router

