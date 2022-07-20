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

//Aca exportamos la conexion que queremos ocupar
module.exports = mysql;