const express = require('express')
const router = express.Router()
const productos = require('../api/producto');


const administrador = true
//no me funciono funciono 
function admin (req,res,next){
        
        if(!administrador){
                res.status(401).send({
                        error:-1,
                        descripcion:`ruta`,
                        metodo:` No autorizado`,
                        ruta:req.originalUrl
         })}

               return next()
        
        
}

router.post('/productos/guardar',admin, async  (req,res) => {
        let p = await productos.guardar(req.body)
        res.json(p)
});

router.get('/productos/listar', async ( req,res) => {
        let pro = await productos.leer()
        res.json(pro)
});

router.get('/productos/listar/:id',admin, async (req,res) => {
        let id = req.params.id
        let producto = await productos.buscarProductoId(id)
        res.json(producto)

});

router.put('/productos/actualizar/:id/producto',admin, async (req,res) => {
        let id = req.params.id
        let producto= req.body
        console.log("Desde router" + id)
        console.log(producto)
        let respuesta = await productos.ActualizarProducto(id,producto)
        res.json(respuesta)
});

router.delete('/productos/borrar/:id',admin,async (req,res) => {
        let id = req.params.id
        let producto = await productos.eliminarProducto(id)
        res.json(producto)
});



module.exports = router;