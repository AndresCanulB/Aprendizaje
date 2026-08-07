(() => {
  // Las clases abstractas son clases que no pueden ser instanciadas directamente.

  // Sirven como plantillas o contratos para que otras clases hereden de ellas y estén obligadas a implementar ciertos métodos.

  // Se marcan con la palabra reservada abstract

  // Los metodos abstractos no tienen implementacion, solo la firma (nombre, parametros y tipo de retorno)

  // Las clases que heredan de una clase abstracta deben implementar todos los metodos abstractos

  abstract class Mutante {
    constructor(
      public name: string,
      public realName: string
    ) {
      console.log("Constructor Mutante llamado");
    }
  }

  class Xmen extends Mutante {
    salvarMundo() {
      return "Mundo a salvo";
    }
  }

  class Villain extends Mutante {
    destruirMundo() {
      return "Mundo destruido";
    }
  }

  const wolverine = new Xmen("Wolverine", "Logan");

  const magneto = new Villain("Magneto", "Erik Lehnsherr");

  console.log(wolverine.salvarMundo());
  console.log(magneto.destruirMundo());

  // Se puede usar el tipo de la clase abstracta para saber sus propiedades y metodos
  const printName = (character: Mutante) => {
    console.log(character.name);
  };

  printName(wolverine);
  printName(magneto);
})();

// Se puede declarar el tipo clase Mutante
// let wolverine: Mutante;

/*

🔑 Conceptos Clave

- abstract class: Define la clase como abstracta (no instanciable)

- abstract method: Método sin implementación que las subclases deben implementar

- Métodos normales: Pueden tener implementación y ser heredados normalmente

⚙️ ¿Cuándo usar clases abstractas?

Cuando quieres definir una estructura común para un grupo de clases relacionadas.

Cuando ciertas operaciones deben ser implementadas de forma diferente en cada subclase.

Como alternativa más poderosa a las interfaces cuando también necesitas compartir implementación.

*/
