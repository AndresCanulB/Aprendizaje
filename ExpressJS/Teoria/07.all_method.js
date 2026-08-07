const express = require("express");

const app = express();

// el metodo all me va a permitir trabajar con cualquier peticion que coincida con la ruta
// y me va a permitir ejecutar cualquier metodo
// Si en vez de GET se pone ALL cualquier metodo funcionara
app.all("/info", (req, res) => {
  res.send("Server Info");
});

app.listen(3000, () => {
  console.log("Server is running on port http://localhost:3000");
});
