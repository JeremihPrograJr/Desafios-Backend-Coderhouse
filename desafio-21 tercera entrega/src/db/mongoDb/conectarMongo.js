const mongoose = require('mongoose');
require('dotenv').config()

const url = require('../../config/database');

console.log(url.MONGO_URL_NUBE)
const connection = mongoose.connect(url.MONGO_URL_NUBE, { useNewUrlParser: true, useUnifiedTopology: true });

mongoose.connection.on('connected', () => {
    console.log('[Mongoose] - connected in:', url.MONGO_URL_NUBE);
});

mongoose.connection.on('error', (err) => {
    console.log('[Mongoose] - error:', err);
});



module.exports = connection;