const mongoose = require('mongoose');

const config = require('./config');

const connectToDatabase = async () => {
    await mongoose.connect(config.CONNECTION_URL);
}

module.exports = connectToDatabase;