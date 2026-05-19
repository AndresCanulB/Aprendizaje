/*
Clases 39 a 44 - Asincronía
Vídeo: https://youtu.be/iJvLAZ8MJ2E?t=11890
*/

// Programación asíncrona

// Código síncrono

console.log("Inicio");

for (let i = 0; i < 100000000; i++) {}

console.log("Fin");

// Event Loop (Bucle de eventos)

// Componentes del Event Loop:
// 1. Call Stack (Pila de ejecución)
// 2. Web APIs (APIs del navegador) o Node.js:
// 3. Task Queue (setTimeout()) y Microtask Queue (Promesas)

// Flujo del Event Loop:
// 1. Call Stack
// 2. Operaciones asíncronas -> Web APIs o Node.js
// 3. Operación termina -> La coloca en Task Queue o Microtask Queue
// 4. Si Call Stack vacío -> Mueve tareas del Microtask Queue o Task Queue al Call Stack
// 5. El proceso se repite

// Código asíncrono

// - Callbacks

console.log("Inicio");

setTimeout(() => {
  console.log("Esto se ejecuta después de 2 segundos");
}, 2000);

console.log("Fin");

// - Problema: Callback Hell

function step1(callback) {
  setTimeout(() => {
    console.log("Paso 1 completado");
    callback();
  }, 1000);
}

function step2(callback) {
  setTimeout(() => {
    console.log("Paso 2 completado");
    callback();
  }, 1000);
}

function step3(callback) {
  setTimeout(() => {
    console.log("Paso 3 completado");
    callback();
  }, 1000);
}

step1(() => {
  step2(() => {
    step3(() => {
      console.log("Todos los pasos completados");
    });
  });
});

// - Promesas

// Las promesas normalmente no son asincronicas

// Al agregar setTimeout(callback, tiempo) se vuelven asincronicas

// Una promesa es un objeto que representa un resultado futuro.

// Las Promesas solo ayudan a manejar esos resultados futuros de forma organizada.

// Esto ni siquiera es asíncrono realmente.

new Promise((resolve) => {
  resolve("Hola");
});

// La promesa se resuelve inmediatamente.

// La parte asíncrona es setTimeout.

new Promise((resolve) => {
  setTimeout(() => {
    resolve("Hola");
  }, 1000);
});

// La Promise solamente “envuelve” ese proceso.

const promise = new Promise((resolve, reject) => {
  // IMPORTANTE: Inicialmente escribí setInterval, pero lo correcto es setTimeout
  // setInterval se ejecutaría indefinidamente cada 4s, y el proceso nunca finalizaría
  setTimeout(() => {
    const ok = false;
    if (ok) {
      resolve("Operación exitosa");
    } else {
      reject("Se ha producido un error");
    }
  }, 4000);
});

// .then recibe una funcion

promise // La promesa guarda internamente el valor que recibe resolve(...).
  .then((result) => {
    console.log(result); // Luego .then() revisa ese valor guardado.
  })
  .catch((error) => {
    console.log(error);
  });

// Esto es simplemente una función anónima (callback).

(result) => {
  console.log(result);
};

// then() hace algo conceptualmente parecido a esto:

function then(callback) {
  const value = "El numero es par";

  callback(value);
}

// Entonces cuando escribes:

// .then((result) => {
//   console.log(result);
// })

// es como si .then() hiciera internamente:

callback("El numero es par");

// Ejemplo paso a paso

// 1. Creas la Promise

const newPromise = new Promise((resolve) => {
  resolve("Hola");
});

// 2. newPromise("Hola")

// La Promise guarda:

// valor = "Hola"

// 3. Luego haces:

newPromise.then((result) => {
  console.log(result);
});

// 4. .then() obtiene el valor guardado

(result) => {
  console.log(result);
};

("Hola");

// - Encadenamiento de promesas

function step1Promise() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Paso 1 con promesa completado");
      resolve();
    }, 1000);
  });
}

function step2Promise() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Paso 2 con promesa completado");
      resolve();
    }, 1000);
  });
}

function step3Promise() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Paso 3 con promesa completado");
      resolve();
    }, 1000);
  });
}

// La Promise no usa callbacks para existir

// .then() sí usa callbacks

// .then() funciona parecido a esto:

function then(callback) {
  // cuando la promesa termine:
  callback(valor);
}

// .then() recibe una función y la ejecuta después.

step1Promise()
  .then(step2Promise) // Cuando la promesa termine, ejecuta esta función
  .then(step3Promise)
  .then(() => {
    console.log("Todos los pasos con promesa completados");
  });

// - Async/Await

function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function process() {
  console.log("Inicio del proceso");

  await wait(5000);
  console.log("Proceso después de 5 segundos");

  await wait(1000);
  console.log("Proceso después de 1 segundo");

  await wait(2000);
  console.log("Proceso después de 2 segundos");

  console.log("Fin del proceso");
}

process();
