const express = require('express');
const router = express.Router();
const productController = require('../controllers/product.controller')


router.post('/productos', productController.CREATE);
  
router.get('/productos',productController.GETALL);

router.get('/productos/:id',productController.GET_BY_ID);

router.put('/productos/:id',productController.UPDATE);

router.delete('/productos/:id' ,productController.DELETE)


module.exports = router

