const router = require('express').Router()
const {logger}=require('../utils')
const productos =require('../services/productService')
const carrito=require('../services/cartService')
const cartService = require('../services/cartService')


router.use(logger)

const CREATE  = async (req,res)=>{
    try {
        let carritos = await carrito.create({productos:[]})
        req.logger.info(`orden Creada : ${carritos} `)
        res.json(carritos)

    } catch (error) {
            req.logger.error(`Error en productos al guardar : ${error}`)
            res.status(500).send(error);
    }
}

const GETALL  = async (req,res)=>{
       console.log(req.session.user)
        try {
            let resultado = await carrito.findAll()
        
            res.json(resultado)
    
            } catch (error) {
                    req.logger.error(`Error en listar carros : ${error}`)
                    res.status(500).send(error);
            }
    }

module.exports ={ CREATE,
                GETALL,
                        }   