const http = require("node:http");
const fs = require("node:fs");

const port = process.env.PORT ?? 3040;

// Debemos descriminar aspectos de nuestra API para que responda correctamente a lo que necesitamos
// Ya que el navegador puede hacer muchas req a la vez y presentar fenomenos extraños
// Al ejecutar console.log("request received", req.url);
// Dara como resultado dos veces el console.log
// request received /
// request received /favicon.ico

// HTTP: Hyper Text Transfer Protocol / Protocolo de transferencia de hipertexto
// Es un protocolo para transmitir informacion

// Request (Peticion) -> Url, Headers, Method(Get, Post, Put, Delete), Body
// Headers: Es la informacion que va en la peticion para darle mas contexto

// Response (Respuesta) -> StatusCode, Headers, Body

// Codigos de error de StatusCode
// 100-199 -> Respuestas informativas
// 200-299 -> Respuestas satisfactorias
// 300=399 -> Redirecciones
// 400-499 -> Errores del cliente (En el request)
// 500-599 -> Errores del servidor (En el response)

// Status Codes Tipicos
// 200 -> Ok
// 301 -> Moved Permanently
// 400 -> Bad request
// 404 -> Not found
// 500 -> Internal Server Error / El mas peligroso

const processRequest = (req, res) => {
  res.statusCode = 200; // StatusCode por defecto es el 200
  if (req.url === "/") {
    res.setHeader("Content-Type", "text/plain; charset=utf-8"); // El header es de gran importancia ya que permite cambiar el comportamiento de la respuesta
    res.end("Bienvenido a mi pagina de inicio");
  } else if (req.url === "/image") {
    fs.readFile("./bird.png", (error, data) => {
      if (error) {
        res.statusCode = 500;
        res.end("<h1>500 Internal Server Error</h1>");
      } else {
        res.setHeader("Content-Type", "image/png"); // Se va a servir una imagen
        res.end(data);
      }
    });
  } else if (req.url === "/contacto") {
    res.setHeader("Content-Type", "text/html; charset=utf-8"); // El header es de gran importancia ya que permite cambiar el comportamiento de la respuesta
    res.end("<h1>Contacto</h1>");
  } else {
    res.statusCode = 404; // Not Found
    res.setHeader("Content-Type", "text/html; charset=utf-8"); // El header es de gran importancia ya que permite cambiar el comportamiento de la respuesta
    res.end("<h1>404</h1>");
  }
};

const server = http.createServer(processRequest);

server.listen(port, () => {
  console.log(`server listening on port http://localhost:${port}`);
});

// Usar comando para recargar el fichero con los cambios como en Nodemon
// node --watch fichero

// Cuando no se puede ejecutar NodeJS en powershell, ejecutar este comando:
// Set-ExecutionPolicy RemoteSigned -Scope CurrentUser
