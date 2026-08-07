const path = require("node:path");

const windowsPath = "c:\\Users\\Administrador\\Downloads\\archivo.txt";
const linuxPath = "/home/Administrador/Downloads/archivo.txt";

// Es importante saber que separador de rutas maneja el OS, porque los sistemas operativos manejan rutas de forma diferente
// Linux y MacOS usan /
// Windows usa \

// En windows para poder manejar paths es necesario usar \\ para que no se interprete como un caracter de escape

// En desarrollo en un OS Windows se puede usar \, pero en produccion no, porque el servidor puede usar Linux con un separador /

// Para evitar problemas con los separadores de rutas, se puede usar path.join() o path.resolve()

console.log(path.sep); // Muestra el separador de rutas
console.log(path.join("folder", "subfolder", "file.txt")); // Une rutas
console.log(path.resolve("folder", "subfolder", "file.txt")); // Resuelve rutas
console.log(path.basename("folder/subfolder/file.txt")); // Obtiene el nombre del archivo
console.log(path.dirname("folder/subfolder/file.txt")); // Obtiene el directorio del archivo
console.log(path.extname("folder/subfolder/file.txt")); // Obtiene la extension del archivo
console.log(path.parse("folder/subfolder/file.txt")); // Convierte la ruta en un objeto
