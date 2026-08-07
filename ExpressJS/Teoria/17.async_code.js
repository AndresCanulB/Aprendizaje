const express = require("express");
const ejs = require("ejs");
const path = require("node:path");
const userRoutes = require("../routes/users");
const homeRoutes = require("../routes/home");

const app = express();

// settings
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "../views"));

app.use(homeRoutes);
app.use(userRoutes);

app.listen(3000, () => {
  console.log("Server is running on port http://localhost:3000");
});
