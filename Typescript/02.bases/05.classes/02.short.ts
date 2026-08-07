(() => {
  // En typescript se puede acortar el constructor.

  // Las propiedades se pueden declarar desde el constructor con el modificador de acceso.

  class Avenger {
    // Las propiedades estaticas siempre van afuera del constructor porque pertenecen a la clase y no a las instancias.
    static avgAge: number = 35;

    // En el constructor se declaran las propiedades y se les asigna el modificador de acceso.
    constructor(
      // El modificador de acceso private hace que la propiedad sea privada.
      private name: string,
      // El modificador de acceso public hace que la propiedad sea publica.
      public team: string,
      // El modificador de acceso ? hace que la propiedad sea opcional.
      public realName?: string
    ) {}
  }

  const antman: Avenger = new Avenger("Ant-Man", "Avengers", "Hank Pym");

  console.log(antman);
})();
