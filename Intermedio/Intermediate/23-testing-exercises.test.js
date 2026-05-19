/*
Clase 82 - Testing
Vídeo: https://youtu.be/iJvLAZ8MJ2E?t=26946
*/

// import { isEven } from "./23-testing-exercises.js"; se necesitan mas configuraciones con EcmascryptModules
const isEven = require("./23-testing-exercises.js");

// 2. Escribe una prueba en Jest para verificar que la función funciona correctamente

test("El numero 2 debe ser primo", () => {
  expect(isEven(2)).toBe(true);
});

// 3. Verifica que la prueba se ejecuta satisfactoriamente
