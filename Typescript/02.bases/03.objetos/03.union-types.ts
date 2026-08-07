(() => {
  // Los tipos de unión nos permiten definir una variable que puede ser de varios tipos.

  // type A | B; // significa que mi variable puede ser de tipo A o de tipo B.

  // Se define con el operador | (pipe).

  type Hero = {
    name: string;
    age?: number;
    powers: number[];
    getName?: () => string;
  };

  let myCustomVariable: string | number | Hero = "Fernando";
  console.log(typeof myCustomVariable); // Fernando

  myCustomVariable = 20;
  console.log(typeof myCustomVariable); // 20

  myCustomVariable = {
    name: "Bruce",
    age: 43,
    powers: [1]
  };
  console.log(typeof myCustomVariable); // Hero
  console.log(myCustomVariable); // { name: 'Bruce', age: 43, powers: [ 1 ] }
})();
