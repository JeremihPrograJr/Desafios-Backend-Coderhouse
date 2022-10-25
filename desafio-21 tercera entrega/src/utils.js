const faker = require('faker')
faker.locale= 'es'
const bcrypt = require('bcrypt')
const winston = require('winston')


const createHash = passport => bcrypt.hashSync(passport,bcrypt.genSaltSync(10));
const isValidPassword = (user,password) => bcrypt.compareSync(password,user.password)

const generateProducto = ()=>{
    return {
            name:faker.commerce.product(),
            price:faker.commerce.price(),
            thumbnail:faker.image.food(100, 100, true) 
        }
}



const debugLogger =winston.createLogger({
        transports:[
            new winston.transports.File({level:'warn',filename:'./logs/warn.log'}),
            new winston.transports.File({ level:'error',
            filename:'./logs/error.log'}),
        ]
})

const logger =(req,res,next) => {
    req.logger = debugLogger;
    next();
}


module.exports= {generateProducto,
                createHash,
                isValidPassword,
                logger}