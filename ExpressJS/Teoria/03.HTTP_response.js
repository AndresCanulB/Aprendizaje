const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hola Mundo");
});

app.get("/miarchivo", (req, res) => {
  res.sendFile("bird.png", {
    root: "./archives",
  });
});

app.get("/user", (req, res) => {
  res.json({
    name: "John",
    lastName: "Doe",
    age: 30,
  });
});

app.get("/isAlive", (req, res) => {
  res.sendStatus(204);
});

app.listen(3000, () => {
  console.log("Server is running on port http://localhost:3000");
});
