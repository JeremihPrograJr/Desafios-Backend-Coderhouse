
const   {carritoDao,productoDao}  =require('../daos/index.js');
const express = require('express');
const router = express.Router();
const {logger}=require('../utils')
const productos = productoDao
const carrito= carritoDao

router.use(logger)


router.post('/productos/guardar', async  (req,res)=>{
    try {
        console.log(req.body)
        let objeto = await productos.create(req.body)
        req.logger.info(`Producto guardado : ${objeto} `)
        res.json(objeto)
    } catch (error) {
        req.logger.error(`Error en productos al guardar : ${error}`)
        res.status(500).send(error);
    }
});
  

router.get('/productos/listar', async (req, res) => {

    try {
            let data = await productos.findAll();
          //  req.logger.info(`Productos listado : ${objeto} `)
            res.send(data);
        } catch (error) {
            req.logger.error(`Error en productos al listar : ${error}`)
            res.status(500).send(error);
        }
    });


router.get('/productos/listar/:id',async (req,res)=> {
    
        try {
            let id = req.params.id
            console.log(id)
            let obtenerProducto = await productos.findById(id)
             
            if (!obtenerProducto){
                req.logger.error(`Error en verificar la id del producto:  ${error}`)
                throw {error:"No se encuentra producto  con la id ingresada"}
            }
                req.logger.info(`Producto listado por id : ${obtenerProducto} `)
                res.send(obtenerProducto)

        } catch (error) {
                req.logger.error(`Error en buscar por id el producto : ${error}`)
                res.status(500).send(error);
            }
        });

router.put('/productos/actualizar/:id/producto', async (req,res) => {

    try {
        let id = req.params.id
        let modificar = await productos.update(id,req.body)
        req.logger.info(`Producto modificado : ${modificar} `)
        res.send(modificar)

    } catch (error) {
            req.logger.error(`Error en productos al actualizar : ${error}`)
            res.status(500).send(error);
        }
});


router.delete('/productos/borrar/:id' ,async(req,res) => {

    try {
        let id = req.params.id
        let borrar =await  productos.remove(id)
        req.logger.info(`Producto eliminado : ${borrar} `)
        res.send(borrar)

    } catch (error) {
            req.logger.error(`Error en productos al borrar: ${error}`)
            res.status(500).send(error);
        }
     
})





module.exports = router