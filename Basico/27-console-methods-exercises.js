/*
Clase 43 - Ejercicios: Console
Vídeo: https://youtu.be/1glVfFxj8a4?t=21421
*/

// 1. Crea un función que utilice error correctamente

console.error("Esto es un error");

// 2. Crea una función que utilice warn correctamente

console.warn("Estos es una advertencia");

// 3. Crea una función que utilice info correctamente

console.info("Esto es un mensaje de informacion");

// 4. Utiliza table

let newData = [
  { fullName: "Juan", age: 43 },
  { fullName: "Lucia", age: 62 },
];

console.table(newData);

// 5. Utiliza group

console.group("Esto es el primer grupo");
console.log("Mensaje 1");
console.log("Mensaje 2");
console.log("Mensaje 3");
console.groupEnd;

// 6. Utiliza time

console.time("time");

for (let i = 0; i < 20000; i++) {}

console.timeEnd("time");

// 7. Valida con assert si un número es positivo

function assertNumber(number) {
  console.assert(number < 0, "El numero es positivo");
}

assertNumber(2);

// 8. Utiliza count

let count = 0;
while (count < 20) {
  console.count("count");
  count++;
}

// 9. Utiliza trace

function mult(num1, num2) {
  let num3 = sum(num1, num2);
  console.trace("Seguimiento del proceso");
  return num1 * num2 * num3;
}

function sum(num1, num2) {
  return num1 + num2;
}

console.log(mult(2, 4));

// 10. Utiliza clear

console.clear();
