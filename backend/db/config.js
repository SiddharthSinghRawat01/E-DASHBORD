const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/e-comm');

const db = mongoose.connection;

db.on("error",console.error.bind(console,"Error connecting MONGODB"));

db.once('open',function(){
    console.log('connected to MONGODB')
});

module.exports = db;