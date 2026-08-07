const express = require("express");
const path = require("node:path");

const app = express();

// Routing es el proceso de determinar que respuesta enviar a un cliente que ha hecho una peticion a una URL determinada
// Se usa para crear multiples rutas

// Express router es un modulo de express que permite crear rutas modulares
// Se usa para organizar el codigo y hacerlo mas mantenible

// Se importan las rutas
const homeRoutes = require("./routes/home");
const userRoutes = require("./routes/users");

// Se usa un middleware con app.use() para montar el router
// Se puede pasar un prefijo para que el router se monte en esa ruta absoluta
app.use(homeRoutes);
app.use("/users", userRoutes);

app.use("/public", express.static(path.join(__dirname, "./public")));
app.use("/uploads", express.static(path.join(__dirname, "./uploads")));

app.listen(3000, () => {
  console.log("Server is running on port http://localhost:3000");
});
