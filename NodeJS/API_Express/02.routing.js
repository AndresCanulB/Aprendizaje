const http = require("node:http");

// Metodos HTTP

// Get: Para recuperar datos
// Post: Para guardar datos
// Put: Para modificar los datos
// Patch: Para modificar un solo dato
// Delete: Para eliminar datos
// Head: Para recuperar la cabecera de respuesta sin el body (Usado para verificar permisos)
// Options: Describe las opciones de comunicacion del recurso objetivo (Permite ver los modos de comunicacion, para solucionar CORS)

const processRequest = (req, res) => {
  const { method, url } = req;

  switch (method) {
    case "GET":
      switch (url) {
        case "/pokemon/ditto":
          res.setHeader("Content-Type", "application/json; charset=utf-8");
          return res.end(JSON.stringify(dittoJSON));
        default:
          res.statusCode = 404;
          res.setHeader("Content-Type", "text/html; charset=utf-8");
          return res.end("<h1>404</h1>");
      }

    case "POST":
      switch (url) {
        case "/pokemon": {
          let body = "";

          /*
          let body = "{
          "name": "ditto",
          "type": "normal",
          "moves": ["transform"]}"
          */

          // Escuchar el evento data
          // Chunk es un trozo de la data
          req.on("data", (chunk) => {
            // Mientras la request esta recibiendo informacion, cada trozo la estara guardando en body
            body += chunk.toString(); // chunk, el trozo es un buffer, por ello se debe convertir en string
          });

          // NodeJS esta basado en eventos, entonces nos dira el evento cuando termino
          req.on("end", () => {
            const data = JSON.parse(body);
            // llamar a una base de datos para guardar la info
            res.writeHead(201, {
              // Otro metodo para crear la cabecera
              "Content-Type": "application/json; charset=utf-8",
            });

            data.timestamp = Date.now(); // Se usa para saber cuando se ha creado el recurso
            res.end(JSON.stringify(data));
          });

          break;
        }

        default:
          res.statusCode = 404;
          res.setHeader("Content-Type", "text/plain; charset=utf-8");
          return res.end("404 Not Found");
      }
  }
};

const server = Http2ServerResponse.createServer(processRequest);

server.listen(1234, () => {
  console.log("Server listening on port http://localhost:1234");
});
