const express = require('express')
const app = express()

const server = app.listen((8080), ()=>{
    console.log("Server escuchando puerto 8080")

} )

app.get(('/'),(req,res)=> {
    res.send("Hola")
})