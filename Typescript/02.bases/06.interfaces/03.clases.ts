(() => {
  interface Xmen {
    name: string;
    realName: string;
    mutantPower(id: number): string;
  }

  interface Human {
    age: number;
  }

  // En la clase se puede implementar más de una interface, utilizando la palabra reservada 'implements'

  // Se pueden implementar todas las interfaces que se necesiten

  class Mutant implements Xmen, Human {
    public age: number;
    public name: string;
    public realName: string;

    mutantPower(id: number) {
      return this.name + " " + this.realName;
    }
  }
})();
