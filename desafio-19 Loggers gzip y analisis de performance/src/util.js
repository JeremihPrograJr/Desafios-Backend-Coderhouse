const winston = require('winston')

const debugLogger =winston.createLogger({
        transports:[
            new winston.transports.File({level:'warn',filename:'warn.log'}),
            new winston.transports.File({ level:'error',
            filename:'error.log'}),
        ]
})

const logger =(req,res,next) => {
    req.logger = debugLogger;
    next();
}
module.exports = {logger}