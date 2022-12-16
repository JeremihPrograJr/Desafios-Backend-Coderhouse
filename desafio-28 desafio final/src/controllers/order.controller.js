const router = require('express').Router()
const {logger}=require('../utils')
const productService =require('../services/productService')
const cartService = require('../services/cartService')
const orderService= require('../services/orderService')

router.use(logger)

const CREATE  = async (req,res)=>{
    try {

        if (!req.session.user){
            return res.send({status:"error",payload:"Debe iniciar session para generar la orden"})
        }else{
            let cartIdUser= req.session.user.cart

            //Pensando en que tendria mas carros y siempre el ultimo sera el    carrito
            let ObtenerId= cartIdUser[cartIdUser.length-1]
            
            let carrito = await cartService.findById(ObtenerId)
            console.log(carrito.productos)
            //let carritos = await cartService.create({productos:[]})
            //req.logger.info(`orden Creada : ${carritos} `)
           // res.json(carritos)
        }
    

    } catch (error) {
            req.logger.error(`Error en productos al guardar : ${error}`)
            res.status(500).send(error);
    }
}

const GETALL  = async (req,res)=>{
       console.log(req.session.user)
        try {
            let resultado = await cartService.findAll()
        
            res.json(resultado)
    
            } catch (error) {
                    req.logger.error(`Error en listar carros : ${error}`)
                    res.status(500).send(error);
            }
    }

module.exports ={ CREATE,
                GETALL,
                        }   