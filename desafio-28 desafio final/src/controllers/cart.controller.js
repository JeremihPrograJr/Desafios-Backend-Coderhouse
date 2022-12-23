const router = require('express').Router()
const {logger}=require('../utils')
const productos =require('../services/productService')
const carrito=require('../services/cartService')
const cartService = require('../services/cartService')
const orderService= require('../services/orderService')

const mailService= require('../services/mailing')

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
                return res.send({status:"error",payload:"Carrito no existe"})
        }
        req.logger.info(`carrito eliminado : ${eliminar} `)
        res.json(eliminar)

        } catch (error) {
                req.logger.error(`Error en eliminar carro por id  : ${error}`)
                res.status(500).send(error);
        }
}

const GET_CART_BY_ID= async (req,res)=>{
        try {
                let id = req.params.id
                console.log(id)
                let obtenerCarrito = await cartService.findById(id)
                 
                if (!obtenerCarrito){
                    req.logger.error(`Error en verificar la id del carrito:  ${error}`)
                    return res.send({status:"error",payload:"Carrito no existe"})
                    //throw {error:"No se encuentra el carrito  con la id ingresada"}
                }
                console.log(obtenerCarrito)
                    req.logger.info(`carrito listado por id : ${obtenerCarrito} `)
                res.send(obtenerCarrito)
        
            } catch (error) {
                    req.logger.error(`Error en buscar por id el carrito : ${error}`)
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

        let carrito ={

        }
        req.session.cart = carritos

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
                
        let id_carrito = req.params.id_carro
        let id_producto = req.params.id_producto

      
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


  

        let respuesta = await carrito.update(id_carrito,DataCarrito)
        req.logger.info(`Se eliminaron  productos con carro id : ${id_carrito} `)
        res.json(respuesta)


        } catch (error) {
                req.logger.error(`Error en elimninar productos del carro : ${error}`)
                res.status(500).send(error);
        }
}

const currenCart = async(req,res)=>{
        if(!req.session.user){
                return res.send({status:"error",payload:"Debe iniciar session para agregar productos al carrito"})
        }else{
                


                /*
                let cartIdUser= req.session.user.cart
                let ObtenerId= cartIdUser[cartIdUser.length-1]
                
                let carrito = await cartService.findById(ObtenerId)
                console.log(carrito.productos)
                */
                return res.send(req.session.cart)
        }
}

const PURCHASE  = async (req,res)=>{
        try {
            if (!req.session.user){

                return res.send({status:"error",payload:"Debe iniciar session para generar la orden"})
            }else{
                let cartIdUser= req.session.user.cart
    
                //Pensando en que tendria mas carros y siempre el ultimo sera el    carrito
                let ObtenerId= cartIdUser[cartIdUser.length-1]
                
                let carrito = await cartService.findById(ObtenerId)

               let num_orden = await orderService.findAll()

                let productos = req.session.cart.productos
                
                let compra = productos.map(elem=>elem.nombre)
                .reduce((obj,nombre) =>{
                        if(obj[nombre]){
                                obj[nombre]=obj[nombre]+1
                        }else{
                                obj[nombre]=1
                        }
                        return obj
                },{})
               
               
             
                
                let crearOrden ={
                        email:req.session.user.email,
                        estado:'generada',
                        numero_orden:num_orden.length == 0 ?1:num_orden.length,
                        productos:carrito.productos,
                        items:[compra]
                }

                let resultado = await orderService.create(crearOrden)
                const mailer = new mailService()

                let message = 
                        `<table style="border: 1px solid #333;">
                        <thead>
                        <tr>
                          <th>Producto</th>
                          <th>cantidad</th>
                        </tr>
                      </thead>`
                     
                      
                        for (let clave in compra){
                         message += 
                           '<tr>' +
                            '<td>' + clave + '</td>' +
                            '<td>' + compra[clave] + '</td>' +
                            
                          '</tr>'
                         ;
                      }
                      
                      message +=  '</table>';

                      

                let mail =  mailer.sendMail({
                        from:'Su comprobante de su compra  <recuperaciones@coderclass.com>',
                        to:req.session.user.email,
                        subject:"Gracias por la compra",
                        html:`<div>
                        <p>Hola :${req.session.user.name}</p>
                        <p>su numero de compra es :${resultado.numero_orden}</p>
                        <p>su estado de la orden es :${resultado.estado}</p>
                        </div>

                    `+message
                        
                })
                
               
                       
               //res.send({status:"sucess",payload:resultado})
               res.send('ok')
            }
        
    
        } catch (error) {
                req.logger.error(`Error en productos al guardar : ${error}`)
                res.status(500).send(error);
        }

        
    }

module.exports ={ CREATE,
                  DELETE,
                  GET_CART_BY_ID,
                  UPDATE_PRODUCT_CART,
                  GET_PRODUCT_BY_CART,
                  DELETE_PRODUCT_CART,
                  GETALL,
                  currenCart,
                  PURCHASE
                }