const express = require('express');
const app = express();
const handlebars = require('express-handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const puerto = 8080;

app.engine(
    "hbs",
    handlebars.engine({
      extname: ".hbs",
      defaultLayout: "index.hbs",
      layoutsDir: __dirname + '/views/layout',
      partialsDir: __dirname + '/views/partials/'
    })
  );
  
  app.set("view engine", "hbs");
  app.set("views", "./views");
  
app.use(express.static('public'));


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