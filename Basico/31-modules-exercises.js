/*
Clase 45 - Ejercicios: Módulos
Vídeo: https://youtu.be/1glVfFxj8a4?t=22720
*/

// 1. Exporta una función

export function yourName(name) {
  console.warn(`Este es tu nombre: ${name}`);
}

// 2. Exporta una constante

export const pi = Math.PI;

// 3. Exporta una clase

export class MyClass {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

// 7. Exporta una función, una constante y una clase por defecto (en caso de que lo permita)

export default function defaultName(name) {
  console.warn(`Este es tu nombre: ${name}`);
}

// export default const defaultPi = PI; // No se puede

// export default class DefaultClass {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
// }

// 9. Exporta una función, una constante y una clase desde una carpeta

import importName from "./exportModule/exportModule.js";

importName("Alvaro");
