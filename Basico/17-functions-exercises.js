/*
Clase 32 - Ejercicios: Funciones
Vídeo: https://youtu.be/1glVfFxj8a4?t=14146
*/

// NOTA: Explora diferentes sintaxis de funciones para resolver los ejercicios

// 1. Crea una función que reciba dos números y devuelva su suma

function sum(a, b) {
  return a + b;
}

console.log(sum(5, 5));

// 2. Crea una función que reciba un array de números y devuelva el mayor de ellos

function findHigher(newArray) {
  let higher = 0;
  for (let value of newArray) {
    if (value > higher) {
      higher = value;
    }
  }
  return higher;
}

console.log(findHigher([2, 5, 20, 50, 30, 10, 234, 124, 24]));

// 3. Crea una función que reciba un string y devuelva el número de vocales que contiene

const newFunc = (newString) => {
  return newString.length;
};

console.log(newFunc("Hola como estas?"));

// 4. Crea una función que reciba un array de strings y devuelva un nuevo array con las strings en mayúsculas

function upperCase(newString) {
  return newString.toUpperCase();
}

console.log(upperCase("hola como estas?"));

// 5. Crea una función que reciba un número y devuelva true si es primo, y false en caso contrario

function primeNumber(number) {
  if (number % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

console.log(primeNumber(5));

// 6. Crea una función que reciba dos arrays y devuelva un nuevo array que contenga los elementos comunes entre ambos

function innerJoin(firstArray, secondArray) {
  if (!(firstArray.length === 0 || secondArray.length === 0)) {
    let newArray = [];
    for (let value of firstArray) {
      if (secondArray.includes(value)) {
        newArray.push(value);
      }
    }
    return newArray;
  }
  return "Se ha introducido una lista vacia";
}

console.log(
  innerJoin(
    [3, 6, 2, 6, 8, 35, 12, 53, 5, 234],
    [2, 324, 67, 4, 25, 24, 5, 3, 5, 6, 7, 3, 1, 4, 7, 8],
  ),
);

console.log(innerJoin([], [6, 2, 68, 35]));

// 7. Crea una función que reciba un array de números y devuelva la suma de todos los números pares

function sumArray(newArray) {
  let newSum = 0;
  for (let value of newArray) {
    if (value % 2 === 0) {
      newSum += value;
    }
  }
  return newSum;
}

console.log(
  sumArray([2, 4, 5, 6, 7, 2, 14, 54, 15, 124, 68, 233, 55, 29, 215]),
);

// 8. Crea una función que reciba un array de números y devuelva un nuevo array con cada número elevado al cuadrado

function exponentialArray(newArray) {
  let exponentialArray = [];
  for (let value of newArray) {
    exponentialArray.push(value ** 2);
  }
  return exponentialArray;
}

console.log(exponentialArray([2, 5, 49, 13, 29, 4, 9, 21, 12, 1]));

// 9. Crea una función que reciba una cadena de texto y devuelva la misma cadena con las palabras en orden inverso

// Letras
function reverseString(newString) {
  let reverseString = "";
  for (let i = newString.length - 1; i >= 0; i--) {
    reverseString += newString[i];
  }
  return reverseString;
}

console.log(reverseString("Hola como estas?"));

// Palabras
function reverseWords(newString) {
  let reverseArray = newString.split(" ");
  let reverseWords = reverseArray.reverse();
  return reverseWords.join(" ");
}

console.log(reverseWords("Hola como estas?"));

// 10. Crea una función que calcule el factorial de un número dado

function factorial(newNumber) {
  let factorial = 1;
  for (let i = 1; i <= newNumber; i++) {
    factorial *= i;
  }
  return factorial;
}

console.log(factorial(5));
