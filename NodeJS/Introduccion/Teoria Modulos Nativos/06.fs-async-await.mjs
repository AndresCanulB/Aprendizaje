import { readFile } from "node:fs/promises"; // Se agrega /promises para utilizar file system con promesas

// Metodo de como no usar async-await, ya que para usar await debe estar dentro de un async function
// Puede funcionar usando ES Modules, agregando .mjs al fichero, pero no es la forma correcta de trabajar

// Asincrono secuencial
// El problema de esta forma, es que aunque sea asincrono se ejecuta secuencialmente
console.log("Leyendo el primer archivo...");
const text = await readFile("./archivo1.txt", "utf-8"); // Primero se ejecuta este await y se bloquea esperando
console.log(text);

console.log("Hacer cosas mientras lee el archivo..."); // Sigue ejecutando codigo

console.log("Leyendo el segundo archivo...");
const secondText = await readFile("./archivo2.txt", "utf-8"); // Luego finalmente se ejecuta este await y se bloquea esperando
console.log(secondText);

// ES Modules si tienen el soporte de poder usar await en el ambito global
// A este fenomeno se le llama top level await
