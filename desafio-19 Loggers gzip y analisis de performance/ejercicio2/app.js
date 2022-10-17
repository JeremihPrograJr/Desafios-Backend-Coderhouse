const { parse } = require('dotenv')
const express = require('express')
const { transport, transports } = require('winston')
const app = express()
const winston = require('winston')
const {logger}=require('./utils')


app.use(logger)

const server = app.listen((8080), ()=> { console.log("escuchando server")})

app.get('/',(req,res) => {

    //req.logger.error("Hola")
        res.send('ok')
})
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
    res.status(200).send("valor es "+resultado)

})