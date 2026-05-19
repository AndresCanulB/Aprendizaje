/*
Clase 23 - Estructuras avanzadas
Vídeo: https://youtu.be/iJvLAZ8MJ2E?t=7514
*/

// 1. Utiliza map, filter y reduce para crear un ejemplo diferente al de la lección

let numbers = [1, 2, 3, 4, 5, 6, 7, 8];

let result = numbers
  .map(
    (element) =>
      element + numbers.reduce((result, current) => result * current, 1), // Se multiplican todos los numeros del array y el resultado se suma a cada elemento del array
  )
  .filter((number) => number % 2 !== 0);

console.log(result);

// 2. Dado un array de números, crea uno nuevo con dichos números elevados al cubo y filtra sólo los números pares

let newArray = numbers
  .map((number) => number ** 3)
  .filter((result) => result % 2 === 0);

console.log(newArray);

// 3. Utiliza flat y flatMap para crear un ejemplo diferente al de la lección

let numbersGroups = [13, [92, 58], 23243, [193], 5745];

let numbersList = numbersGroups
  .flat(1)
  .flatMap((number) => number.toString().split(""))
  .map((word) => parseInt(word));

console.log(numbersList);

// 4. Ordena un array de números de mayor a menor

let numberArray = [34, 54, 456, 23, 76, 9, 1, 20, 49, 0];

numberArray.sort((lesser, higher) => higher - lesser);

console.log(numberArray);

// 5. Dados dos sets, encuentra la unión, intersección y diferencia de ellos

let setA = new Set([1, 2, 3, 4, 5, 6]);

let setB = new Set([4, 5, 6, 7, 8, 9]);

let union = new Set([...setA, ...setB]);

console.log(union);

let intersection = new Set([...setA].filter((number) => setB.has(number)));

console.log(intersection);

let difference = new Set([...setA].filter((number) => !setB.has(number)));

console.log(difference);

// 6. Itera los resultados del ejercicio anterior

union.forEach((number) => console.log(number));
intersection.forEach((number) => console.log(number));
difference.forEach((number) => console.log(number));

// 7. Crea un mapa que almacene información se usuarios (nombre, edad y email) e itera los datos

// Muchos usuarios

const usersMap = new Map([
  // El map recibe arreglos de dos posiciones clave valor
  ["Usuario1", { userName: "Juan", age: 34, email: "juan@gmail.com" }], // En la segunda posicion de cada arreglo se encuentra un objeto {}
  ["Usuario2", { userName: "Eduardo", age: 11, email: "eduardo@gmail.com" }],
  ["Usuario3", { userName: "Enrique", age: 32, email: "enrique@gmail.com" }],
  ["Usuario4", { userName: "Luis", age: 53, email: "luis@gmail.com" }],
]);

console.log(usersMap);

usersMap.forEach((value, key) =>
  console.log(
    `Usuario: ${key} Datos: Nombre: ${value.userName} Edad: ${value.age} Email: ${value.email}`,
  ),
);

// Unico usuario

const userMap = new Map([
  ["name", "Eduardo"],
  ["age", 12],
  ["email", "eduardo@gmail.com"],
]);

console.log(userMap);

// userMap.forEach((value, key) => console.log(`Clave: ${key} Valor: ${value}`));

// 8. Dado el mapa anterior, crea un array con los nombres

// Unico usuario

let userName = [userMap.get("name")];

// console.log(userName);

// Muchos usuarios

let usersNames = [];

usersMap.forEach((value, key) => {
  usersNames.push(value.userName);
});

console.log(usersNames);

// console.log(usersNames);

// 9. Dado el mapa anterior, obtén un array con los email de los usuarios mayores de edad y transfórmalo a un set

// Unico usuario

let userEmail = new Set([
  userMap.get("age") >= 18
    ? userMap.get("email")
    : "El usuario no es mayor de edad",
]);

console.log(userEmail);

// Muchos usuarios

let usersEmails = new Set([]);

usersMap.forEach((value, key) => {
  if (value.age >= 18) usersEmails.add(value.email);
});

console.log(usersEmails);

// 10. Transforma el mapa en un objeto, a continuación, transforma el objeto en un mapa con clave el email de cada usuario y como valor todos los datos del usuario

let objectFromMap = Object.fromEntries(usersMap);

let mapFromObject = new Map();

Object.entries(objectFromMap).forEach(([user, data]) => {
  mapFromObject.set(data.email, {
    user: user,
    userName: data.userName,
    age: data.age,
  });
});

console.log(mapFromObject);
