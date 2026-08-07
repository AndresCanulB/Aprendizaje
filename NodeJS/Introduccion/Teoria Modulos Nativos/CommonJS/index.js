console.log("Hola, mundo");
console.info("Informacion");
console.error("Error");

// console.log(window) Error, window no existe en NodeJS, no existe el objeto global window

// En el explorador la variable globalThis apunta a window, en NodeJS globalThis apunta a global, lo correcto siempre es usar globalThis

console.log(globalThis); // Lo correcto es usar globalThis para acceder al objeto global

// Todo lo que es global proviene del globalThis, es el motivo por el cual podemos usar console.log() y otras cosas...

// Patron de diseño Modulo, se utiliza para separar el codigo en diferentes ficheros y poderlos importar y exportar para que el codigo se reutilice

// CommonJS require module es el sistema clasico antiguo de Modulos de NodeJS

// const sum = require("./sum") La variable se puede llamar como sea

// En CommonJS las extensiones no son obligatorias en los ficheros al importar
const {sum} = require("./sum") // Se importa un objeto, las propiedades deben llamarse igual a como se importa

console.log(sum(1, 2));