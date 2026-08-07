(() => {
  class Avenger {
    constructor(
      public name: string,
      public realName: string
    ) {
      console.log("Constructor Avenger llamado");
    }

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

    // En los metodos get y set se puede ejecutar logica antes de retornar un valor o cambiar un valor

    // Los getters parecen propiedades pero son metodos
    get fullName(): string {
      return `${this.name} ${this.realName}`;
    }

    // Los setters solo pueden recibir un parametro
    set fullName(name: string) {
      // Se puede validar que el nombre sea valido
      if (name.length < 3) {
        throw new Error("El nombre debe tener al menos 3 caracteres");
      }

      this.name = name;
    }
  }

  const wolverine = new Xmen("Wolverine", "Logan", true);
  console.log(wolverine);

  // Se puede obtener el valor de la propiedad con el getter como si fuera una propiedad
  console.log(wolverine.fullName);

  // Se cambiar el valor de la propiedad mediante el setter
  wolverine.fullName = "Juan";
})();
