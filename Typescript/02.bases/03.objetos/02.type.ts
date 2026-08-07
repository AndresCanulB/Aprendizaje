(() => {
  // Un type (alias de tipo) es una forma de darle un nombre reutilizable a una estructura de tipos.

  type Hero = {
    name: string;
    age?: number;
    powers: number[];
    getName?: () => string;
  };

  // Al usar type, podemos reutilizar el alias en diferentes objetos.

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

  // Regla general:

  // Usa type cuando necesites uniones o tipos complejos.

  // Usa interface para modelar objetos/clases que puedan extenderse.
})();
