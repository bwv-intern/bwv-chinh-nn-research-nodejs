require('dotenv').config();
require('ts-node/register');

module.exports = {
  dialect: process.env.DIALECT,
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
};  
