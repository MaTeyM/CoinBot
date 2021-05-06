const mongoose = require ("mongoose");
const { DB_CONNECTION } = require('../config');

module.exports = {
  init: () => {
    const mongOptions = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
      autoIndex: false,
      poolSize: 10,
      serverSelectionTimeoutMS: 5000,
      socketTimeoutMS: 45000,
      family: 4
    };

    mongoose.connect(DB_CONNECTION, mongOptions);
    mongoose.Promise = global.Promise;

    mongoose.connection.on("connected", () => console.log('\x1b[30m', "MONGOOSE CONNECTED"));
    mongoose.connection.on("disconnected", () => console.log('\x1b[31m', "MONGOOSE DISCONNECTED"));
  }
};