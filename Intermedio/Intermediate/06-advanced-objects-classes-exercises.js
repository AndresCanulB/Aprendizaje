/*
Clase 38 - Objetos y clases avanzados
Vídeo: https://youtu.be/iJvLAZ8MJ2E?t=11832
*/

// 1. Agregega una función al prototipo de un objeto

let prototype = {
  protoName: "Juan",
};

prototype.sayName = function () {
  console.log(`Tu nombre es: ${this.protoName}`);
};

prototype.sayName();

// 2. Crea un objeto que herede de otro

let inheritPrototype = Object.create(prototype);

inheritPrototype.protoName = "Ernesto";

console.log(inheritPrototype.protoName);

// 3. Define un método de instancia en un objeto

// Un método de instancia es una función que pertenece a una instancia específica de un objeto
// y puede acceder a sus propiedades mediante this.

let newObject = {
  color: "rojo",
  price: 2344,
};

newObject.sayDetails = function () {
  console.log(`Los detalles del objeto son: ${this.color} y ${this.price}`);
};

newObject.sayDetails();

// Diferencia rápida:
// Método de instancia → pertenece a un objeto concreto.
// Método de prototipo → se comparte entre múltiples objetos que heredan del mismo prototipo.

// 4. Haz uso de get y set en un objeto

// Objetos

let privateObject = {
  _string: "Texto",
  _number: 2424,

  get string() {
    return this._string;
  },
  get number() {
    return this._number;
  },
  set string(string) {
    this._string = string;
  },
  set number(number) {
    this._number = number;
  },
};

privateObject.string = "Otro texto";
privateObject.number = 3454354;
console.log(privateObject.string);
console.log(privateObject.number);

// Clases

class PrivateObject {
  #string;
  #number;

  constructor(string, number) {
    this.#string = string;
    this.#number = number;
  }

  get string() {
    return this.#string;
  }

  set string(string) {
    this.#string = string;
  }

  get number() {
    return this.#number;
  }

  set number(number) {
    this.#number = number;
  }
}

let newPrivateObject = new PrivateObject("Texto", 43423);

newPrivateObject.number = 23234;
newPrivateObject.string = "Mucho texto";
console.log(newPrivateObject.number);
console.log(newPrivateObject.string);

// 5. Utiliza la operación assign en un objeto

let object1 = {
  text: "texto",
};

let object2 = {
  number: 395,
};

let fullObject = Object.assign(object1, object2);

console.log(fullObject);

// 6. Crea una clase abstracta

class AbstractComponent {
  constructor(name, color, price) {
    if (new.target === AbstractComponent) {
      throw new Error("No se puede instancia una clase abstracta");
    }
    this.name = name;
    this.color = color;
    this.price = price;
  }

  showDetails() {
    throw new Error("Este método tiene que ser implementado por la subclase");
  }
}

// 7. Utiliza polimorfismo en dos clases diferentes

class CPU extends AbstractComponent {
  constructor(name, color, price, cores, threads) {
    super(name, color, price);
    this.cores = cores;
    this.threads = threads;
  }

  showDetails() {
    console.log(
      `Los detalles de los componentes son: nombre: ${this.name} color: ${this.color} nucleos: ${this.cores} hilos: ${this.threads}`,
    );
  }
}

class GPU extends AbstractComponent {
  constructor(name, color, price, vram) {
    super(name, color, price);
    this.vram = vram;
  }

  showDetails() {
    console.log(
      `Los detalles de los componentes son: nombre: ${this.name} color: ${this.color} vram: ${this.vram}}`,
    );
  }
}

// 8. Implementa un Mixin

let MixinActions = {
  sayPrice: function () {
    console.log(`El precio del componente es: ${this.price}`);
  },
};

Object.assign(CPU.prototype, MixinActions);
Object.assign(GPU.prototype, MixinActions);

let newCPU = new CPU("Intel", "Black", 50000, 8, 16);
let newGPU = new GPU("Radeon", "White", 60000, 8000);

newCPU.showDetails();
newGPU.showDetails();

newCPU.sayPrice();
newGPU.sayPrice();

// 9. Crea un Singleton

class Player {
  constructor(playerName, lives) {
    if (Player.instance) {
      return Player.instance;
    }
    this.playerName = playerName;
    this.lives = lives;
    Player.instance = this;
  }
}

const playerSession1 = new Player("Mario", 3);
const playerSession2 = new Player("Luigi", 78);
const playerSession3 = new Player("Peach", 23);
const playerSession4 = new Player("Yoshi", 10);

console.log(playerSession1);
console.log(playerSession2);
console.log(playerSession3);
console.log(playerSession4);

// 10. Desarrolla un Proxy

class Pokemon {
  constructor(name, lives, level) {
    ((this.name = name), (this.lives = lives), (this.level = level));
  }
}

const pokemonProxy = {
  get(target, property) {
    console.log(target, property);
    return target[property];
  },
  set(target, property, value) {
    if (property === "lives" && value < 0) {
      throw new Error("Las vidas no pueden ser negativas");
    }
    target[property] = value;
  },
};

const pokemon = new Proxy(new Pokemon("Charizard", 3, 24), pokemonProxy);

console.log(pokemon.name);
console.log(pokemon.lives);
console.log(pokemon.level);
