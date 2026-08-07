// Modulo nativo para trabajar con el path
const path = require("node:path");
// Con path se puede:
// Construir nuevas rutas de archivos
// Saber si un archivo tiene una extension
// Recuperar una extension
// Crear rutas absolutas

// Forma de no crear rutas:
// `./content/subfolder/test.txt`; // X
// No se hace de esta forma porque no funciona en diferentes sistemas operativos
// -> Unix /
// -> Windows \
console.log(path.sep); // Barra separadora de carpetas segun SO

// Unir rutas absolutas con path.join correctamente
const filePath = path.join("content", "subfolder", "test.xt");
console.log(filePath);

const fichero = path.basename("/tmp/midu-secret-files/password.txt"); // Conocer el nombre del fichero con extension
console.log(fichero);

const nombreFichero = path.basename(
  "/tmp/midu-secret-files/password.txt",
  ".txt",
); // Conocer el nombre del fichero sin extension
console.log(nombreFichero);

// El path.extname es muy utilizado
const extension = path.extname("my.super.image.jpg"); // Se utiliza para saber la extension del fichero
console.log(extension);
