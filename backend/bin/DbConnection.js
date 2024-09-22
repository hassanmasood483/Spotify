require("dotenv").config();
const { Sequelize } = require("sequelize");
const sequelize = new Sequelize({
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  dialect: process.env.DB_DIALECT,
});
sequelize
  .authenticate()
  .then(() => {
    console.log("database is connected");
  })
  .catch((error) => {
    console.log("failed to connect to the database", error);
  });

module.exports = sequelize;
