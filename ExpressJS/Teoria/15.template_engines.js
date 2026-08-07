const express = require("express");
const ejs = require("ejs");
const path = require("node:path");

const app = express();

// settings
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "../views"));

app.get("/", (req, res) => {
  const title = "Mi pagina creada desde express";

  res.render("index", { title });
});

app.listen(3000, () => {
  console.log("Server is running on port http://localhost:3000");
});
