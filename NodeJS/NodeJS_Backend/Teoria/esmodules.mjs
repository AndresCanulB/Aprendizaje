// Con Ecma Script modules se importa con import from

// Se puede importar el default y desestructurar a la vez
import math, { add, substract, multiply, divide } from "./math.mjs";

console.log(add(1, 2));
console.log(substract(1, 2));
console.log(multiply(1, 2));
console.log(divide(1, 2));
console.log(math.add(1, 2));
