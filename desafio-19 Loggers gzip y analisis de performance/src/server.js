const express = require('express')
const app = express()
const compression = require('compression')
const winston = require('winston')
const {logger}=require('./util')


const server = app.listen((8080), ()=>{
    console.log("Server escuchando puerto 8080")

} )

//Comentar para hacer con y sin 
app.use(compression())
app.use(logger)


app.get(('/infocompresion'),(req,res)=> {
    let string = "hola como estan"
    for(let i =0 ; i < 1000; i++){
        string +=" hola como estan "
    }
    res.send(string)
})

//Para error y info
app.get('/suma/:num1/:num2',(req,res) => {
    const { num1,num2} = req.params
    console.log(num1,num2)
    if(!num1 || !num2){
        req.logger.error("Parametros insuficientes")
        res.status(400).send("parametros insuficientes")
    }
    if(isNaN(num1) || isNaN(num2)){
        req.logger.error("invalido parametros")
        res.status(400).send("invalido parametros")
    }
    let parsedNumber1 = parseInt(num1)
    let parsedNumber2= parseInt(num2)
    let resultado = parsedNumber1+parsedNumber2
    req.logger.info(`el resultado es ${resultado} `)
    
    res.status(200).send("valor es "+resultado)

})

function obtenerRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


app.use( (req,res,next) => {
    let error = {
            error: -2,
            descripcion:` ruta desconocida  ${req.originalUrl}`,
            metodo: "no se puede acceder  a esta URL"
    }
    req.logger.warn(error)
    res.json(error)
    next();
});

