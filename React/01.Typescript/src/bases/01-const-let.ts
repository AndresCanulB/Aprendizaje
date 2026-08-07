// Si usamos const, el tipo de dato sera inmutable
const firstName = "Fernando";

// Si usamos let, el tipo de dato sera mutable al tipo de dato que agregamos
let lastName: string = "Herrera";

let diceNumber = 5;
diceNumber = 3;

// Ahora podremos inspeccionar los metodos, los tipos de datos de los argumentos y el tipo de dato del retorno
const containsLetterH = lastName.includes("H");

console.log({ containsLetterH, diceNumber, firstName, lastName });
