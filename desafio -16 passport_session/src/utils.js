const faker = require('faker')
faker.locale= 'es'
const bcrypt = require('bcrypt')

const createHash = passport => bcrypt.hashSync(passport,bcrypt.genSaltSync(10));
const isValidPassword = (user,password) => bcrypt.compareSync(password,user.password)

const generateProducto = ()=>{
    return {
            name:faker.commerce.product(),
            price:faker.commerce.price(),
            thumbnail:faker.image.food(100, 100, true) 
        }
}


module.exports= {generateProducto,
                createHash,
                isValidPassword}