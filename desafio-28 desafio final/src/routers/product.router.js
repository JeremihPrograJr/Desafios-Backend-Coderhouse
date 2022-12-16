const express = require('express');
const router = express.Router();
const productController = require('../controllers/product.controller')
const {isAdmin} = require('../middleware/idAdmin')

router.post('/productos',isAdmin, productController.CREATE);
  
router.get('/productos',productController.GETALL);

router.get('/productos/:id',productController.GET_BY_ID);

router.put('/productos/:id',isAdmin,productController.UPDATE);

router.delete('/productos/:id',isAdmin,productController.DELETE)


module.exports = router

