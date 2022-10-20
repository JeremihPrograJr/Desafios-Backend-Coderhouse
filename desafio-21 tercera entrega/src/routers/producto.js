
const   {carritoDao,productoDao}  =require('../daos/index.js');

const express = require('express');
const router = express.Router();

const productos = productoDao
const carrito= carritoDao



router.post('/productos/guardar', async  (req,res)=>{
   

    try {
        console.log(req.body)
        let objeto = await productos.create(req.body)
        
        res.json(objeto)
    } catch (error) {
        res.status(500).send(error);
    }
});
  

router.get('/productos/listar', async (req, res) => {

    try {
            let data = await productos.findAll();
            console.log(data)
            res.send(data);
        } catch (error) {
            res.status(500).send(error);
        }
    });


router.get('/productos/listar/:id',async (req,res)=> {
    
        try {
            let id = req.params.id
            console.log(id)
            let obtenerProducto = await productos.findById(id)
             
            if (!obtenerProducto){
                throw {error:"No se encuentra producto  con la id ingresada"}
            }
                res.send(obtenerProducto)

        } catch (error) {
                res.status(500).send(error);
            }
        });


router.put('/productos/actualizar/:id/producto', async (req,res) => {

    try {
        let id = req.params.id
        let modificar = await productos.update(id,req.body)
        res.send(modificar)

    } catch (error) {
            res.status(500).send(error);
        }
});



router.delete('/productos/borrar/:id' ,async(req,res) => {

    try {
        let id = req.params.id
        let borrar =await  productos.remove(id)
        res.send(borrar)

    } catch (error) {
            res.status(500).send(error);
        }
     
})





module.exports = router