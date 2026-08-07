(()=> {

    // never representa valores que nunca ocurren. 

    // Se usa cuando una función jamás termina su ejecución normalmente — ya sea porque lanza un error, tiene un bucle infinito, o una rama de código que es imposible alcanzar.

    const error = ( message: string ):(never|number) => {

        if ( false ) {
            throw new Error(message) // Este bloque NUNCA se ejecuta
        }

        return 1; // Por eso el tipo de retorno es (never | number)
    }


    error('Auxilio!');
    console.log('Hola Mundo')
})()

/*

1. ✅ Funciones que siempre lanzan un error

function throwError(message: string): never {
    throw new Error(message); - Nunca retorna normalmente
}

2. ✅ Funciones con bucle infinito

function infiniteLoop(): never {
    while (true) {
        Nunca termina
    }
}

3. ✅ Exhaustive checks (verificación de casos imposibles)

Muy útil con switch para asegurarte de cubrir todos los casos de un enum o union type:
type Shape = "circle" | "square";

function getArea(shape: Shape): number {
    switch (shape) {
        case "circle":  return Math.PI * 5 * 5;
        case "square":  return 5 * 5;
        default:
            const _exhaustive: never = shape; - ❌ Error si falta un caso
            throw new Error(`Caso no manejado: ${shape}`);
    }
}

💡 Regla práctica

Usa never cuando quieras que TypeScript te garantice en tiempo de compilación que cierto código es inalcanzable o que una función nunca puede completarse exitosamente.

*/