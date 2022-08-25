const express = require ('express')
const app = express()
const server = require('http').Server(app)
const io = require('socket.io')(server)
const productos = require('./api/productos');
const mensajes = require('./api/mensajes')
const usuario = require('./api/usuarios')

const {normalize,schema,denormalize} = require('normalizr')


const dotenv = require('dotenv');
dotenv.config()

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'))

require('../src/db/connection');


io.on('connection', async socket => {
    console.log('Nuevo cliente conectado!');

    let resultadoProducto= await productos.ProductosGenerados()
    
    socket.emit('productos',resultadoProducto);
   
    let chat = await mensajes.findAll()
   
    socket.emit('mensajes', chat);

    const schemaAuthor = new schema.Entity('author',{},{idAttribute: '_id'});

    const schemaMensaje = new schema.Entity('mensaje', {
        mensaje: schemaAuthor
    },{idAttribute: '_id'})
    
    

    const objetoNormalizado = normalize(chat,schemaMensaje)
    socket.emit('normalizer', objetoNormalizado);
    

    
    socket.on('update', data => {
       // let updateProducto= await productos.populate()
        //io.sockets.emit('productos', updateProducto);
    });

    socket.on('nuevo-mensaje',  async mensaje =>{
        console.log(mensaje)
        const guardando = await mensajes.create(mensaje)
        io.sockets.emit('mensajes', guardando);

    });

});




const route_productos = require('./routers/producto');
const route_usuarios= require('./routers/usuario')
const route_mensajes= require('./routers/mensajes');
const { Schema } = require('mongoose');
app.use('/api',route_productos)
app.use('/api',route_usuarios)
app.use('/api',route_mensajes)


server.listen(8080,  () => {
    console.log("escuchando puerto 8080")
})