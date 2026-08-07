(() => {
  // Pueden existir interfaces dentro de otras interfaces

  // No se recomienda tener muchos niveles en una interfaz, para ello se crean interfaces anidadas.

  interface Client {
    name: string;
    age?: number;
    address: Address;
    // Si el objeto tiene metodos, se debe agregar su estructura dentro de la interfaz function(parametros): tipoRetorno
    getFullAddress(id: string): string; // En la interfaz el retorno se agrega con :
  }

  interface Address {
    id: number;
    zip: string;
    city: string;
  }

  const client: Client = {
    name: "Fernando",
    age: 25,
    address: {
      id: 125,
      zip: "KY2 SUD",
      city: "Ottawa"
    },
    getFullAddress(id: string) {
      return this.address.city;
    }
  };

  const client2: Client = {
    name: "Melissa",
    age: 30,
    address: {
      city: "Toronto",
      id: 120,
      zip: "K2S U2A"
    },
    getFullAddress(id: string) {
      return this.address.city;
    }
  };
})();

/*

Una interfaz puede heredar de una o varias interfaces usando extends.

Herencia simple

interface Animal {
  nombre: string;
  edad: number;
}

interface Perro extends Animal {  // Hereda nombre y edad
  raza: string;
  ladrar(): void;
}

const miPerro: Perro = {
  nombre: "Rex",   // ← heredado de Animal
  edad: 3,         // ← heredado de Animal
  raza: "Labrador",
  ladrar() { console.log("¡Guau!"); }
};

Herencia múltiple (de varias interfaces)

interface Xmen {
  name: string;
  mutantPower(): string;
}

interface Human {
  age: number;
}

Una interfaz puede extender varias al mismo tiempo

interface Mutant extends Xmen, Human {
  alias: string;
}
  
const wolverine: Mutant = {
  name: "Logan",        // ← de Xmen
  age: 200,             // ← de Human
  alias: "Wolverine",   // ← propio de Mutant
  mutantPower() { return "Regeneración"; }
};

*/
