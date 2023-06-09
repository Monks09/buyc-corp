const mongoose = require('mongoose');

const configs = require('./configs');

const connectToDatabase = async () => {
    await mongoose.connect(configs.CONNECTION_URL);
}

module.exports = connectToDatabase;