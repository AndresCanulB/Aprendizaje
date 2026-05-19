/*
Clase 24 - Ejercicios: Condicionales
Vídeo: https://youtu.be/1glVfFxj8a4?t=8652
*/

// if/else/else if/ternaria

// 1. Imprime por consola tu nombre si una variable toma su valor

let var1 = "Andres"

if (var1 == "Andres") {
    console.log("Tu nombre es Andres")
}

// 2. Imprime por consola un mensaje si el usuario y contraseña concide con unos establecidos

let user = "user"
let password = "password"

if (user === "user" && password === "password") {
    console.log("Credenciales correctos")
}

// 3. Verifica si un número es positivo, negativo o cero e imprime un mensaje

let number = 1

if (number > 0) {
    console.log("El numero es positivo")
}else if (number === 0) {
    console.log("El numero es 0")    
}else{
    console.log("El numero es negativo")
}

// 4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuántos años le faltan

let edad = 17
let diferencia = 18 - edad

if (edad >= 18) {
    console.log("Es mayor de edad")
}else{
    console.log(`Es menor de edad, le faltan ${diferencia} años`)
}

// 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable
//    dependiendo de la edad 

let madurez = edad >= 18 ? "adulto" : "menor"

console.log(madurez)

// 6. Muestra en que estación del año nos encontramos dependiendo del valor de una variable "mes"

let mes = "Enero"
let estacion

if (mes.includes("Diciembre") || mes.includes("Enero") || mes.includes("Febrero")) {
    estacion = "Invierno"
} else if (mes.includes("Marzo") || mes.includes("Abril") || mes.includes("Mayo")) {
    estacion = "Primavera"
} else if (mes.includes("Junio") || mes.includes("Julio") || mes.includes("Agosto")) {
    estacion = "Verano"
} else if (mes.includes("Septiembre") || mes.includes("Octubre") || mes.includes("Noviembre")){
    estacion = "Otoño"
} else{
    estacion = "Mes introducido no valido"
}

console.log(estacion)

// 7. Muestra el número de días que tiene un mes dependiendo de la variable del ejercicio anterior
// switch

let dias

if (mes.includes("Enero") || mes.includes("Marzo") || mes.includes("Mayo") || mes.includes("Julio") || mes.includes("Agosto") || mes.includes("Octubre") || mes.includes("Diciembre")) {
    dias = 31
} else if (mes.includes("Abril") || mes.includes("Junio") || mes.includes("Septiembre") || mes.includes("Noviembre")) {
    dias = 30
} else if (mes.includes("Febrero")) {
    dias = 28
} else{
    estacion = "Mes introducido no valido"
}

console.log(`El mes ${mes} tiene ${dias} dias`)

// 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma

let idioma = "Español"
let mensaje

switch(idioma){
    case "Español":
        mensaje = "Bienvenido usuario, espero que estes teniendo un buen dia"
        break
    case "Ingles":
        mensaje = "Welcome user, I hope you are having a good day"
        break
    case "Frances":
        mensaje = "Bienvenue utilisateur, j'espère que vous passez une bonne journée"
        break
    case "Japones":
        mensaje = "ようこそユーザーさん、良い一日を過ごしていることを願っています"
        break
    case "Chino":
        mensaje = "欢迎用户，希望你今天过得愉快"
        break
    case "Aleman":
        mensaje = "Willkommen Benutzer, ich hoffe, Sie haben einen guten Tag"
        break
    default:
        mensaje = "El idioma no existe"
}

console.log(mensaje)

// 9. Usa un switch para hacer de nuevo el ejercicio 6

switch(mes){
    case "Enero":
        estacion = "Invierno"
        break
    case "Febrero":
        estacion = "Invierno"
        break
    case "Marzo":
        estacion = "Primavera"
        break
    case "Abril":
        estacion = "Primavera"
        break
    case "Mayo":
        estacion = "Primavera"
        break
    case "Junio":
        estacion = "Verano"
        break
    case "Julio":
        estacion = "Verano"
        break
    case "Agosto":
        estacion = "Verano"
        break
    case "Septiembre":
        estacion = "Otoño"
        break
    case "Octubre":
        estacion = "Otoño"
        break
    case "Noviembre":
        estacion = "Otoño"
        break
    case "Diciembre":
        estacion = "Invierno"
        break
    default:
        estacion = "Mes introducido no valido"
}

console.log(estacion)

// 10. Usa un switch para hacer de nuevo el ejercicio 7

switch(mes){
    case "Enero":
        dias = 31
        break
    case "Febrero":
        dias = 28
        break
    case "Marzo":
        dias = 31
        break
    case "Abril":
        dias = 30
        break
    case "Mayo":
        dias = 31
        break
    case "Junio":
        dias = 30
        break
    case "Julio":
        dias = 31
        break
    case "Agosto":
        dias = 31
        break
    case "Septiembre":
        dias = 30
        break
    case "Octubre":
        dias = 31
        break
    case "Noviembre":
        dias = 30
        break
    case "Diciembre":
        dias = 31
        break
    default:
        dias = "Mes introducido no valido"
}

console.log(`El mes ${mes} tiene ${dias} dias`)