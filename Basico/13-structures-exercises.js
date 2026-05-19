/*
Clase 28 - Ejercicios: Estructuras
Vídeo: https://youtu.be/1glVfFxj8a4?t=11451
*/

// 1. Crea un array que almacene cinco animales

let myArray = ["perro", "gato", "pez", "lobo", "girafa"]
console.log(myArray)

// 2. Añade dos más. Uno al principio y otro al final

myArray.unshift("vaca")
myArray.push("leon")
console.log(myArray)

// 3. Elimina el que se encuentra en tercera posición

myArray.splice(2, 1)
console.log(myArray)

// 4. Crea un set que almacene cinco libros

let mySet = new Set(["Harry Potter", "Game of Thrones", "The walking dead", "Breaking Bad", "The Soprano"])
console.log(mySet)

// 5. Añade dos más. Uno de ellos repetido

mySet.add("The Hobbit")
mySet.add("Harry Potter")
console.log(mySet)

// 6. Elimina uno concreto a tu elección

mySet.delete("The walking dead")
console.log(mySet)

// 7. Crea un mapa que asocie el número del mes a su nombre

let myMap = new Map([
    [1, "Enero"],
    [2, "Febrero"],
    [3, "Marzo"],
    [4, "Abril"],
    [5, "Mayo"],
    [6, "Junio"],
    [7, "Julio"],
    [8, "Agosto"],
    [9, "Septiembre"],
    [10, "Octubre"],
    [11, "Noviembre"],
    [12, "Diciembre"]
])

console.log(myMap)

// 8. Comprueba si el mes número 5 existe en el map e imprime su valor

if (myMap.has(5)) {
    console.log(myMap.get(5))
}

// 9. Añade al mapa una clave con un array que almacene los meses de verano

let summer = ["Junio", "Julio", "Agosto"]
myMap.set("Verano", summer)
console.log(myMap)

// 10. Crea un Array, transfórmalo a un Set y almacénalo en un Map

let myList = [1, 2, 3, 4]
let numbers = new Set(myList)

let myNewMap = new Map([
    ["numbers", numbers]
])

console.log(myNewMap)