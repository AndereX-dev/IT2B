const mysql = require("mysql2/promise");

async function createConnection() {
  return (connection = await mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Youcant-Be-Here25",
    database: "comics",
  }));
}

module.exports = { createConnection };
