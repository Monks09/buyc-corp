const dotenv = require('dotenv');
dotenv.config();

const config = {
    CONNECTION_URL: process.env.CONNECTION_URL,
}

module.exports = config;