/*
Clase 34 - Ejercicios: Objetos
Vídeo: https://youtu.be/1glVfFxj8a4?t=15675
*/

// 1. Crea un objeto con 3 propiedades

let newObject = {
  string: "Texto",
  number: 23,
  boolean: false,
};

// 2. Accede y muestra su valor

console.log(newObject.string);
console.log(newObject.number);
console.log(newObject.boolean);

// 3. Agrega una nueva propiedad

newObject.otherString = "Hola";
console.log(newObject.otherString);

// 4. Elimina una de las 3 primeras propiedades

delete newObject.otherString;
console.log(newObject);

// 5. Agrega una función e invócala

newObject.newFunction = function () {
  console.log("Esto es una funcion dentro de un objeto");
};
newObject.newFunction();

// 6. Itera las propiedades del objeto

for (let key in newObject) {
  console.log(`${key} = ${newObject[key]}`);
}

// 7. Crea un objeto anidado

let outerObject = {
  info: "Objeto exterior",
  outerFunction: function () {
    console.log("Funcion exterior");
  },
  innerObject: {
    innerInfo: "Objeto interior",
    innerFunction: function () {
      console.log("Funcion interior");
    },
  },
};

// 8. Accede y muestra el valor de las propiedades anidadas

console.log(outerObject.innerObject.innerFunction());

// 9. Comprueba si los dos objetos creados son iguales

console.log(newObject === outerObject);

// 10. Comprueba si dos propiedades diferentes son iguales

console.log(newObject.string === outerObject.info);
