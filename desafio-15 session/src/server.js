const express = require ('express')
const app = express()
const mongoose= require('mongoose')
const mongoStore = require('connect-mongo')
const session = require('express-session')
//const moongose = require('mongoose')
//const server = require('http').Server(app)
//const io = require('socket.io')(server)
const handlebars = require('express-handlebars');
const server = app.listen((8080),()=> { console.log("servidor escuchando")})



const {normalize,schema,denormalize} = require('normalizr')
const dotenv = require('dotenv');
dotenv.config()

const connection = mongoose.connect('mongodb+srv://coderhouse:coderhouse@cluster0.kcqoc8j.mongodb.net/ecommerce2?', { useNewUrlParser: true, useUnifiedTopology: true });

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'))
app.engine('handlebars',handlebars.engine())
app.set('views',__dirname+'/views')
app.set('view engine','handlebars')

app.use(session({
    store:mongoStore.create({
        mongoUrl:'mongodb+srv://coderhouse:coderhouse@cluster0.kcqoc8j.mongodb.net/ecommerce2?',
        mongoOptions:{useNewUrlParser:true,useUnifiedTopology:true},
        ttl:1000
    }),
    secret:"pina"
}))

//const conecction =require('../src/db/connection');




//codigo socket





const route_productos = require('./routers/router_productos');
const route_usuarios= require('./routers/router_usuario')
const route_mensajes= require('./routers/router_mensaje');
const router_vista = require('./routers/views_router')
const MongoStore = require('connect-mongo')

app.use('/api',route_productos)
app.use('/api',route_usuarios)
app.use('/api',route_mensajes)
app.use('',router_vista)




/*

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


*/