const express = require('express')
const app = express()
const config = require('./config/database')
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use('/static', express.static(__dirname + 'public'))


const router_productos =require('../src/routers/producto');
const router_carrito = require('../src/routers/carrito')


app.use('/api',router_productos)
app.use('/api',router_carrito)

app.get('/', (req,res) => {
        res.send("home")
})


//Implementancion de middleware a nivel de aplicacion y me envia un error sobre si una ruta esta erronea.
app.use( (req,res,next) => {
        let error = {
                error: -2,
                descripcion:` ruta desconocida  ${req.originalUrl}`,
                metodo: "no se puede acceder  a esta URL"
        }
        res.json(error)
        next();
});


const server = app.listen(config.PUERTO, () => {
        console.log(`Conectandose al http://localhost:${config.PUERTO} `)
})

server.on('error' , (error)=> {
        console.log('Error en el servidor :', error)
});

/*
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

*/