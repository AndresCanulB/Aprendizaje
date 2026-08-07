const express = require("express");

const app = express();

app.use((req, res, next) => {
  console.log(`Peticion recibida: ${req.method} ${req.url} at ${new Date().toISOString()}`);
  next();
});

// Si la ruta esta antes del middleware, el middleware no se ejecutara
app.get("/about", (req, res) => {
  res.send("About page");
});

app.use((req, res, next) => {
  if (req.query.login === "azure") next();
  else res.send("No estas autorizado");
});

app.get("/dashboard", (req, res) => {
  res.send("Dashboard page");
});

// Si la ruta esta despues del middleware, el middleware se ejecutara
// exceptuando si la ruta tiene un parametro, en este caso el logger no se ejecutara
app.get("/users/:id", (req, res) => {
  res.send(`User page ${req.params.id}`);
});

app.listen(3000, () => {
  console.log("Server is running on port http://localhost:3000");
});
