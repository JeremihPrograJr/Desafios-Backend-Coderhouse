const router = require('express').Router()
const {logger}=require('../utils')
const productService =require('../services/productService')
const cartService = require('../services/cartService')
const orderService= require('../services/orderService')

router.use(logger)



const GETALL  = async (req,res)=>{
       console.log(req.session.user)
        try {
            let resultado = await orderService.findAll()
            res.json(resultado)
    
            } catch (error) {
                    req.logger.error(`Error en listar carros : ${error}`)
                    res.status(500).send(error);
            }
    }

module.exports ={ 
                GETALL,
                        }   