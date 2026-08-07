// Un generic es una forma de escribir código reutilizable que funciona con cualquier tipo, sin perder la seguridad de tipos que ofrece TypeScript.

// import { Hero } from "../interfaces";
// import { Villain } from "../interfaces";

// Se puede agrupar las importaciones creando un archivo index.ts en la carpeta con todas las exportaciones que queremos importar.
import { Hero, Villain } from "../interfaces";

// No se debe usar 'any' porque se pierde la seguridad de tipos
export const printObject = (argument: any) => {
  console.log(argument);
};

// Se usa en estructuras de datos
// Puede recibir parametros y retornar valores de distintos tipos
//<T> es una variable de tipo
export function genericFunction<T>(argument: T): T {
  return argument;
}

export const genericFunctionArrow = <T>(argument: T) => argument;

// Regla general:
// Si necesitas flexibilidad de tipos, usa generics en lugar de any.

console.log(genericFunction(3.1416).toFixed(2));
console.log(genericFunction("hola").toUpperCase());
console.log(genericFunction(new Date()).getDate());

const deadPool = {
  name: "Deadpool",
  realName: "Wade Winston Wilson",
  dangerLevel: 130
};

// Pasamos el tipo de dato que queremos usar en el generic <Hero>
console.log(genericFunctionArrow<Hero>(deadPool).realName);
