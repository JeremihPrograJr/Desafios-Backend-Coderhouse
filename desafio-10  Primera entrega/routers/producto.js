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

router.get('/productos/listar',admin, async ( req,res) => {
        let pro = await productos.leer()
        res.json(pro)
});

router.get('/productos/listar/:id',admin, (req,res) => {
        res.json(productos.buscarProductoId(parseInt(req.params.id)))

});

router.put('/productos/actualizar/:id',admin, (req,res) => {
        res.json(productos.actualizar(parseInt(req.params.id),req.body))
});

router.delete('/productos/borrar/:id',admin,(req,res) => {
        res.json(productos.borrar(parseInt(req.params.id)))
});



module.exports = router;