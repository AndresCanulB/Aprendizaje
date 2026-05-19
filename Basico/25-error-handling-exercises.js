/*
Clase 41 - Ejercicios: Manejo de errores
Vídeo: https://youtu.be/1glVfFxj8a4?t=20392
*/

// 1. Captura una excepción utilizando try-catch

let myVar;

try {
  console.log(myVar.text);
} catch (error) {
  console.log(error);
}

// 2. Captura una excepción utilizando try-catch y finally

try {
  console.log(myVar.number);
} catch (error) {
  console.log(error);
} finally {
  myVar = "texto";
  console.log(myVar);
}

// 3. Lanza una excepción genérica

throw new Error("Esta es una excepcion generica");

// 4. Crea una excepción personalizada

class CustomError extends Error {
  constructor(message, a, b) {
    super(message);
    this.a = a;
    this.b = b;
  }

  substraction() {
    console.log(this.a - this.b);
  }
}

let newError = new CustomError("Esto es un error", 2, 4);

newError.substraction();

// 5. Lanza una excepción personalizada

try {
  console.log(myVar.error);
} catch {
  console.log(newError.message);
}

// 6. Lanza varias excepciones según una lógica definida

try {
  console.log(myVar.error.type);
} catch (error) {
  if (error instanceof SyntaxError) {
    console.log("Es un error de syntaxis:", error.message);
  } else if (error instanceof Error) {
    console.log("Es un error de:", error.message);
  }
}

// 7. Captura varias excepciones en un mismo try-catch

class MyError extends Error {}
class OtherError extends Error {}

function probarError(type) {
  try {
    if (type === "type") {
      let x;
      console.log(x.prop); // TypeError
    } else if (type === "reference") {
      console.log(y); // ReferenceError (y no existe)
    } else if (type === "my") {
      throw new MyError("Este es un MyError");
    } else if (type === "other") {
      throw new OtherError("Este es un OtherError");
    } else {
      console.log("Sin error");
    }
  } catch (error) {
    if (error instanceof MyError) {
      console.log("Capturado MyError:", error.message);
    } else if (error instanceof OtherError) {
      console.log("Capturado OtherError:", error.message);
    } else if (error instanceof TypeError) {
      console.log("Capturado TypeError:", error.message);
    } else if (error instanceof ReferenceError) {
      console.log("Capturado ReferenceError:", error.message);
    } else {
      console.log("Error desconocido:", error.message);
    }
  }
}

// 🔹 Probando uno por uno
probarError("type");
probarError("reference");
probarError("my");
probarError("other");
probarError("ninguno");

// 8. Crea un bucle que intente transformar a float cada valor y capture y muestre los errores

function floatTransform(mySet) {
  let newSet = new Set([]);
  for (let value of mySet) {
    try {
      if (Number.isInteger(value)) {
        newSet.add((value += 0.01));
      } else {
        throw new Error(
          `Error: El valor ${value} no se pudo convertir en float`,
        );
      }
    } catch (error) {
      console.log(error.message);
    }
  }
  return newSet;
}

console.log(floatTransform([1, 2, "3", 4, "5", 6, 7, 8, 9]));

// 9. Crea una función que verifique si un objeto tiene una propiedad específica y lance una excepción personalizada

class CustomError extends Error {}

let newObject = {
  text: "texto",
  number: 2,
  boolean: false,
};

function checkObject(property) {
  try {
    if (newObject.hasOwnProperty(property)) {
      console.log(`El objeto si tiene la propiedad ${property}`);
    } else {
      throw new CustomError(`El objeto no tiene la propiedad ${property}`);
    }
  } catch (error) {
    console.log(error.message);
  }
}

checkObject("text");
checkObject("float");

// 10. Crea una función que realice reintentos en caso de error hasta un máximo de 10

class ErrorClass extends Error {}

function countNumbers(myArray) {
  for (let value of myArray) {
    try {
      if (Number.isInteger(value)) {
        console.log(`El numero ${value} ha sido impreso con exito`);
      } else {
        throw new ErrorClass(
          `Error: Ha ocurrido un error al imprimir el valor ${value}`,
        );
      }
    } catch (error) {
      for (let i = 1; i <= 10; i++) {
        console.log(
          `${error.message}, Intento ${i} para convertir el valor ${value} en numero`,
        );

        if (!isNaN(Number(value))) {
          console.log(`El numero ${Number(value)} ha sido impreso con exito`);
          break;
        }
      }
    }
  }
}

countNumbers([1, 2, 3, 4, "2", 10, 20]);
