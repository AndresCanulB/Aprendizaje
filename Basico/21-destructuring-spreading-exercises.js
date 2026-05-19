/*
Clase 36 - Ejercicios: Desestructuración y propagación
Vídeo: https://youtu.be/1glVfFxj8a4?t=16802
*/

// 1. Usa desestructuración para extraer los dos primeros elementos de un array

let newArray = [0, 1, 3];

let [number0, number1] = newArray;

console.log(number0, number1);

// 2. Usa desestructuración en un array y asigna un valor predeterminado a una variable

let [number3, number4, number5, number6 = 4] = newArray;

console.log(number3, number4, number5, number6);

// 3. Usa desestructuración para extraer dos propiedades de un objeto

let newObject = {
  string: "Texto",
  number: 23,
  boolean: false,
};

let { string, number } = newObject;

console.log(string, number);

// 4. Usa desestructuración para extraer dos propiedades de un objeto y asígnalas a nuevas variables con nombres diferentes

let { string: otherString, number: otherNumber } = newObject;

console.log(otherString, otherNumber);

// 5. Usa desestructuración para extraer dos propiedades de un objeto anidado

let person3 = {
  name: "Brais",
  age: 37,
  alias: "MoureDev",
  walk: function () {
    console.log("La persona camina.");
  },
  job: {
    name: "Programador",
    exp: 15,
    work: function () {
      console.log(`La persona de ${this.age} años de experiencia trabaja.`);
    },
  },
};

let {
  walk,
  job: { exp },
} = person3;

walk();

console.log(exp);

// 6. Usa propagación para combinar dos arrays en uno nuevo

let firstArray = [0, 1, 2, 3, 4];

let secondArray = [5, 6, 7, 8, 9];

let thirdArray = [...firstArray, ...secondArray];

console.log(thirdArray);

// 7. Usa propagación para crear una copia de un array

let originalArray = [0, 1, 2, 3, 4];

let copyArray = [...originalArray];

console.log(copyArray);

// 8. Usa propagación para combinar dos objetos en uno nuevo

let firstObject = {
  string: "Texto",
};

let secondObject = {
  number: 23,
  boolean: false,
};

let thirdObject = { ...firstObject, ...secondObject };

console.log(thirdObject);

// 9. Usa propagación para crear una copia de un objeto

let originalObject = {
  string: "Texto",
  number: 23,
  boolean: false,
};

let copyObject = { ...originalObject };

console.log(copyObject);

// 10. Combina desestructuración y propagación

let otherObject = {};

let { string: text, number: age } = (otherObject = { ...originalObject });

console.log(text, age);
