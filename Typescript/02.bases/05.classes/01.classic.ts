(() => {
  // Una clase es una plantilla o molde para crear objetos.

  // Define las propiedades (datos) y métodos (comportamientos) que tendrán los objetos creados a partir de ella.

  // TypeScript extiende las clases de JavaScript añadiendo tipado estático, modificadores de acceso y otras características de POO.

  // Con la herencia las clases pueden heredar de otras usando extends

  // Constructor: Método especial que se ejecuta al crear una nueva instancia de la clase

  class Avenger {
    private name: string;
    public team: string;
    public realName: string;
    static avgAge: number = 35;

    constructor(name = "No name", team = "0", realName?: string) {
      this.name = name;
      this.team = team;
      this.realName = realName;
    }
  }

  const antman: Avenger = new Avenger("Ant-Man", "Avengers", "Hank Pym");

  console.log(antman);
})();

// Características clave en TypeScript

// public: Accesible desde cualquier lugar (por defecto)

// private: Solo accesible dentro de la clase

// protected: Accesible en la clase y sus subclases

// readonly: Solo lectura, no se puede modificar

// static: Pertenece a la clase, no a las instancias

// Getters y setters: Métodos especiales para acceder y modificar propiedades
