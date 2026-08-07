(() => {
  // Una interfaz es un contrato que define la estructura que debe tener un objeto.

  // Describe qué propiedades y métodos debe tener, sin implementar la lógica.

  // Una interface es expandible, puede ser modificada. A diferencia del type que no puede ser modificado.

  interface Hero {
    name: string;
    age?: number;
    powers: number[];
    getName?: () => string;
  }

  let flash: Hero = {
    name: "Barry Allen",
    age: 24,
    powers: [1, 2]
  };

  let superman: Hero = {
    name: "Clark Kent",
    age: 60,
    powers: [1],
    getName() {
      return this.name;
    }
  };
})();

/*

Usos de las interfaces:

- Estructurar objetos: Siempre que necesites tipar un objeto.

- Parámetros de funciones: Para garantizar los datos de entrada.

- Respuestas de API: Al consumir servicios externos.

- Contratos de clases: Con implements.

- Herencia: Con extends.

Caractertisticas de las interfaces:

- Tipado estricto: Garantizan que los objetos tengan la forma esperada.

- Autocompletado: El editor sugiere las propiedades disponibles.

- Reutilización: Se pueden usar en múltiples lugares.

- Solo en desarrollo: Desaparecen en el JS compilado (no tienen costo en runtime).

---------------------------------------------------------------------------------------------------------------

Regla general: 

Usa interface cuando describes la forma de un objeto o clase, y type para tipos más complejos o combinaciones.

---------------------------------------------------------------------------------------------------------------

type vs interface vs class en TypeScript

🔵 interface — Contrato de forma
Solo existe en TypeScript (desaparece al compilar). Define qué propiedades/métodos debe tener un objeto.

interface Hero {
  name: string;
  powers: number[];
  getName?(): string;
}

🟣 type — Alias de tipo
Más flexible que interface. Puede representar objetos, uniones, primitivos, tuplas, etc.

type ID = string | number;           // Unión ✅
type Coordenada = [number, number];  // Tupla ✅
type Hero = {                        // Objeto ✅
  name: string;
  powers: number[];
};

🟢 class — Plano + Implementación
Existe en JavaScript. Define tanto la estructura como la lógica. Crea objetos reales con new.

class Hero {
  name: string;
  powers: number[];
  constructor(name: string, powers: number[]) {
    this.name = name;
    this.powers = powers;
  }
  getName(): string {
    return this.name;
  }
}
const flash = new Hero("Barry Allen", [1, 2]); // Instancia real

-------------------------------------------------------------------------------------------------

¿Cuándo usar cada uno?

- ¿Necesitas crear objetos con new y lógica?  → class

- ¿Describes la forma de un objeto/clase?     → interface

- ¿Necesitas uniones, tuplas o algo complejo? → type

*/
