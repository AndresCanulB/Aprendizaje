// Modulos de NodeJS

// Modulo nativo de NodeJS para acceder al sistema operativo
// const os = require("os") forma antigua

const os = require("node:os") // Usar control punto (Ctrl + .) en los tres puntos ... se puede convertir rapidamente de require a import

console.log("Informacion del sistema operativo:")
console.log("-------------------------------------------------")
console.log("Nombre del sistema operativo: ", os.platform()) // Plataforma del OS
console.log("Version del sistema operativo: ", os.version()) // Version del OS
console.log("Arquitectura: ", os.arch()) // Arquitectura del OS
console.log("CPUs: ", os.cpus()) // Procesadores del OS // <-- Vamos a poder escalar procesos en NodeJS
console.log("Memoria libre: ", os.freemem()) // Memoria libre del OS
console.log("Memoria total: ", os.totalmem()) // Memoria total del OS
console.log("Memoria libre en megas: ", os.freemem() / 1024 / 1024) // Memoria libre del OS en megas 
console.log("memoria total en megas: ", os.totalmem() / 1024 / 1024) // Memoria total del OS en megas 
console.log("Uptime: ", os.uptime() / 60 / 60) // Comando para saber cuanto el PC estuvo encendidos