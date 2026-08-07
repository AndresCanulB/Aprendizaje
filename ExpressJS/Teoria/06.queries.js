const express = require("express");

const app = express();

// Las queries son parametros que van en la URL pero no son obligatorios
// Se marcan con ? y se separan por &
// Ejemplo: http://localhost:3000/products?category=electronics&price=100
// En una URL el %20 significa un espacio

app.get("/search", (req, res) => {
  if (req.query.q === "javascript books") {
    res.send("Lista de libros ded javascript");
  } else {
    res.send("Pagina normal");
  }
});

app.get("/products", (req, res) => {
  console.log(req.query.user); // Se obtienen los datos de las queries en la URL
  console.log(req.query.age);
  res.send("Products");
});

app.listen(3000, () => {
  console.log("Server is running on port http://localhost:3000");
});
