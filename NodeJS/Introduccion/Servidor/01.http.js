// http es un modulo nativo para hacer procesos y conexiones con el protocolo http
// Para crear un servidor http y poder recibir request y respuestas
const http = require("node:http");

// Un servidor puede recibir una peticion o devolver una respuesta
// Se utilizara un callback para gestionar las request y respuestas
const server = http.createServer((req, res) => {
  // El console.log() se ejecuta en la terminal del proyecto, no se ejecuta en la consola del navegador
  console.log("request received");
  res.end("Hola mundo");
});

// Se abribra un puerto para que el servidor pueda escuchar
// Se crea otro callback para cuando el servidor empiece a escuchar
server.listen(3000, () => {
  console.log("server listening on port 3000");
});

// Truco: Al usar como parametro el puerto 0, buscara cualquier puerto disponible
// server.listen(0, () => {
//   console.log(`server listening on port ${server.address().port}`);
// });

// Truco: Al agregar http://localhost:puerto se convertira en un enlace que direccionara al servidor
// server.listen(0, () => {
//   console.log(
//     `server listening on port http://localhost:${server.address().port}`,
//   );
// });

// Estos trucos no son recomendables para produccion, pero en desarrollo puede ser una buena idea
