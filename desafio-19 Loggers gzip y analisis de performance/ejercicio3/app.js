const express = require('express')
const app = express()
const pino = require('pino')

const streams = [
    {level:'debug', stream:process.stdout},
    {level:'error',stream:pino.destination('./pinoerrors.log')}
]
const logger = pino({

}, pino.multistream(streams))


const server = app.listen(8080,()=>{
console.log("escuchando server 8080")
})

app.get(('/'),(req,res) => {
    logger.fatal('fatal')
    logger.error('error')
    logger.warn('warn')
    logger.info('info')
    logger.debug('debug')
    logger.trace('trace')

    res.send("listo ahi")
})