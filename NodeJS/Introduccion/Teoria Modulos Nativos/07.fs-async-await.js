const fs = require("node:fs/promises"); // Se agrega /promises para utilizar file system con promesas

// Para resolver el problema de usar await afuera de un async function, se utilizan IIFE
// Una IIFE es una funcion anonima que se ejecuta cuando se crea, se utiliza crear un ambito privado y no ensuciar el ambito global
// IIFE - Inmediatly Invoked Function Expression
// (() => {})();

// Uno de sus usos principales era justamente: Mantener limpio el ámbito global
// Antes de que existieran: import/export, módulos ESModules, let y const
// Todo se declaraba con var, y eso contaminaba el scope global.
// Entonces se hacía esto:
// (function () {
//   var nombre = "Juan";
//   console.log(nombre);
// })();
// console.log(nombre); // Error
// La variable nombre queda encapsulada dentro de la función.
// Por qué funcionaba?, porque en JavaScript: var tiene scope de función, no de bloque. Entonces el IIFE creaba un scope privado.

// El caso MÁS común hoy: async IIFE
// Porque await solo funciona dentro de async.
// Entonces mucha gente hace:
// (async () => {
//   const result = await fs.readFile("archivo.txt", "utf-8");
//   console.log(result);
// })();
// Especialmente en: Node.js scripts, pruebas rápidas y snippets

// Para utilizar IIFE se necesita usar ; en el archivo

(async () => {
  console.log("Leyendo el primer archivo...");

  const text = await fs.readFile("./archivo1.txt", "utf-8");
  console.log(text);

  console.log("Hacer cosas mientras lee el archivo...");

  console.log("Leyendo el segundo archivo...");

  const secondText = await fs.readFile("./archivo2.txt", "utf-8");
  console.log(secondText);
})();
