const express = require("express");

const app = express();

// El request se puede ver como un documento que llega al servidor
// Este documento tiene diferentes partes
// URL - Direccion del recurso (endpoint)
// Metodo - GET, POST, PUT, DELETE
// Headers - Informacion adicional
// Body - Datos (es el cuerpo de la peticion)

// El response tambien tiene la misma estructura
// Endpoint - Direccion del recurso
// Headers - Informacion adicional y el status code
// Body - Datos (es el cuerpo de la respuesta)

// Express no entiende el contenido que envia el cliente
// Por eso usamos app.use(express.text()); para que Express entienda el texto
app.use(express.text());

// Por eso usamos app.use(express.json()); para que Express entienda el json
app.use(express.json());

// Por eso usamos app.use(express.urlencoded()); para que Express entienda el form-urlencoded
// extended: false significa que no se pueden enviar archivos
// extended: true significa que se pueden enviar archivos
app.use(express.urlencoded({ extended: false }));

app.post("/user", (req, res) => {
  // .body nos permite ver el cuerpo de la peticion del cliente
  // Express no entiende el contenido que envia el cliente
  console.log(req.body);
  res.send("Nuevo usuario creado");
});

app.listen(3000, () => {
  console.log("Server is running on port http://localhost:3000");
});
