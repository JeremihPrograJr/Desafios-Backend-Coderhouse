const express = require('express');
const app = express();


//app.use('/static', express.static(__dirname + '/public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const puerto = 8080;

app.set('views', './views');
app.set('view engine', 'pug');


app.get('/', (req, res) => {
    res.render('formulario');
});


const route_productos = require('./routers/producto')
app.use('/api',route_productos)


const server = app.listen(puerto, () => {
    console.log(`servidor escuchando en http://localhost:${puerto}`);
});

server.on('error', error => {
    console.log('error en el servidor:', error);
});