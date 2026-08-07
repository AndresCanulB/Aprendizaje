const fs = require("node:fs");

// fs.readFile("./data/first.txt", "utf-8", () => {
//   console.log("termino...");
// });

// La funcion anonima (error, data) es un callback que se ejecuta despues de leer el archivo

// Callback hell
// fs.readFile("./data/first.txt", "utf-8", (error, data) => {
//   if (error) {
//     console.log("Error al leer el archivo", error);
//   }
//   console.log(data);
//
//   fs.readFile("./data/second.txt", "utf-8", (error, data) => {
//     if (error) {
//       console.log("Error al leer el archivo", error);
//     }
//     console.log(data);
//
//     fs.writeFile("./data/newFile.txt", "Archivo creado desde fs", "utf-8", (error) => {
//       if (error) {
//         console.log("Error al escribir el archivo", error);
//       }
//       console.log("Archivo escrito exitosamente");
//     });
//   });
// });
