(() => {
  // Se pueden definir interfaces para funciones

  // No es muy habitual encontrar este tipo de interfaces, sin embargo, es importante conocerlas.

  interface addTwoNumbers {
    (a: number, b: number): number;
  }

  let addNumbersFunction: addTwoNumbers;

  addNumbersFunction = (a: number, b: number) => {
    return 10;
  };
})();
