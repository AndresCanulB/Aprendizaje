(() => {
  // En TypeScript son colecciones de pares clave-valor que agrupan propiedades y métodos relacionados.

  // Son la base para modelar entidades del mundo real.

  // Para agregar una propiedad opcional se debe agregar un '?' al nombre de la propiedad.

  // Los tipos de datos en objetos se agregan asi: nombre: {tipos} = {valores}

  // A diferencia de las funciones, en los objetos no importa el orden de las propiedades.
  let flash: { name: string; age?: number; powers: string[]; getName?: () => string } = {
    name: "Barry Allen",
    age: 24,
    powers: ["Súper velocidad", "Viajar en el tiempo"]
  };

  // flash = {
  //   name: "Clark Kent",
  //   // age: 60,
  //   powers: ["Súper fuerza", "Invulnerabilidad"],
  //   getName() {
  //     return this.name;
  //   }
  // };

  let superman: { name: string; age?: number; powers: string[]; getName?: () => string } = {
    name: "Clark Kent",
    // age: 60,
    powers: ["Súper fuerza", "Invulnerabilidad"]
  };
})();
