const express = require("express");

const app = express();

app.get("./products", (req, res) => {
  res.send("Lista de productos");
});

// REST: Representational State Transfer

// Un cliente REST es una aplicacion que consume una API REST
// Un cliente REST puede ser un navegador, una aplicacion movil, otra API REST, etc
// Un cliente REST se comunica con una API REST a traves de peticiones HTTP
// Las peticiones HTTP son GET, POST, PUT, DELETE

app.post("./products", (req, res) => {
  // En este apartado se puede:
  // - Validar datos
  // - Una peticion a la base de datos
  // - Procesar datos
  // - Validar si un producto ya existe
  // - Validar si el usuario tiene permiso para crear un producto

  res.send("Creando producto");
});

app.put("./products/:id", (req, res) => {
  res.send("Actualizando productos");
});

app.patch("./products/:id", (req, res) => {
  res.send("Actualizando una parte del producto");
});

app.delete("./products/:id", (req, res) => {
  res.send("Eliminando productos");
});

app.listen(3000, () => {
  console.log("Server is running on port http://localhost:3000");
});
