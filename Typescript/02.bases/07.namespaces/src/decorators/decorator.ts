// Un decorador es una funcion que se ejecuta en el momento de transpilacion del codigo.

// Se usa con el símbolo @

// Se aplica sobre una clase, método, propiedad o parámetro para añadirle comportamiento extra sin modificar su código interno.

// Sintaxis básica:

/*
@miDecorador
class MiClase {
  @decoradorDePropiedad
  nombre: string;
  @decoradorDeMetodo
  saludar() { ... }
}
*/

// Decorador de clase

// El decorador recibe el constructor de la clase
function Sellado(constructor: Function) {
  Object.seal(constructor);
  Object.seal(constructor.prototype);
  console.log("Clase sellada:", constructor.name);
}
@Sellado
class Hero {
  constructor(public name: string) {}
}

// @Sellado se ejecuta automáticamente cuando se define la clase, no cuando se instancia.

// Decorador de método (muy común)

function Log(target: any, key: string, descriptor: PropertyDescriptor) {
  const metodoOriginal = descriptor.value;
  descriptor.value = function (...args: any[]) {
    console.log(`Llamando a: ${key} con`, args);
    const resultado = metodoOriginal.apply(this, args);
    console.log(`Resultado:`, resultado);
    return resultado;
  };
  return descriptor;
}

class Calculadora {
  @Log
  sumar(a: number, b: number) {
    return a + b;
  }
}
const calc = new Calculadora();
calc.sumar(3, 4);
// → Llamando a: sumar con [3, 4]
// → Resultado: 7

/*

Dónde se usan más?

Los decoradores son muy populares en frameworks como:

Angular → @Component, @Injectable, @Input
NestJS → @Controller, @Get, @Body
TypeORM → @Entity, @Column

Nota: En TypeScript 5+ los decoradores ya forman parte del estándar (TC39 Stage 3), pero la sintaxis legacy sigue requiriendo experimentalDecorators: true.

*/
