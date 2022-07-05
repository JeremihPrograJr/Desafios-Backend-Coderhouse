const express = require ('express')
const app = express()
const server = require('http').Server(app)
const io = require('socket.io')(server)
const productos = require('./api/producto');
const mensajes = require('./api/mensaje')

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'))


io.on('connection', async socket => {
    console.log('Nuevo cliente conectado!');
    socket.emit('productos',productos.leer());
    socket.emit('mensajes', mensajes.leer());
    
    socket.on('update', data => {
        io.sockets.emit('productos', productos.leer());
    });

    socket.on('nuevo-mensaje', mensaje =>{
        mensajes.guardar(mensaje).then(contenido => {
            io.sockets.emit('mensajes', mensajes.leer());
            console.log(mensaje)
        }).catch(error => {console.log(error)})
        
    });

});


const route_productos = require('./routers/producto');
app.use('/api',route_productos)


server.listen(8080,  () => {
    console.log("escuchando puerto 8080")
})