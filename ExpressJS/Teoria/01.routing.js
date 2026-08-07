const express = require("express");

const app = express();

// La funcion anonima se llama request handler y recibe 2 argumentos: request y response
// app.get("/", (req, res) => {
//   res.sendFile("index.html", { root: "./static" });
// });

// .send: le comunica al cliente que tipo de contenido esta enviando: texto, json, imagenes, etc
app.get("/", (req, res) => {
  res.send("Hello world");
});

app.get("/about", (req, res) => {
  res.send("About");
});

app.get("/weather", (req, res) => {
  res.send("The current weather is sunny");
});

// .use(): Middleware, se ejecuta para cualquier peticion que no haya sido manejada por las rutas anteriores
app.use((req, res) => {
  res.status(404).send("404 - Page not found");
});

app.listen(3000, () => {
  console.log("Server is running on port http://localhost:3000");
});
