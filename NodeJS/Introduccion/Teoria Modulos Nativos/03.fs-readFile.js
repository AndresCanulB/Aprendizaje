// fs File System (Sistemas de archivos, muy importante)

const fs = require("node:fs"); // A partir de NodeJS 16, se recomienda usar : al importar modulos nativos

// Sincrono

// const text = fs.readFileSync("./archivo.txt") // Devuelve un buffer (Memoria con informacion y bytes)

// Problema de sincronia
// .readFileSync es sincrono

// console.log("Leyendo el primer archivo...");
// const text = fs.readFileSync("./archivo1.txt", "utf-8"); // Convierte a codificacion UTF-8 para que podamos entenderlo
// console.log(text);

// console.log("Hacer cosas mientras lee el archivo...");

// console.log("Leyendo el segundo archivo...");
// const secondText = fs.readFileSync("./archivo2.txt", "utf-8"); // Convierte a codificacion UTF-8 para que podamos entenderlo
// console.log(secondText);

// .readFile es el metodo asincrono para leer archivos

// Asincrono Callback

console.log("Leyendo el primer archivo...");
// .readFile trabaja con CallBacks
const text = fs.readFile("./archivo1.txt", "utf-8", (error, text) => {
  // Cuando se termine de ejecutar el CallStack, se ejecuta este callback
  console.log("Primer texto", text);
});

// Sigue ejecutando el CallStack en el Event Loop

console.log("Hacer cosas mientras lee el archivo...");

console.log("Leyendo el segundo archivo...");
const secondText = fs.readFile("./archivo2.txt", "utf-8", (error, text) => {
  console.log("Segundo texto:", text);
});
