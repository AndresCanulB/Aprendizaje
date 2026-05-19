/*
Clase 45 - Ejercicios: Módulos
Vídeo: https://youtu.be/1glVfFxj8a4?t=22720
*/

// 4. Importa una función

import { yourName } from "./31-modules-exercises.js";

yourName("Yustin");

// 5. Importa una constante

import { pi } from "./31-modules-exercises.js";

console.log(pi);

// 6. Importa una clase

import { MyClass } from "./31-modules-exercises.js";

let newClass = new MyClass("Jorge", 48);

// 8. Importa una función, una constante y una clase por defecto (en caso de que lo permita)

import defaultFunction from "./31-modules-exercises.js";

defaultFunction("Fabricio");

// 10. Importa una función, una constante y una clase desde un directorio diferente al anterior

import defaultSubstract from "./28-export-modules.js";

console.log(defaultSubstract(3, 1));
