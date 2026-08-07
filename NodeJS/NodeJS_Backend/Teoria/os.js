const os = require("node:os");

console.log(os.userInfo()); // Informacion del usuario
console.log(os.uptime()); // Tiempo que lleva encendido el ordenador
console.log(os.platform()); // Plataforma en la que se esta ejecutando el programa
console.log(os.freemem()); // Memoria libre
console.log(os.totalmem()); // Memoria total
console.log(os.cpus()); // Informacion de la CPU
console.log(os.networkInterfaces()); // Informacion de las interfaces de red
console.log(os.homedir()); // Directorio del usuario
console.log(os.tmpdir()); // Directorio temporal

console.table({
  userInfo: os.userInfo(),
  uptime: os.uptime(),
  platform: os.platform(),
  freemem: os.freemem(),
  totalmem: os.totalmem(),
  cpus: os.cpus(),
  networkInterfaces: os.networkInterfaces(),
  homedir: os.homedir(),
  tmpdir: os.tmpdir(),
});
