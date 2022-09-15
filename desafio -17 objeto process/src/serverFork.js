const express = require('express')
const app = express()
const { fork } = require('child_process');


const server = app.listen((8080) , ()=>{})


app.get(('/api/randoms'),(req,res) => {
    let cantidad =req.query.cantidad
        if (cantidad === undefined || cantidad === null ){
            cantidad = 10000000
        }
        const computo = fork('./random.js');
        computo.send(cantidad);
        computo.on('message', resultado => {
            res.send(JSON.stringify(resultado));
        });
  
    
})



