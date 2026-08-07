const fs = require("node:fs");
const { promisify } = require("node:util"); // Permite convertir modulos nativos a una version con promesas

const readFilePromise = promisify(fs.readFile); // Se convierte el modulo nativo que no tiene promesas nativas a una version con promesas

console.log("Leyendo el primer archivo...");

const text = fs.readFile("./archivo1.txt", "utf-8").then((text) => {
  console.log(text);
});

// Sigue ejecutando el CallStack en el Event Loop

console.log("Hacer cosas mientras lee el archivo...");

console.log("Leyendo el segundo archivo...");

const secondText = fs.readFile("./archivo2.txt", "utf-8").then((text) => {
  console.log(text);
});
