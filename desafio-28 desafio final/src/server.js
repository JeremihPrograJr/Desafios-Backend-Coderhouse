const express = require('express')
const app = express()
const mongoose= require('mongoose')
const mongoStore = require('connect-mongo')
const session = require('express-session')
const handlebars = require('express-handlebars');
const passport = require('passport')
const winston = require('winston')
const swaggerJsdoc= require('swagger-jsdoc')
const swaggerUiExpress= require('swagger-ui-express')
const {ApolloServer} = require('@apollo/server')
const {expressMiddleware} = require('@apollo/server/express4')
const bodyParser = require('body-parser')
const {typeDefs} = require('./graph/index')
const {resolvers} = require('./graph/index')
const {logger}=require('./utils')
const cors = require('cors')
const router_productos =require('../src/routers/product.router');
const router_carrito = require('../src/routers/cart.router')
const router_usuario = require('../src/routers/user.router')
const router_message = require('../src/routers/message.router')
const router_views = require('../src/routers/view.router')
const router_orden = require('../src/routers/order.router')


const initializedPassport = require('./config/passport.config')
//const config = require('./config/database')

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'))
app.use(logger)
app.engine('handlebars',handlebars.engine())
app.set('views',__dirname+'/views')
app.set('view engine','handlebars')
    

const swaggerOptions={
    definition:{
        openapi:'3.0.1',
        info:{
            title:"Api de usuarios coder",
            description:"es un api para probar documentacion"
        }
    },
    apis:[`${__dirname}/docs/**/*.yaml`]
}
const specs =swaggerJsdoc(swaggerOptions)




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
    


app.use('/api-docs',swaggerUiExpress.serve,swaggerUiExpress.setup(specs))
app.use('/api',router_productos)
app.use('/api',router_carrito)
app.use('/api',router_usuario)
app.use('/api',router_message)
app.use('/api',router_orden)
app.use('',router_views)

const apolloServer = new ApolloServer({
    typeDefs,
    resolvers
})

async function callServerGraphql() {
    console.log('start');
    const result = await apolloServer.start();
    console.log(result);
    app.use('/graphql',cors(),bodyParser.json(), expressMiddleware(apolloServer))

}
  
  callServerGraphql();






 const server =app.listen(8080, () => {
    console.log(`Conectandose al http://localhost:${8080} `)
})


server.on('error' , (error)=> {
        console.log('Error en el servidor :', error)
});



