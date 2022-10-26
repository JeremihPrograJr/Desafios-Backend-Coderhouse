const express = require('express')
const app = express()
const mongoose= require('mongoose')
const mongoStore = require('connect-mongo')
const session = require('express-session')
const handlebars = require('express-handlebars');
const passport = require('passport')
const winston = require('winston')

const {logger}=require('./utils')

const initializedPassport = require('./config/passport.config')
const config = require('./config/database')
const server = app.listen(config.PUERTO, () => {
    console.log(`Conectandose al http://localhost:${config.PUERTO} `)
})


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'))
app.use(logger)



app.use(session({
        store:mongoStore.create({
            mongoUrl:'mongodb+srv://coderhouse:coderhouse@cluster0.kcqoc8j.mongodb.net/ecommerce?',
            mongoOptions:{useNewUrlParser:true,useUnifiedTopology:true},
            ttl:1000
        }),
        secret:"pina"
    }))
initializedPassport();
app.use(passport.initialize());
app.use(passport.session());
    
app.engine('handlebars',handlebars.engine())
app.set('views',__dirname+'/views')
app.set('view engine','handlebars')
    




const router_productos =require('../src/routers/producto');
const router_carrito = require('../src/routers/carrito')
const router_usuario = require('../src/routers/usuario.router')
const router_views_usuarios = require('../src/routers/views.usuarios')


app.use('/api',router_productos)
app.use('/api',router_carrito)
app.use('/api',router_usuario)
app.use('',router_views_usuarios)


app.get('/', (req,res) => {
        res.send("home")
})


//Implementancion de middleware a nivel de aplicacion y me envia un error sobre si una ruta esta erronea.
/*
app.use( (req,res,next) => {
        let error = {
                error: -2,
                descripcion:` ruta desconocida  ${req.originalUrl}`,
                metodo: "no se puede acceder  a esta URL"
        }
        res.json(error)
        next();
});

*/

server.on('error' , (error)=> {
        console.log('Error en el servidor :', error)
});


