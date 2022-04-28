require('dotenv').config()
const SnakeNamingStrategy = require("typeorm-naming-strategies").SnakeNamingStrategy

module.exports = {
  "name": "default",
  "type": "postgres",
  "host": process.env.DB_HOST,
  "port": process.env.DB_PORT,
  "username": process.env.DB_USERNAME,
  "password": process.env.DB_PASSWORD,
  "database": process.env.DB_NAME,
  "synchronize": true,
  "logging": false,
  "entities": [
    "entity/*.*"
  ],
  namingStrategy: new SnakeNamingStrategy(),
  cache: {
    duration: 5
  }
}
