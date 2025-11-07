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
