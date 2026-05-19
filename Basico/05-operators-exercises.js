/*
Clase 20 - Ejercicios: Operadores
Vídeo: https://youtu.be/1glVfFxj8a4?t=6458
*/

// 1. Crea una variable para cada operación aritmética

let suma = 2+2
let resta = 2-2
let division = 2/2
let multiplicacion = 2*2
let modulo = 2%2
let exponente = 2**2

// 2. Crea una variable para cada tipo de operación de asignación,
//    que haga uso de las variables utilizadas para las operaciones aritméticas

suma += 2
resta -= 2
division /= 2
multiplicacion *= 2
modulo %= 2
exponente **= 2

// 3. Imprime 5 comparaciones verdaderas con diferentes operadores de comparación

console.log(20 > 10)
console.log(5 < 10)
console.log(4 === 4)
console.log(4 !== 5)
console.log(null == undefined)

// 4. Imprime 5 comparaciones falsas con diferentes operadores de comparación

console.log(5 <= 2)
console.log(10 >= 45)
console.log("5" === 5)
console.log(4 !== 4)
console.log(false === true)

// 5. Utiliza el operador lógico and

console.log(50 >= 40 && 5 == "5")

// 6. Utiliza el operador lógico or

console.log(20 <= 60 || null === undefined)

// 7. Combina ambos operadores lógicos

console.log(200 >= 100 && 4 === "4" || false == 0)

// 8. Añade alguna negación

console.log(!true)

// 9. Utiliza el operador ternario

let isOpen = true
isOpen ? console.log("Esta abierto") : console.log("Esta cerrado")

// 10. Combina operadores aritméticos, de comparáción y lógicas

console.log(2 ** 10 <= 40 && !(2 === "2") || true == null)