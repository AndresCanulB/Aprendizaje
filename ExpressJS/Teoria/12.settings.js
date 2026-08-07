const express = require("express");

const app = express();

// Los settings son configuraciones que se pueden hacer en express
// Funcionan como variables internas de express
// Se pueden establecer con app.set()
// Se pueden obtener con app.get()
app.set("appName", "Express Course");
app.set("PORT", process.env.PORT || 3000);
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

// Establece la configuracion para que la ruta sea sensible a mayusculas y minusculas
app.set("case sensitive routing", true);

// La jerarquia es:
// Settings
// Middlewares
// Rutas

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

app.listen(app.get("PORT"), () => {
  console.log(`Server ${app.get("appName")} is running on port http://localhost:${app.get("PORT")}`);
});
