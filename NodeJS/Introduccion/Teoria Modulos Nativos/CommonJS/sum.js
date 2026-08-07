// Patron de diseño Modulo, se utiliza para separar el codigo en diferentes ficheros y poderlos importar y exportar para que el codigo se reutilice

function sum (a,b){
    return a + b
}

// CommonJS require module es el sistema clasico antiguo de Modulos de NodeJS

// module.exports = sum; La variable se puede llamar como sea

module.exports = {sum}; // Se exporta un objeto, y cuando se importa las propiedes deben tener el mismo nombre