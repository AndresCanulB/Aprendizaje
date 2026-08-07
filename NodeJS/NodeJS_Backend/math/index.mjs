// Exportar cada funcion
export function add(n1, n2) {
  return n1 + n2;
}

export function substract(n1, n2) {
  return n1 - n2;
}

export function multiply(n1, n2) {
  return n1 * n2;
}

export function divide(n1, n2) {
  return n1 / n2;
}

// Exportar todo por defecto
export default {
  add,
  substract,
  multiply,
  divide,
};

// Se pueden exportar los modulos por separado, o todos por default
