const express = require("express");

const app = express();

// En HTTP un concepto llamado params que funcionan como parametros en una funcion
// Pueden ser opcionales y obligatorios
// Los parametros opcionales se marcan con ?
// Los parametros obligatorios se marcan con :

app.get("/hello/:name", (req, res) => {
  res.send(`Hello ${req.params.name}`);
});

app.get("/add/:x/:y", (req, res) => {
  const sum = parseInt(req.params.x) + parseInt(req.params.y);
  res.send(`The sum of ${req.params.x} and ${req.params.y} is ${sum}`);
});

// Se puede desestructurar los valores de la URL y seria el mismo resultado

// app.get("/add/:x/:y", ({ params: { x, y } }, res) => {
//   res.send(`Result: ${parseInt(x) + parseInt(y)}`);
// });

// Los parametros pueden ir en diferentes lugares de la URL
app.get("/user/:userName/photo", (req, res) => {
  if (req.params.userName === "John") {
    return res.sendFile("bird.png", {
      root: "./archives",
    });
  }
  res.send(`Photo of ${req.params.userName}`);
});

app.get("/username/:userName/age/:age", (req, res) => {
  res.send(`Username: ${req.params.userName}, Age: ${req.params.age}`);
});

app.listen(3000, () => {
  console.log("Server is running on port http://localhost:3000");
});
