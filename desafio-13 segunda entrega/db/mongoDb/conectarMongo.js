// module of connection to the database.
const mongoose = require('mongoose');


//Se puede cambiar la constante 
const url = require('../../config/database');

const connection = mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });

mongoose.connection.on('connected', () => {
    console.log('[Mongoose] - connected in:', url);
});

mongoose.connection.on('error', (err) => {
    console.log('[Mongoose] - error:', err);
});



module.exports = connection;