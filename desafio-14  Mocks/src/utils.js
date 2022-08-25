const faker = require('faker')
faker.locale= 'es'

const generateProducto = ()=>{
    return {
            name:faker.commerce.product(),
            price:faker.commerce.price(),
            thumbnail:faker.image.food(100, 100, true) 
        }
}


module.exports= generateProducto