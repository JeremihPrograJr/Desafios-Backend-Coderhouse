const express = require('express')
const app = express()

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use('/static', express.static(__dirname + 'public'))

const puerto = 8080
const router_productos =require('./routers/producto');
const router_carrito = require('./routers/carrito')


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


const server = app.listen(puerto, () => {
        console.log(`Conectandose al http://localhost:${puerto} `)
})

server.on('error' , ()=> {
        console.log('Error en el servidor :', error)
});