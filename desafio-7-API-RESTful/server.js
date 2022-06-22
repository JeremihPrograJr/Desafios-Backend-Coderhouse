const express = require('express');
const app = express()


app.use(express.json());
app.use(express.urlencoded({ extended: true }));




const route_productos = require('./router/producto')
app.use('/api',route_productos)




const cfg = require('./config/config')
const server = app.listen(cfg.port, () =>{
    console.log(`Servidor escuchando en http://localhost:${cfg.port}`)
});

server.on ('error',error => {
    console.log('error en el servidor:', error);
});