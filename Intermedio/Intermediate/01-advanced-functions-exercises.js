/*
Clase 12 - Funciones avanzadas
Vídeo: https://youtu.be/iJvLAZ8MJ2E?t=4112
*/

// 1. Crea una función que retorne a otra función

function firstFunction(text, number) {
  console.log("Se ha retornado esta funcion con los parametros:", text, number);
}

function secondFuntion() {
  return firstFunction;
}

const returnFunction = secondFuntion();

returnFunction("Nombre", 3);

// 2. Implementa una función currificada que multiplique 3 números

// Mi solucion correcta
function curryMultiply(a) {
  return function (b) {
    console.log(a * b);
    return function (c) {
      console.log(a * b * c);
    };
  };
}

const multiplier = curryMultiply(2);
multiplier(2)(3);
multiplier(5);

// Una función currificada correcta:
function correctMultiply(a) {
  return function (b) {
    return function (c) {
      return a * b * c;
    };
  };
}

// 3. Desarrolla una función recursiva que calcule la potencia de un número elevado a un exponente

// Mi solucion correcta
function expontialCalculator(a, n) {
  // Caso base
  if (n <= 1) {
    return a; // Cuando el exponente llegue a menos 1, empezará a devolver el valor desde el final hasta el comienzo
  }
  return a * expontialCalculator(a, n - 1); // Condicion
}

console.log(expontialCalculator(2, 8));

// Solucion matematica correcta
function exponentialMath(a, n) {
  if (n === 0) {
    return 1;
  }
  return a * exponentialCalculator(a, n - 1);
}

// 4. Crea una función createCounter() que reciba un valor inicial y retorne un objeto con métodos para increment(), decrement() y getValue(), utilizando un closure para mantener el estado

function createCounter(value) {
  return (newObject = {
    increment: function () {
      value++;
    },
    decrement: function () {
      value--;
    },
    getValue: function () {
      console.log(`El valor es: ${value}`);
    },
  });
}

const counter = createCounter(4);

counter.increment();
counter.increment();
counter.decrement();
counter.getValue();

// 5. Crea una función sumManyTimes(multiplier, ...numbers) que primero sume todos los números (usando parámetros Rest) y luego multiplique el resultado por multiplier

function sumManyTimes(multiplier, ...numbers) {
  let result = 0;
  for (let number of numbers) {
    result += number;
  }
  result *= multiplier;
  return result;
}

console.log(sumManyTimes(4, 3, 4, 5, 6, 6, 9));

// 6. Crea un Callback que se invoque con el resultado de la suma de todos los números que se le pasan a una función

function sum(...numbers) {
  let result = 0;
  for (let number of numbers) {
    result += number;
  }
  return result;
}

function processSum(callback, ...numbers) {
  const result = sum(...numbers);
  callback(result);
}

function printSum(result) {
  console.log(`El resultado es: ${result}`);
}

processSum(printSum, 1, 2, 3, 4, 5);

// 7. Desarrolla una función parcial

function multiplier(...numbers) {
  let result = 1;
  for (let number of numbers) {
    result *= number;
  }
  return result;
}

function partialMultiplier(a) {
  return function (b, c) {
    return multiplier(a, b, c);
  };
}

const multiplyFor = partialMultiplier(5);
console.log(multiplyFor(4, 8));

// 8. Implementa un ejemplo que haga uso de Spread

let data = [1, 3, 4, 5];

let info = [...data, 6, 7, 8];

console.log(info);

// 9. Implementa un retorno implícito

const sum = (a, b, c) => a + b + c;

console.log(sum(2, 5, 9));

// 10. Haz uso del this léxico

let newObject = {
  objectName: "Luis",
  age: 29,
  greet: function () {
    console.log(`Hola ${this.objectName} esta es tu edad: ${this.age}`);
  },
};

newObject.greet();
