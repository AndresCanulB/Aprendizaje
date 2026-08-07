// Patron de diseño Modulo, se utiliza para separar el codigo en diferentes ficheros y poderlos importar y exportar para que el codigo se reutilice

export function sum (a,b){ // En ES Modules se usa export para exportar las funciones
    return a + b
}

export function sub (a,b){
    return a - b
}

export function mult (a,b){
    return a * b
}

// ES Module es la forma oficial de exportar ficheros que se encuentra en la especificacion