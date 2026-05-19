/*
Clase 18 - Ejercicios: primeros pasos
Vídeo: https://youtu.be/1glVfFxj8a4?t=4733
*/

// 1. Escribe un comentario en una línea

// Comentario

// 2. Escribe un comentario en varias líneas

/*
Esto
es un
comentario
*/

// 3. Declara variables con valores asociados a todos los datos de tipo primitivos

let name = "Andres"
let number = 2
let decimal = 1.5
let boolean = false
let myVar
let mySymbol = Symbol("mysymbol")
let myNull = null
let myBigint = BigInt(423423234892392382904238490289292483948329483249282)

// 4. Imprime por consola el valor de todas las variables

console.log(name)
console.log(number)
console.log(decimal)
console.log(boolean)
console.log(myVar)
console.log(mySymbol)
console.log(myNull)
console.log(myBigint)

// 5. Imprime por consola el tipo de todas las variables

console.log(typeof name)
console.log(typeof number)
console.log(typeof decimal)
console.log(typeof boolean)
console.log(typeof myVar)
console.log(typeof mySymbol)
console.log(typeof myNull)
console.log(typeof myBigint)

// 6. A continuación, modifica los valores de las variables por otros del mismo tipo

name = "Juan"
number = 5
decimal = 3.6
boolean = true
myVar = undefined
mySymbol = Symbol("othersymbol")
myNull = null
myBigint = BigInt(58239058239058238239523859032853029832904823423483942034324)

// 7. A continuación, modifica los valores de las variables por otros de distinto tipo

name = 8
number = "Andres"
decimal = "Hola"
boolean = BigInt(4832423948234234382942348294494923432849239423849234293432)
myVar = 2.5
mySymbol = false
myNull = undefined
myBigint = null

// 8. Declara constantes con valores asociados a todos los tipos de datos primitivos

const greetings = "Hello World"
const numbers = 343
const otherVar = undefined
const otherBoolean = true
const symbol = Symbol("const")
const otherNull = null
const bigInt = 239423489234823094823094832493284329048204829042340932409320943248023n

// 9. A continuación, modifica los valores de las constantes

// greetings = "Hello"
// numbers = 34
// otherVar = true
// otherBoolean = false
// symbol = Symbol("pepe")
// otherNull = 8
// bigInt = 535934950439050345340593405423424324234234832424294832942348234234238523523583285n

// 10. Comenta las líneas que produzcan algún tipo de error al ejecutarse