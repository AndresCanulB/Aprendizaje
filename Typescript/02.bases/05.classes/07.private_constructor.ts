(() => {
  // Es un constructor marcado con private, lo que impide que la clase sea instanciada directamente desde fuera de ella misma con new.

  // Su uso más común es implementar el patrón de diseño Singleton

  // Garantiza que solo exista una única instancia de la clase en toda la aplicación.

  class Apocalipsis {
    static instance: Apocalipsis;

    private constructor(public name: string) {
      console.log("El apocalipsis ha comenzado");
    }

    static callApocalipsis(): Apocalipsis {
      if (!Apocalipsis.instance) {
        Apocalipsis.instance = new Apocalipsis("Apocalipsis el unico");
      }

      return Apocalipsis.instance;
    }

    changeName(name: string): void {
      this.name = name;
    }
  }

  const apocalipsis = Apocalipsis.callApocalipsis();

  apocalipsis.changeName("Xavier");

  // const apocalipsis1 = new Apocalipsis("Apocalipsis el unico");
})();

/*

(() => {
  Un constructor privado impide instanciar la clase directamente con "new"
  Su uso principal es el patrón Singleton

  class Singleton {
    La única instancia se guarda aquí (estática y privada)

    private static instance: Singleton;
    
    El constructor es privado: nadie puede hacer "new Singleton()" desde fuera
    private constructor(public name: string) {
      console.log("Instancia creada");
    }
    
    Método estático que controla el acceso a la única instancia
    static getInstance(name: string): Singleton {
      if (!Singleton.instance) {
        Singleton.instance = new Singleton(name); // Solo se crea UNA vez
      }
      return Singleton.instance;
    }
  }

  ❌ Esto causaría un ERROR:

  const s = new Singleton("Error");

  ✅ Así se obtiene la instancia:

  const instance1 = Singleton.getInstance("Primera");
  const instance2 = Singleton.getInstance("Segunda"); // No crea otra, devuelve la misma
  console.log(instance1 === instance2); // true ✅ Son la misma instancia
  console.log(instance1.name);          // "Primera"
  console.log(instance2.name);          // "Primera" (no cambia)
})();

⚙️ ¿Cuándo usar un constructor privado?

Singleton:	Garantizar una sola instancia (ej. conexión a BD, configuración global)

Factory Method:	Controlar cómo y cuándo se crean objetos mediante métodos estáticos

Clases de utilidad:	Clases con solo métodos estáticos que no deben instanciarse

*/
