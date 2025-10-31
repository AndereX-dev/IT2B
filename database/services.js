async function showData(connection) {
  const [results] = await connection.query("SELECT * FROM comic_books");
  return results;
}

module.exports = { showData };
