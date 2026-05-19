/*
Clase 30 - Ejercicios: Bucles
Vídeo: https://youtu.be/1glVfFxj8a4?t=12732
*/

// NOTA: Explora diferentes sintaxis de bucles para resolver los ejercicios

// 1. Crea un bucle que imprima los números del 1 al 20

for (let i = 1; i <= 20; i++){
    console.log(i)
}

// 2. Crea un bucle que sume todos los números del 1 al 100 y muestre el resultado

let suma = 0

for (let i = 1; i <= 100; i++){
    console.log(`${i} + ${suma} = ${suma += i}`)
}

// 3. Crea un bucle que imprima todos los números pares entre 1 y 50

// Forma elegante
for (let i = 2; i <= 50; i += 2) {
    console.log(i);
}

// Forma humilde
for (let i = 1; i <= 50; i++){
    if (i % 2 === 0) {
        console.log(`El numero ${i} es par`)        
    }else{
        console.log(`El numero ${i} es impar`) 
    }
}

// 4. Dado un array de nombres, usa un bucle para imprimir cada nombre en la consola

let myArray = ["Juan", "Sebastian", "Andrey", "Carlos", "Enrique", "Ivan"]

for (let i = 0; i < myArray.length; i++){
    console.log(myArray[i])
}

// 5. Escribe un bucle que cuente el número de vocales en una cadena de texto

let texto = "Hola a todos"
let vocales = 0

for (let i = 0; i < texto.length; i++){
    if ("aeiou".includes(texto.charAt(i).toLowerCase())) {
        vocales++
    }
}

console.log(`El texto tiene ${vocales} vocales`)

// 6. Dado un array de números, usa un bucle para multiplicar todos los números y mostrar el producto

let numeros = [45, 20, 50, 14, 48, 95, 30]
let producto = 1

for (let i = 0; i < numeros.length; i++){
    producto *= numeros[i]
}

console.log(`La multiplicacion de los numeros ${numeros} es: ${producto}`)

// 7. Escribe un bucle que imprima la tabla de multiplicar del 5

for (let i = 0; i <= 10; i++){
    console.log(`5 x ${i} = ${i * 5}`)
}

// 8. Usa un bucle para invertir una cadena de texto

let string = "Esto es una cadena de texto"
let newString = ""

for(let i = string.length; i >= 0; i--){
    newString = newString + string.charAt(i)
}

console.log(newString)

// 9. Usa un bucle para generar los primeros 10 números de la secuencia de Fibonacci

let firstNumber = 0
let secondNumber = 1
let sum = 0

for (let i = 0; i < 10; i++){
    console.log(`Secuencia Fibonacci: ${firstNumber}`)
    sum = firstNumber + secondNumber
    firstNumber = secondNumber
    secondNumber = sum
}

// 10. Dado un array de números, usa un bucle para crear un nuevo array que contenga solo los números mayores a 10

let oldArray = [0, 4, 6, 3, 50, 120, 53, 94, 10, 21]
let newArray = []

for (let i = 0; i < oldArray.length; i++){
    if(oldArray[i] > 10){
        newArray.push(oldArray[i])
    }
}

console.log(newArray)