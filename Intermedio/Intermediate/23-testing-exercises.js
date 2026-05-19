/*
Clase 82 - Testing
Vídeo: https://youtu.be/iJvLAZ8MJ2E?t=26946
*/

// 1. Crea una función isEven(number) que devuelva true si el número es par y false si es impar

function isEven(number) {
  let result;
  number % 2 === 0 ? (result = true) : (result = false);
  return result;
}

module.exports = isEven;
