const express = require("express");
const app = express();
const path = require("path");
const mysql = require("mysql2/promise");
const port = 8000;
const { createConnection } = require("./database/database");
const { showData } = require("./database/services.js");

app.set("view engine", "ejs");
app.use(express.static("public"));

/*app.get("/", (req, res) => {
  res.send("Hello World!");
});*/

app.get("/", async (req, res) => {
  const connection = await createConnection();
  const results = await showData(connection);
  console.log(results);
  res.render("index", {
    faveHeroes: ["Ironman", "Batman", "Spiderman", "Superman"],
    comics: results,
  });
});

app.get("/krokeide/elever/klasse/IT2B", (req, res) => {
  res.send("Hei dette er klasse IT2B ved Krokeide vgs");
});

app.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "about.html"));
});

app.get("/memes", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "memes.html"));
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
