const dotenv = require('dotenv');
const path = require('path');
dotenv.config();
module.exports = {
  rootPath: path.resolve(__dirname, '..'),
  apiUrl: process.env.API_URL,
  dbUrl: process.env.DB_URL
};