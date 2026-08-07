
// fs File System (Sistemas de archivos, muy importante)

const fs = require("node:fs") // A partir de NodeJS 16, se recomienda usar : al importar modulos nativos

// NodeJS es monohilo, solo tiene un proceso y esta basado en eventos

// Sincrono

const stats = fs.statSync("./archivo.txt") // Obtener las estadisticas del archivo

console.log(
    stats.isFile(), // Si es un fichero
    stats.isDirectory(), // Si es un directorio
    stats.isSymbolicLink(), // Si es un enlace simbolico
    stats.size, // Tamaño en bytes
)