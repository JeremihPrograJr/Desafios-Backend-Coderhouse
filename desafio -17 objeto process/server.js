const express = require ('express')
const app = express()
const mongoose= require('mongoose')
const mongoStore = require('connect-mongo')
const session = require('express-session')
const handlebars = require('express-handlebars');
const passport = require('passport')
const initializedPassport = require('./config/passport.config')
const server = app.listen((8080),()=> { console.log("servidor escuchando")})



const {normalize,schema,denormalize} = require('normalizr')
const dotenv = require('dotenv');
dotenv.config()

const connection = mongoose.connect('mongodb+srv://coderhouse:coderhouse@cluster0.kcqoc8j.mongodb.net/ecommerce2?', { useNewUrlParser: true, useUnifiedTopology: true });

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'))


app.use(session({
    store:mongoStore.create({
        mongoUrl:'mongodb+srv://coderhouse:coderhouse@cluster0.kcqoc8j.mongodb.net/ecommerce2?',
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

const route_productos = require('./routers/router_productos');
const route_usuarios= require('./routers/router_usuario')
const route_mensajes= require('./routers/router_mensaje');
const router_vista = require('./routers/views_router')


app.use('/api',route_productos)
app.use('/api',route_usuarios)
app.use('/api',route_mensajes)
app.use('',router_vista)


