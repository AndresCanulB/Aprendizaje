(() => {

    // Enums es un tipo de dato que permite darle nombres a conjuntos de valores

    // Los enums se utilizan para agrupar valores que tengan un sentido semantico, visualmente facil de leer

    // Son útiles para representar opciones fijas como estados, direcciones, niveles, etc.

    enum AudioLevel {
        min = 1,
        medium,
        max = 10,
    }

    let currentAudio:AudioLevel = AudioLevel.max;

    
    console.log( currentAudio );
    console.log( AudioLevel );


})()


/*

Ejemplos:

Enum de String
Cada miembro tiene un valor de texto explícito:

enum Direction {
    Up    = "UP",
    Down  = "DOWN",
    Left  = "LEFT",
    Right = "RIGHT",
}

let move: Direction = Direction.Up;
console.log(move); // "UP"


Enum const (optimizado)
Se elimina en la compilación y se reemplaza por los valores directamente (mejor rendimiento):

const enum Status {
    Active   = "ACTIVE",
    Inactive = "INACTIVE",
}

let user = Status.Active; // En JS queda: let user = "ACTIVE";

¿Cuándo usar Enums?

✅Estados de un proceso: Pending, Active, Closed

✅Niveles o categorías: Low, Medium, High

✅Opciones fijas de una UI: Dark, Light

✅Reemplazar "magic numbers": 1, 2, 10 → min, medium, max

¿Cuándo NO usar Enums?

❌Variables con valores dinámicos

❌Valores que cambiarán constantemente

❌Campos dentro de un objeto

❌Cuando puedes usar un objeto normal

*/