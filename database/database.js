const mySql = require("mysql2/promise");

async function createConnection() {
  return (connection = await mySql.createConnection({
    host: "localhost",
    user: "root",
    password: "Youcant-Be-Here25",
    database: "comics",
  }));
}

module.exports = { createConnection };
