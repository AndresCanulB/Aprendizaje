const fs = require("node:fs");

// fs.readFileSync: Lee el contenido de un archivo de forma sincrónica
// fs.writeFileSync: Escribe el contenido de un archivo de forma sincrónica

const first = fs.readFileSync("./data/first.txt", "utf8"); // utf8 es para que el archivo se lea como texto, si no se especifica, se lee como buffer
const second = fs.readFileSync("./data/second.txt", "utf8");

console.log(first);
console.log(second.toString()); // toString() convierte el buffer en string

const title = "Este es el contenido de otro archivo creado con fs.writeFileSync";

// Para agregar contenido a un archivo existente, se puede usar el flag 'a' (append)

fs.writeFileSync("./data/fourth.txt", title, { flag: "a" }); // flag se usa para agregar opciones
