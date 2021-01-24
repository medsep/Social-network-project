const admin = require('firebase-admin');

admin.initializeApp();

const db = admin.firestore();

//export
module.exports = {admin,db};
