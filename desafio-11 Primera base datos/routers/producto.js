const express = require('express');
const producto = require('../api/producto');
const router = express.Router();

const productos = require('../api/producto');
//const producto = require('../model/producto');


router.post('/productos/guardar', async  (req,res)=>{
    try {
        let objeto = await productos.guardar(req.body)
        res.json(objeto)
    } catch (error) {
        res.status(500).send(error);
    }
});
  

router.get('/productos/listar', async (req, res) => {
        try {
            let data = await producto.listar();
            res.send(data);
        } catch (error) {
            res.status(500).send(error);
        }
    });


router.get('/productos/listar/:id',async (req,res)=> {
    
        try {
            console.log("ID " + req.params.id)
            let id = req.params.id
            let obtenerProducto = await producto.buscar(id)
               // res.type('json').send(JSON.stringify(obtenerProducto,null,'\t'))
                res.send(obtenerProducto)
        } catch (error) {
                res.status(500).send(error);
            }
        });


router.put('/productos/actualizar/:id', async (req,res) => {

    try {
        let id = parseInt(req.params.id)
        let modificar = productos.actualizar(id,req.body)
        res.send(modificar)

    } catch (error) {
            res.status(500).send(error);
        }
});




router.delete('/productos/borrar/:id',(req,res) => {

        let id = parseInt(req.params.id)
        let borrar = productos.borrar(id)
        res.send(borrar)
})





module.exports = router