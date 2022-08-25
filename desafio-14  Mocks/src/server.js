const express = require ('express')
const app = express()
const server = require('http').Server(app)
const io = require('socket.io')(server)
const productos = require('./api/productos');
const mensajes = require('./api/mensajes')
const usuario = require('./api/usuarios')

const dotenv = require('dotenv');
dotenv.config()

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'))

require('../src/db/connection');


io.on('connection', async socket => {
    console.log('Nuevo cliente conectado!');
    socket.emit('productos',productos.findAll());
    let chat = await mensajes.create()
    socket.emit('mensajes', chat);
    
    socket.on('update', data => {
        io.sockets.emit('productos', productos.findAll());
    });

    socket.on('nuevo-mensaje',  async mensaje =>{
        console.log(mensaje)
        const guardando = await mensajes.create(mensaje)
        io.sockets.emit('mensajes', guardando);

    });

});




const route_productos = require('./routers/producto');
const route_usuarios= require('./routers/usuario')
const route_mensajes= require('./routers/mensajes')
app.use('/api',route_productos)
app.use('/api',route_usuarios)
app.use('/api',route_mensajes)


server.listen(8080,  () => {
    console.log("escuchando puerto 8080")
})