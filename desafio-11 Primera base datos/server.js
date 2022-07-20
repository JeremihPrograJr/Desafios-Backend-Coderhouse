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
    let dataProducto= await productos.listar()
    socket.emit('productos',dataProducto);
   
    let chat = await mensajes.listar()
    
    socket.emit('mensajes', chat);
    
    socket.on('update',async data => {
        let newDataProducto= await productos.listar()
        io.sockets.emit('productos', newDataProducto);
    
    });

    socket.on('nuevo-mensaje',  async mensaje =>{
       // console.log(mensaje)
        const guardando = await mensajes.guardar(mensaje)
        io.sockets.emit('mensajes', guardando);

    });

});




const route_productos = require('./routers/producto');
const route_mensajes = require('./routers/mensajes');

app.use('/api',route_productos)
app.use('/api',route_mensajes)


server.listen(8080,  () => {
    console.log("escuchando puerto 8080")
})