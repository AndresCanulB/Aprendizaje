// Funcion declarativa
function greet(name: string): string {
  return `Hola ${name}`;
}

// Funcion expresiva
const greet2 = (name: string): string => `Hola ${name}`;

const message = greet("Goku");
const message2 = greet2("Vegeta");

// Los metodos son funciones que estan dentro de un objeto
console.log(message, message2);

interface User {
  uid: string;
  username: string;
}

function getUser(): User {
  return {
    uid: "ABC-123",
    username: "El_Papi23"
  };
}

// Cuando una arrow function solo tiene un unico retorno se puede simplificar en una sola linea
// Cuando se retorna un objeto, se debe envolver el objeto entre parentesis () para que TypeScript sepa que es un objeto y no el cuerpo de una funcion
// Se llama retorno implicito cuando no se usa la palabra reservada return y se envuelve el retorno entre parentesis ()
const getUser2 = (): User => ({ uid: "ABC-123", username: "El_Papi23" });

const user = getUser();
const user2 = getUser2();
console.log(user);
console.log(user2);

const myNumbers: number[] = [1, 2, 3, 4, 5];

// myNumbers.forEach(function (value) {
//   console.log({ value });
// });

// Funcion callback con arrow function
// Un Callback es una funcion anonima que usualmente se pasa como un argumento a un metodo
myNumbers.forEach((value) => console.log(value));

// Cuando se necesita imprimir todos los datos, se puede agregar directamente el console.log como parametro
// Esto funciona porque console.log es una funcion que espera un argumento y myNumbers.forEach es un metodo que pasa un argumento a cada elemento del array
myNumbers.forEach(console.log);
