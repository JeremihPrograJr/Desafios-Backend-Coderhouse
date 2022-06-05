const express = require('express');
const { json } = require('stream/consumers');
const Contenedor = require('./Contenedor')

const app = express()
app.use(express.json());
app.use(express.urlencoded({extended:true}));

const PORT = 8080


const server = app.listen(PORT, () =>{
    console.log("Servidor http escuchando en el puerto " + server.address().port)
} )


const archivo = require('./Contenedor')
const archivos = new Contenedor('productos')

app.get( ('/'), (req,res) => {
    res.send("hola mundo")
})

app.get('/productos', async (req,res) => {
    let result =  await  archivos.getAll();
    res.send(JSON.parse (result))
})


app.get('/productoRandom', async (req,res) => {

    let result = await archivos.getAll();
    let productos = JSON.parse(result)

   
    let random = Math.floor(Math.random() * productos.length +1)
    let obtenerProducto = await archivos.getById(random)
    res.send(obtenerProducto)
})



server.on('error', error => {
    console.log('error en el servidor:', error);
});