const express = require("express");

const app = express();

// REST: Representational State Transfer
// API REST: Representational State Transfer Application Programming Interface
// Un cliente REST es una aplicacion que consume una API REST
// Un cliente REST puede ser un navegador, una aplicacion movil, otra API REST, etc
// Un cliente REST se comunica con una API REST a traves de peticiones HTTP
// Las peticiones HTTP son GET, POST, PUT, DELETE

// API: Application Programming Interface
// Un API es un conjunto de reglas y protocolos que permiten la comunicacion entre diferentes aplicaciones

// URL: Uniform Resource Locator
// Un URL es una direccion que permite identificar un recurso en la web
// Ejemplos de URL: https://www.google.com, https://www.github.com, etc

app.get("/products", (req, res) => {
  res.send("Lista de productos");
});

app.post("/products", (req, res) => {
  res.send("Creando producto");
});

app.put("/products/:id", (req, res) => {
  res.send("Actualizando productos");
});

app.delete("/products/:id", (req, res) => {
  res.send("Eliminando productos");
});

app.listen(3000, () => {
  console.log("Server is running on port http://localhost:3000");
});
