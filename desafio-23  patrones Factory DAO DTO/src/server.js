const express = require('express')
const app = express()
const mongoose= require('mongoose')
const mongoStore = require('connect-mongo')
const session = require('express-session')
const handlebars = require('express-handlebars');
const passport = require('passport')
const winston = require('winston')

const {logger}=require('./utils')

//const initializedPassport = require('./config/passport.config')
//const config = require('./config/database')

const server = app.listen(8080, () => {
    console.log(`Conectandose al http://localhost:${8080} `)
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
//initializedPassport();
//app.use(passport.initialize());
//app.use(passport.session());
    
app.engine('handlebars',handlebars.engine())
app.set('views',__dirname+'/views')
app.set('view engine','handlebars')
    




//const router_productos =require('../src/routers/producto');
//const router_carrito = require('../src/routers/carrito')
//const router_usuario = require('../src/routers/usuario.router')
const router_views = require('../src/routers/view.router')


//app.use('/api',router_productos)
//app.use('/api',router_carrito)
//app.use('/api',router_usuario)
app.use('',router_views)


app.get('/', (req,res) => {
        res.send("home")
})



server.on('error' , (error)=> {
        console.log('Error en el servidor :', error)
});


