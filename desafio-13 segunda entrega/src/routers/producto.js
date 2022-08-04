
const   {carritoDao,productoDao}  =require('../daos/index.js');

const express = require('express');
const router = express.Router();

const productos = productoDao
const carrito= carritoDao



router.post('/productos/guardar', async  (req,res)=>{
   

    try {
        console.log(req.body)
        let objeto = await productos.create(req.body)
        console.log(req.body)
        res.json(objeto)
    } catch (error) {
        res.status(500).send(error);
    }
});
  

router.get('/productos/listar', async (req, res) => {

    try {
            let data = await productos.findAll();
            res.send(data);
        } catch (error) {
            res.status(500).send(error);
        }
    });


router.get('/productos/listar/:id',async (req,res)=> {
    
        try {
            console.log("ID " + req.params.id)
            let id = req.params.id
            let obtenerProducto = await productos.findById(id)
               // res.type('json').send(JSON.stringify(obtenerProducto,null,'\t'))
                res.send(obtenerProducto)
        } catch (error) {
                res.status(500).send(error);
            }
        });


router.put('/productos/actualizar/:id', async (req,res) => {

    try {
        let id = parseInt(req.params.id)
        let modificar = productos.update(id,req.body)
        res.send(modificar)

    } catch (error) {
            res.status(500).send(error);
        }
});




router.delete('/productos/borrar/:id',(req,res) => {

    try {
        let id = parseInt(req.params.id)
        let borrar = productos.remove(id)
        res.send(borrar)

    } catch (error) {
            res.status(500).send(error);
        }
     
})





module.exports = router