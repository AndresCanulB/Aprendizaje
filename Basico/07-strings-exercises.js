/*
Clase 22 - Ejercicios: Strings
Vídeo: https://youtu.be/1glVfFxj8a4?t=7226
*/

// 1. Concatena dos cadenas de texto

console.log("Hola de nuevo" + "usuario")

// 2. Muestra la longitud de una cadena de texto

let texto = "Andres"
console.log(texto.length)

// 3. Muestra el primer y último carácter de un string

console.log(texto[0], texto[5])

// 4. Convierte a mayúsculas y minúsculas un string

console.log(texto.toUpperCase(), texto.toLocaleLowerCase())

// 5. Crea una cadena de texto en varias líneas

console.log(`Bienvenido 
    de nuevo 
    ${texto}`)

// 6. Interpola el valor de una variable en un string

let edad = 12

console.log(`Tu edad es ${edad}`)

// 7. Reemplaza todos los espacios en blanco de un string por guiones

let otroTexto = "Este es un texto"

console.log(otroTexto.replaceAll(" ", "-"))

// 8. Comprueba si una cadena de texto contiene una palabra concreta

let contenido = "Este texto contiene la palabra aguacate"

console.log(contenido.includes("aguacate"))

// 9. Comprueba si dos strings son iguales

let var1 = "Texto"
let var2 = "Texto"

console.log(var1 === var2)

// 10. Comprueba si dos strings tienen la misma longitud

console.log(var1.length === var2.length)