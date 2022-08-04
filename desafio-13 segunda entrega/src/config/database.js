
require('dotenv').config()


const config = {
    mysql : {
        client: 'mysql',
        connection: {
            host: '127.0.0.1',
            user: 'root',
            password: '',
            database: 'mydb'
        },
        pool: { min: 0, max: 7 }
    },
    sqlite3 : {
        client: 'sqlite3',
        connection: {
            filename:__dirname + '/../db/eccomerce.sqlite'
        },
        useNullAsDefault: true
    },
    MONGO_URL_DB_LOCAL :"mongodb://localhost:27017/ecommerce",
    MONGO_URL_NUBE :"mongodb+srv://coderhouse:coderhouse@cluster0.afyxx.mongodb.net/coderhouse?retryWrites=true&w=majority",
    tipoBaseDato: 'Archivo',
    PUERTO: 8080,
    producto:'producto',
    carrito:'carrito'


}



const mysql = {
    client: 'mysql',
    connection: {
        host: '127.0.0.1',
        user: 'root',
        password: '',
        database: 'mydb'
    },
    pool: { min: 0, max: 7 }
}

const sqlite3 = {
    client: 'sqlite3',
    connection: {
        filename:__dirname + '/../db/eccomerce.sqlite'
    },
    useNullAsDefault: true
}
const MONGO_URL_DB_LOCAL ="mongodb://localhost:27017/ecommerce"

const MONGO_URL_NUBE ="mongodb+srv://coderhouse:coderhouse@cluster0.afyxx.mongodb.net/coderhouse?retryWrites=true&w=majority"


//Aca exportamos la conexion que queremos ocupar
module.exports = config;