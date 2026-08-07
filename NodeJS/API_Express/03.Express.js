// ExpressJS es un framework del entorno de ejecucion NodeJS
// Permite hacer aplicaciones web, apis
// Se utiliza por debajo en NextJS, NestJS y Webpack

// Para instalar ExpressJS utilizar este comando:
// npm install express -E
// Express es una dependencia de produccion por eso debe ir con -E

const express = require("express"); // Se importa Express
const ditto = require("./pokemon/ditto.json");
const path = require("path");

const PORT = process.env.PORT ?? 1234;

const app = express(); // Se crea la aplicacion con Express, en los parametros (), se pueden pasar opciones
app.disable("x-powered-by"); // Quitar de la cabecera del response x-powered-by Express ya que es un problema de seguridad



app.get("/", (req, res) => {
  res.status(200).send("<h1>Mi pagina</h1>"); // Express automaticamente detecta el content type correcto de lo que mandemos como respuesta
  res.json({ message: "Hola mundo" }); // Express con el metodo .json permite enviar como respuesta json convertido con stringify y con el content type correcto
});

// Las Middlewares pueden:
// Extraer cookies
// Validar si el usuario esta logeado
// Estraer informacion de un json
// Trackear la request a la base de datos
// Revisar si el usuario tiene cookies

// Las Middlewares se pueden configurar de la siguiente forma
// Si le agregamos una URL, significa que utilizara el middleware en esa URL
// Dependiendo de el metodo que agreguemos, se utilizara en ese tipo de metodos .use .get .post

// Un Middleware puede ir entre rutas o al final del codigo

// app.use("Url objetivo", (req, res, next) => { // Intento de middleware
//   if (req.method !== 'POST') return next()
//   if (req.headers['content-type'] !== 'application/json') return next()

//   // solo llegan request que son POST y que tienen el header Content-Type: application/json
//   let body = ''

//   // escuchar el evento data
//   req.on('data', chunk => {
//     body += chunk.toString()
//   })

//   req.on('end', () => {
//     const data = JSON.parse(body)
//     data.timestamp = Date.now()
//     // mutar la request y meter la información en el req.body
//     req.body = data
//     next() // Siempre se debe utilizar next() para que siga con el programa
//   })
// })

// Toda esta logica anterior, Express lo hace de forma nativa con:
app.use(express.json());

app.get("/pokemon/ditto", (req, res) => {
  res.json(ditto);
});

app.post("/pokemon", (req, res) => {
  // req.body deberíamos guardar en bbdd
  res.status(201).json(req.body);
});

// la última a la que va a llegar
app.use((req, res) => {
  // Solucion para que cualquier direccion URL que no exista entre en esta funcion
  res.status(404).send("<h1>404</h1>");
});

app.listen(PORT, () => {
  // Se levanta y escucha un puerto para que funcione la aplicacion
  console.log(`server listening on port http://localhost:${PORT}`);
});

// Un Middleware y Proxy pueden ser similares en el sentido de que estan interceptando
// Pero el Proxy lo que hace es orquestar y un Middleware ejecutar codigo
