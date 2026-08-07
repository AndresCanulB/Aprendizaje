(() => {
  //

  class Avenger {
    static avgAge: number = 35;
    static getAvgAge(): string {
      return this.name; // Retorna el nombre de la clase - Avenger
    }

    constructor(
      private name: string,
      public team: string,
      public realName?: string
    ) {}

    // Un metodo es una funcion que pertenece a una clase.

    // Se define usando la palabra reservada function dentro de la clase.

    // Los metodos pueden acceder a las propiedades de la instancia usando this.

    // Se pueden usar modificadores de acceso para controlar el acceso a los metodos.

    // Cuando no se agregar un modificador de acceso por defecto es public.
    private bio() {
      return `${this.name} (${this.realName}) pertenece al equipo de los ${this.team}`;
    }
  }

  const antman: Avenger = new Avenger("Ant-Man", "Avengers", "Hank Pym");

  console.log(antman);
})();
