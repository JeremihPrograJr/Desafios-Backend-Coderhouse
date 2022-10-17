const express = require('express')
const app = express()
const compression = require('compression')

const server = app.listen((8080), ()=>{
    console.log("Server escuchando puerto 8080")

} )

//Comentar para hacer con y sin 
app.use(compression())


app.get(('/infocompresion'),(req,res)=> {
    let string = "hola como estan"
    for(let i =0 ; i < 1000; i++){
        string +=" hola como estan "
    }
    res.send(string)
})