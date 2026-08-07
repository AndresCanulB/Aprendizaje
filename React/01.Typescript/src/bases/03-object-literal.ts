// Los objetos literales son colecciones de propiedades
// Usar F2 para refactorizar el nombre de una variable, metodo o clase
// Usar Ctrl + D para seleccionar todas las coincidencias de la palabra seleccionada

// Una interfaz define la "forma" que debe tener un objeto
interface Person {
  firstName: string;
  lastName: string;
  age: number;
  address: Address;
}

interface Address {
  postalCode: string;
  city: string;
}

// Si usamos const, la referencia en memoria sera inmutable, pero las propiedades del objeto seran mutables
const ironman: Person = {
  firstName: "Tony",
  lastName: "Stark",
  age: 45,
  address: {
    postalCode: "ABC-123",
    city: "New York"
  }
};

console.log(ironman);

// Metodo recomendado para clonar objetos
const spiderman = structuredClone(ironman);

spiderman.firstName = "Peter";
spiderman.lastName = "Parker";
spiderman.age = 22;
spiderman.address.city = "San José";

console.log(ironman, spiderman);

// Metodo para clonar con el metodo spread operator
// Crea un nuevo objeto, se esparcen todas las propiedades del objeto original y se copian al nuevo objeto
// Si las propiedades del objeto son tipos primitivos, se copian los valores, si son tipos complejos (objetos), se copian las referencias
// Este metodo es mas eficiente que structuredClone para objetos simples, pero no es capaz de clonar tipos complejos como funciones, fechas, etc.
// const spiderman = { ...ironman };

// No se usa este metodo porque copia la referencia en memoria, por lo que los cambios en spiderman tambien se reflejaran en ironman
// const spiderman = ironman;
