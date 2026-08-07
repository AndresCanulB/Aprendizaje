(() => {
  // Herencia en Typescript.
  // En typescript las clases pueden heredar de otras clases usando extends.

  class Avenger {
    constructor(
      public name: string,
      public realName: string
    ) {
      console.log("Constructor Avenger llamado");
    }

    // Un metodo protected solo es accesible dentro de la clase y sus subclases.
    protected getFullName() {
      return `${this.name} ${this.realName}`;
    }
  }

  class Xmen extends Avenger {
    constructor(
      name: string,
      realName: string,
      public isMutant: boolean
    ) {
      super(name, realName);
      console.log("Constructor Xmen llamado");
    }

    public getFullNameDesdeXmen() {
      return super.getFullName();
    }
  }

  const wolverine = new Xmen("Wolverine", "Logan", true);
  console.log(wolverine);
})();
