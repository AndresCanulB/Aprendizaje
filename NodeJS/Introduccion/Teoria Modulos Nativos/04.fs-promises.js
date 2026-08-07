const fs = require("node:fs/promises"); // Se agrega /promises para utilizar file system con promesas

// Promesas

// Asincrono con promesas

console.log("Leyendo el primer archivo...");

fs.readFile("./archivo1.txt", "utf-8").then((text) => {
  console.log("Primer texto:", text);
});

// Sigue ejecutando el CallStack en el Event Loop

console.log("Hacer cosas mientras lee el archivo...");

console.log("Leyendo el segundo archivo...");

fs.readFile("./archivo2.txt", "utf-8").then((text) => {
  console.log("Segundo texto:", text);
});
