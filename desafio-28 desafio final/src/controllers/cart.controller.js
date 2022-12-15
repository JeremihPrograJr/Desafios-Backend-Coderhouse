const router = require('express').Router()
const {logger}=require('../utils')
const productos =require('../services/productService')
const carrito=require('../services/cartService')


router.use(logger)

const CREATE  = async (req,res)=>{
    try {
        let carritos = await carrito.create({productos:[]})
        req.logger.info(`carrito creado : ${carritos} `)
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

const DELETE  = async (req,res)=>{
    try {
        
        let id = req.params.id
        let eliminar = await carrito.remove(id)
        if (!eliminar){
                return res.send({status:"error",payload:"Producto no existe"})
        }
        req.logger.info(`carrito eliminado : ${eliminar} `)
        res.json(eliminar)

        } catch (error) {
                req.logger.error(`Error en eliminar carro por id  : ${error}`)
                res.status(500).send(error);
        }
}

const UPDATE_PRODUCT_CART = async (req,res) => {
    try {
       
        //obtego las id
        let carritoId  = req.params.id
        let  id_producto = req.body.id_producto
        
        console.log(carritoId)
        console.log(id_producto)
        //busco si el carro existe
                        
        let carro = await carrito.findById(carritoId) 
                                  

        if (!carro){
                req.logger.error("No se encontro el carrito  o no existe")
                throw { error: "No se encontro el carrito"};

        }

        //busco si el producto existe
        let producto = await productos.findById(id_producto)
        if (!producto){
                req.logger.error("No se encontro el producto en el carrito o no existe")
                throw { error: "No se encontro el producto"};
        }
        
        //agrego producto el productos al array de productos que contiene el carrito
        carro.productos.push(producto)
        //se envia el id del carrito y array (carro.productos)  con el nuevo producto agregado
        let carritos = await carrito.update(carritoId,carro)

        req.logger.info(`Se actualizo el carrito con id  : ${carritoId} `)
        res.json(carritos)

    } catch (error) {
            req.logger.error(`Error en actualizar los productos del carro : ${error}`)
            res.status(500).send(error);
    }
}

const GET_PRODUCT_BY_CART =async (req,res) =>{
    try {
        //res.json(carrito.leer(parseInt(req.params.id)))
      const { id } = req.params;
      let data = await carrito.findById(id)

      if (!data){
              req.logger.error("No se encontro el carrito")
              throw { error: "No se encontro el carrito"};
      }

      //let carritoId = data.find((e) => e.id == id)
      req.logger.info(`Se encontraron productos con carro id : ${id} `)
       res.json(data.productos)
       
        } catch (error) {
            req.logger.error(`Error en listar los productos del carro por id : ${error}`)
            res.status(500).send(error);
        }
}

const DELETE_PRODUCT_CART = async(req,res)=> {
    try {
                
        let id_carrito = req.params.id
        let id_producto = req.params.id_prod
        let DataCarrito = await carrito.findById(id_carrito)

        if (!DataCarrito ){
                req.logger.error("No se encontro el carrito")
                throw {"error" : "No se puede encontrar el carrito"}
        }

        let dataProducto = DataCarrito.productos.find((el)=> el.id ==id_producto)
        if (!dataProducto ){
                req.logger.error("No se encontro el producto en el carrito o no existe")
                throw {"error " :"No se puede encontrar el producto"}
        }

        
        DataCarrito.productos = DataCarrito.productos.filter((el)=> el.id != id_producto)


        console.log("id carro " & id_carrito)
        console.log(DataCarrito)

        let respuesta = await carrito.update(id_carrito,DataCarrito)
        req.logger.info(`Se eliminaron  productos con carro id : ${id_carrito} `)
        res.json(respuesta)


        } catch (error) {
                req.logger.error(`Error en elimninar productos del carro : ${error}`)
                res.status(500).send(error);
        }

}

module.exports ={ CREATE,
                  DELETE,
                  UPDATE_PRODUCT_CART,
                  GET_PRODUCT_BY_CART,
                  DELETE_PRODUCT_CART,
                  GETALL}