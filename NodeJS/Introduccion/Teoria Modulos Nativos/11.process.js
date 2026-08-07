// Global object process
// Es un objeto global que proporciona informacion y control sobre el proceso actual de ejecucion
// Tiene propiedades y metodos que permiten interactuar con el entorno de ejecucion de NodeJS y da informacion relacionada con el proceso de ejecucion actual

// Argumentos de entrada al ejecutar un comando
console.log(process.argv); // .argv son los argumentos que se reciben en la linea de comandos

// Controlar el proceso y su salida
// process.exit(0); // Significa que todo salio bien
// process.exit(1); // Significa que sucedio un error

//  Podemos controlar eventos del proceso
process.on("exit", () => {
  // Limpiar los recursos o la consola como ejemplo
});

// Current working directory
console.log(process.cwd()); // Nos dice en que carpeta estamos ejecutando el proceso

// platform
console.log(process.env.NODE_ENV); // Obtener variables de entorno
