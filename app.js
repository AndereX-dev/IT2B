//Importing necessary packages
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

//We define what PORT our server will listen on
const port = 8000;
const path = require("path");
const mysql = require("mysql2/promise");

//Importing our database connection function and services
const { createConnection } = require("./database/database");
const {
  showData,
  insertTextToDB,
  insertUserDataToDB,
} = require("./database/services.js");

app.use(bodyParser.urlencoded());

app.use(bodyParser.json());

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
app.get("/signup", async (req, res) => {
  res.render("signup");
});

app.post("/signup", async (req, res) => {
  /*const username = req.body;
  const password = req.body;*/
  const connection = await createConnection();
  await insertUserDataToDB(
    connection,
    signupData.first_name,
    signupData.last_name,
    signupData.email,
    signupData.password
  );
  const signupData = req.body;
  console.log(signupData);
  res.redirect("/");
});

app.post("/", async (req, res) => {
  /*console.log(req.body.heroName);*/
  const connection = await createConnection();
  const heroName = req.body.heroName;
  await insertTextToDB(connection, heroName);

  res.redirect("/");
});

app.get("/signup", (req, res) => {
  res.render("signup");
});

app.post("/signup", async (req, res) => {
  const connection = await createConnection();
  insertUserDataToDB(connection, FormData.email, FormData.password);
  const FormData = req.body;
  res.redirect("/signup");
});

app.get("/signin", async (req, res) => {
  res.render("signIn");
});

app.post("/signin", async (req, res) => {
  const connection = await createConnection();
  const FormData = req.body;

  if (
    !(await checkIfUsernameAndPasswordIsCorrect(
      connection,
      FormData.email,
      FormData.password
    ))
  ) {
    res.redirect("/signin");
  }
  res.redirect("/dashboard");
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
