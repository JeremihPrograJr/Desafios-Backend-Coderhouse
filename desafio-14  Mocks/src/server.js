const express = require ('express')
const app = express()
const server = require('http').Server(app)
const io = require('socket.io')(server)
const productos = require('./api/productos');
const mensajes = require('./api/mensajes')
const usuario = require('./api/usuarios')

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'))


io.on('connection', async socket => {
    console.log('Nuevo cliente conectado!');
    socket.emit('productos',productos.leer());
    let chat = await mensajes.leer()
    socket.emit('mensajes', chat);
    
    socket.on('update', data => {
        io.sockets.emit('productos', productos.leer());
    });

    socket.on('nuevo-mensaje',  async mensaje =>{
        console.log(mensaje)
        const guardando = await mensajes.guardar(mensaje)
        io.sockets.emit('mensajes', guardando);

    });

});




const route_productos = require('./routers/producto');
app.use('/api',route_productos)


server.listen(8080,  () => {
    console.log("escuchando puerto 8080")
})