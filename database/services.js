async function showData(connection) {
  const [results] = await connection.query("SELECT * FROM comic_books");
  return results;
}

async function insertTextToDB(connection, heroName) {
  const [results] = await connection.query(
    "INSERT INTO comic_books (ID, Released, Chapters, Status, Comic_Type) VALUES (?, ?, ?, ?, ?)",
    [heroName, 2019, 169, "ongoing", "Manhwa"]
  );
  return results;
}
module.exports = { showData, insertTextToDB };

async function userData(connection) {
  const [results] = await connection.query("SELECT * FROM user");
  return results;
}

async function insertUserDataToDB(connection, username, password) {
  const [results] = await connection.query(
    "INSERT INTO user (username, password) VALUES (?, ?)",
    [username, password]
  );
  return results;
}

module.exports = { userData, insertUserDataToDB };
