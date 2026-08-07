// .js -> por defecto utiliza CommonJS
// .mjs -> para utilizar ES Module (EcmaScript Modules)
// .cjs -> para utilizar CommonJS

// En ES Modules en la especificacion es obligatorio trabajar con extensiones en los ficheros
import {sum, sub, mult} from "./sum.mjs" // En ES Modules se utiliza Import para importar los ficheros

// Con Webpack o Vite se resuelven las extensiones automaticamente al importar facilmente

console.log(sum(1,2))
console.log(sub(1,2))
console.log(mult(1,2))