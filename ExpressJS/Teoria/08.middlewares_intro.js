const express = require("express");

const app = express();

// los middlewares son funciones que se ejecutan antes de que una peticion llegue al servidor
// se pueden usar para validar datos, autenticacion, autorizacion, etc

// Un logger es una funcion que muestra informacion sobre la peticion
// function logger(req, res, next) {
//   console.log("Logger");
//   next(); // next() es una funcion que permite pasar la peticion al siguiente middleware
// }

// .use permite aplicar un middleware a todas las peticiones
// app.use(logger);

app.use((req, res, next) => {
  console.log(`Peticion recibida: ${req.method} ${req.url} at ${new Date().toISOString()}`);
  next();
});

app.get("/profile", (req, res) => {
  res.send("Profile page");
});

app.all("/about", (req, res) => {
  res.send("About page");
});

app.listen(3000, () => {
  console.log("Server is running on port http://localhost:3000");
});
