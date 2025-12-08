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

async function userData(connection) {
  const [results] = await connection.query("SELECT * FROM user");
  return results;
}

async function insertUserDataToDB(connection, email, password) {
  const [results] = await connection.query(
    "INSERT INTO user (first_name, last_name, EMAIL, password) VALUES (?, ?, ?, ?)",
    [first_name, last_name, email, password]
  );
  return results;
}

async function insertNewUserToDB(connection, email, password) {
  const [results] = await connection.query(
    "INSERT INTO user (EMAIL, password) VALUES (?, ?)",
    [email, password]
  );
  return results;
}

async function checkIfUsernameAndPasswordIsCorrect(connection, email) {
  const [results] = await connection.query(
    "SELECT * FROM user WHERE EMAIL = ? AND password = ?",
    [email, password]
  );
  if (results.length === 0) {
    return (finalResults = false);
  }
  return (finalResults = true);
}

module.exports = {
  showData,
  insertTextToDB,
  userData,
  insertUserDataToDB,
  insertNewUserToDB,
};
