/*
Clase 45 - Asincronía
Vídeo: https://youtu.be/iJvLAZ8MJ2E?t=14558
*/

// 1. Crea una función para saludar que reciba un nombre y un callback.
//    El callback debe ejecutarse después de 2 segundos y mostrar en consola "Hola, [nombre]".

function greet(userName, callback) {
  setTimeout(() => {
    callback(userName);
  }, 2000);
}

function callback(userName) {
  console.log(`Hola, ${userName}`);
}

greet("Alberto", callback); // Al hacer un callback, al pasar la funcion como parametro debe ir sin ()

// 2. Crea tres funciones task1(callback), task2(callback) y task3(callback).
//    Cada función debe tardar 1 segundo en ejecutarse y luego llamar al callback.

function task1(callback) {
  // La arrow function es el callback que se pasa como argumento
  setTimeout(() => {
    console.log("Task1");
    callback(); // Se ejecuta la function task dentro del arrow function
  }, 1000);
}

function task2(callback) {
  setTimeout(() => {
    console.log("Task2");
    callback();
  }, 1000);
}

function task3(callback) {
  setTimeout(() => {
    console.log("Task3");
    callback();
  }, 1000);
}

// Error, se estan ejecutando las funciones dentro de los parametros

// task1(
//   task2(
//     task3(() => {
//       console.log("Todos los pasos terminados");
//     }),
//   ),
// );

// Se debe hacer con arrow functions

task1(() => {
  // Al crear la arrow function dentro de los parametros, no se ejecuta automaticamente
  task2(() => {
    // Cuando se crea una function dentro de un parametro, solo se esta pasando la funcion como valor
    task3(() => {
      // Se utilizan funciones anonimas porque no tienen nombre, las arrow function son parte de las funciones anonimas
      console.log("Task completados");
    });
  });
});

// . Las funciones pueden pasarse como valores.
// . () ejecuta una función.
// . Las arrow functions permiten retrasar la ejecución.
// . Los callbacks se ejecutan cuando otra función decide llamarlos.

// 3. Crea una función para verificar un número que retorne una Promesa.
//    Si el número es par, la promesa se resuelve con el mensaje "Número par".
//    Si el número es impar, la promesa se rechaza con el mensaje "Número impar".

function checkNumber(number) {
  return new Promise((resolve, reject) => {
    number % 2 === 0
      ? resolve("El numero es par")
      : reject("El numero es impar");
  });
}

checkNumber(2)
  .then((result) => console.log(result))
  .catch((error) => console.log(error));

// 4. Crea tres funciones que devuelvan promesas:
//    firstTask(): tarda 1s y muestra "Primera tarea completada".
//    secondTask(): tarda 2s y muestra "Segunda tarea completada".
//    thirdTask(): tarda 1.5s y muestra "Tercera tarea completada".

function firstTask() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Primera tarea completada");
      resolve();
    }, 1000);
  });
}

function secondTask() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Segunda tarea completada");
      resolve();
    }, 2000);
  });
}

function thirdTask() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Tercera tarea completada");
      resolve();
    }, 1500);
  });
}

firstTask()
  .then(secondTask)
  .then(thirdTask)
  .then(() => {
    console.log("Todas las tareas completadas");
  });

// 5. Transforma el ejercicio anterior de Promesas en una función async/await llamada executeTasks().

async function executeTasks() {
  await firstTask();
  await secondTask();
  await thirdTask();
  console.log("Todas las tareas completadas con async/await");
}

executeTasks();

// 6. Crea una función getUser(id) que devuelva una promesa y simule una llamada a una API (que se demore 2s).
//    Si el id es menor a 5, la promesa se resuelve con { id, nombre: "Usuario " + id }.
//    Si el id es 5 o mayor, la promesa se rechaza con el mensaje "Usuario no encontrado".
//    Usa async/await para llamar a getUser(id) y maneja los errores con try/catch.

function getUser(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      id >= 5
        ? reject("Usuario no encontrado")
        : resolve({ id, nombre: "Usuario " + id });
    }, 2000);
  });
}

// Una función async siempre retorna una Promise.

async function callGetUser(id) {
  let data = {};

  console.log("Empieza el programa");

  try {
    data = await getUser(id);
  } catch (error) {
    console.log(error);
  }

  return data;
}

callGetUser(2)
  .then((result) => {
    // Se retorna una promesa
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });

// 7. Intenta predecir el resultado de este código antes de ejecutarlo en la consola:
//    console.log("Inicio") .1 Primero
//    setTimeout(() => console.log("setTimeout ejecutado"), 0) .4 Cuarto
//    Promise.resolve().then(() => console.log("Promesa resuelta")) .3 Tercero
//    console.log("Fin") .2 Segundo

// 1. Código síncrono primero

// Esto se ejecuta inmediatamente:

// console.log("Inicio");

// y luego:

// console.log("Fin");

// 2. Las Promises (.then) van a la microtask queue

// Promise.resolve().then(() => console.log("Promesa resuelta"));

// Los .then() tienen prioridad alta.

// 3. setTimeout va a la macrotask queue

// setTimeout(() => console.log("setTimeout ejecutado"), 0);

// Aunque tenga 0ms, no significa “instantáneo”.

// Significa: “ejecútalo cuando el call stack esté vacío y después de las microtasks”.

// 8. Crea tres funciones que devuelvan promesas con tiempos de espera distintos.
//    A continuación, usa Promise.all() para ejecutarlas todas al mismo tiempo y mostrar "Todas las promesas resueltas" cuando terminen.

function promise1() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Promesa 1");
      resolve();
    }, 7000);
  });
}

function promise2() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Promesa 2");
      resolve();
    }, 3000);
  });
}

function promise3() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Promesa 3");
      resolve();
    }, 1000);
  });
}

// ¿Cómo funciona Promise.all()?

// Promise.all() sirve para: ejecutar varias Promises al mismo tiempo y esperar a que TODAS terminen.

Promise.all([promise1(), promise2(), promise3()]);

// Sucede esto:

// Las 3 Promises empiezan inmediatamente.

// JavaScript NO espera una por una.

// Corre todas “en paralelo” (concurrentemente).

// Promise.all() espera a que todas terminen.

// Cuando todas se resuelven:

// la Promise de Promise.all() también se resuelve.

// 9. Crea una función waitSeconds(segundos) que use setTimeout dentro de una Promesa para esperar la cantidad de segundos indicada.
//    A continuación, usa async/await para que se espere 3 segundos antes de mostrar "Tiempo finalizado" en consola.

function waitSeconds(seconds) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Tiempo finalizado");
    }, seconds);
  });
}

async function executeWait(seconds) {
  return await waitSeconds(seconds);
}

executeWait(3000).then((result) => {
  console.log(result);
});

// 10. Crea una simulación de un cajero automático usando asincronía.
//     - La función checkBalance() tarda 1s y devuelve un saldo de 500$.
//     - La función withdrawMoney(amount) tarda 2s y retira dinero si hay suficiente saldo, o devuelve un error si no hay fondos.
//     - Usa async/await para hacer que el usuario intente retirar 300$ y luego 300$ más.
//
//     Posible salida esperada:
//     Saldo disponible: 500$
//     Retirando 300$...
//     Operación exitosa, saldo restante: 200$
//     Retirando 300$...
//     Error: Fondos insuficientes

function bankAccount(cash) {
  // Closure
  function showAccount() {
    return cash;
  }
  function drawOut(amount) {
    cash -= amount;
  }
  return {
    showAccount,
    drawOut,
  };
}

const account = bankAccount(500);

function checkBalance() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Saldo disponible: ${account.showAccount()}$`);
    }, 1000);
  });
}

function withdrawMoney(amount) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`Retirando ${amount}$...`);
      if (account.showAccount() >= amount) {
        account.drawOut(amount);
        resolve(`Operación exitosa, saldo restante: ${account.showAccount()}`);
      } else {
        reject("Error: Fondos insuficientes");
      }
    }, 2000);
  });
}

async function executeTransaction() {
  console.log("Iniciando transacciones");
  console.log(await checkBalance());
  console.log(await withdrawMoney(300));
  console.log(await withdrawMoney(300));
}

executeTransaction() // La Promise de executeTransaction() termina rechazada, y por eso se ejecuta .catch().
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });

// Cuando una Promise se rechaza:

// .then() se salta,

// y se ejecuta .catch().
