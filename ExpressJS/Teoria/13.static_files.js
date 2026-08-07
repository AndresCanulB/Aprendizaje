const express = require("express");
const path = require("node:path");

const app = express();

// Middlware de express para servir archivos estaticos
// Son archivos que no cambian
// app.use(express.static("./public"));

app.get("/note.txt", (req, res) => {
  res.send("Esto no es un archivo");
});

app.get("/", (req, res) => {
  res.send("<h1>Hello World</h1>");
});

app.get("/products", (req, res) => {
  res.send("Lista de productos");
});

// Es buena recomendacion agregar el express.static al final para que no choque con las rutas dinamicas

// Si movemos las carpetas public o uploads dentro de la carpeta src o app se deben utilizar path.join y __dirname para evitar errores con rutas relativas

// Se puede agregar un prefijo para que el archivo se sirva desde esa ruta
app.use("/public", express.static(path.join(__dirname, "./public")));

// Se pueden agregar dos carpetas estaticas diferentes en un mismo servidor
app.use("/uploads", express.static(path.join(__dirname, "./uploads")));

app.listen(3000, () => {
  console.log("Server is running on port http://localhost:3000");
});
