const express = require('express')
const compression = require('compression')
const app = express()



app.use(compression())

app.get('/',(req,res)=> {
    let string = "hola como estan"
    for(let i =0 ; i < 1000; i++){
        string +=" hola como estan "
    }
    res.send(string)
})
const server = app.listen((8080), ()=>{
    console.log("Server escuchando puerto 8080")

} )