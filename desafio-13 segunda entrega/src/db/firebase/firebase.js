const admin = require('firebase-admin');

const credencial = require('./base-firebase.json');

admin.initializeApp({
  credential: admin.credential.cert(credencial),
});

console.log('Base Firebase conectada!');

const db_firebase= admin.firestore();

module.exports = db_firebase
