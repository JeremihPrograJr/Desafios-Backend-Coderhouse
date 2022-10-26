const faker = require('faker')
faker.locale= 'es'
const bcrypt = require('bcrypt')
const winston = require('winston')
const multer = require('multer')

const createHash = passport => bcrypt.hashSync(passport,bcrypt.genSaltSync(10));
const isValidPassword = (user,password) => bcrypt.compareSync(password,user.password)

const generateProducto = ()=>{
    return {
            name:faker.commerce.product(),
            price:faker.commerce.price(),
            thumbnail:faker.image.food(100, 100, true) 
        }
}

const storage = multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,'public')
        
    },filename:function(req,file,cb){
        console.log(file.fieldname)
        cb(null,file.fieldname)
    }
})

const upload= multer({storage})


const debugLogger =winston.createLogger({
        transports:[
            new winston.transports.File({level:'warn',filename:'src/logs/warn.log'}),
            new winston.transports.File({ level:'error',filename:'src/logs/error.log'}),
        ]
})

const logger =(req,res,next) => {
    req.logger = debugLogger;
    next();
}


module.exports= {generateProducto,
                createHash,
                isValidPassword,
                logger,
                upload}