// const fs = require("node:fs");
// Version con Callbacks
// .readdir se utiliza para leer el directorio
// fs.readdir(".", (error, files) => {
//   if (error) {
//     console.error("Error al leer el directorio: ", error);
//     return;
//   }
//   files.forEach((file) => {
//     console.log(file);
//   });
// });

// Version con promesas
const fs = require("node:fs/promises");

fs.readdir(".")
  .then((files) => {
    files.forEach((file) => {
      console.log(file);
    });
  })
  .catch((error) => {
    console.error("Error al leer el directorio: ", error);
    return;
  });
