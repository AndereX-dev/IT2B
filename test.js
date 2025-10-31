const express = require("express");
const app = express();

app.get("/", async (req, res) => {
  res.send("Hello There!");
});

app.get("/api", async (req, res) => {
  const data = await getWeather();
  res.send(data);
});

async function getWeather() {
  const response = await fetch(
    "https://api.met.no/weatherapi/locationforecast/2.0/compact?lat=60.10&lon=9.58"
  );
  const data = await response.json();
  return data;
}

const port = 3000;
app.listen(port, () => {
  console.log(`Denne kjører på port ${port}`);
});
