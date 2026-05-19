/*
Clase 39 - Ejercicios: Clases
Vídeo: https://youtu.be/1glVfFxj8a4?t=18630
*/

// 1. Crea una clase que reciba dos propiedades

class MyClass {
  constructor(firstVar, secondVar) {
    this.firstVar = firstVar;
    this.secondVar = secondVar;
  }
}

let myObject = new MyClass("Texto", 23);

console.log(myObject);

// 2. Añade un método a la clase que utilice las propiedades

class SecondClass {
  constructor(firstVar, secondVar) {
    this.firstVar = firstVar;
    this.secondVar = secondVar;
  }

  newFunc() {
    console.log(
      `Primera variale: ${this.firstVar} | Seguunda variable: ${this.secondVar}`,
    );
  }
}

// 3. Muestra los valores de las propiedades e invoca a la función

let secondObject = new SecondClass(1, 2);

secondObject.newFunc();

// 4. Añade un método estático a la primera clase

class FirstClass {
  constructor(firstVar, secondVar) {
    this.firstVar = firstVar;
    this.secondVar = secondVar;
  }

  static greeting(name, age) {
    console.log(`Hola ${name} tu edad es: ${age}`);
  }
}

// 5. Haz uso del método estático

FirstClass.greeting("Eduardo", 53);

// 6. Crea una clase que haga uso de herencia

class Components {
  constructor(name, price, color) {
    this.name = name;
    this.price = price;
    this.color = color;
  }
}

class Processor extends Components {
  constructor(name, price, color, cores, threads) {
    super(name, price, color);
    this.cores = cores;
    this.threads = threads;
  }
}

let myProcessor = new Processor("Ryzen", 23000, "Black", 4, 8);

console.log(myProcessor);

// 7. Crea una clase que haga uso de getters y setters

class GetSetClass {
  constructor(text, number) {
    this._text = text;
    this._number = number;
  }

  get text() {
    return this._text;
  }

  get number() {
    return this._number;
  }

  set text(value) {
    this._text = value;
  }

  set number(value) {
    this._number = value;
  }
}

// 8. Modifica la clase con getters y setters para que use propiedades privadas

class PrivateClass {
  #text;
  #number;
  constructor(text, number) {
    this.#text = text;
    this.#number = number;
  }

  get text() {
    return this.#text;
  }

  get number() {
    return this.#number;
  }

  set text(text) {
    this.#text = text;
  }

  set number(number) {
    this.#number = number;
  }
}

// 9. Utiliza los get y set y muestra sus valores

let privateObject = new PrivateClass("texto", 24);

console.log(privateObject.number);

privateObject.text = "nombre";

console.log(privateObject.text);

// 10. Sobrescribe un método de una clase que utilice herencia

class Father {
  constructor(text, number) {
    this.text = text;
    this.number = number;
  }

  message() {
    console.log("El padre da un mensaje");
  }
}

class Son extends Father {
  message() {
    console.log("El hijo da un mensaje");
  }
}

let son = new Son("texto", 2);

son.message();
