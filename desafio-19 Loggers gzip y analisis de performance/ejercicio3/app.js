const express = require('express')
const app = express()
const pino = require('pino')

const logger = pino({

}, pino.multistream())


const server = app.listen(8080,()=>{
console.log("escuchando server 8080")
})

app.get(('/'),(req,res) => {
    res.send("listo ahi")
})