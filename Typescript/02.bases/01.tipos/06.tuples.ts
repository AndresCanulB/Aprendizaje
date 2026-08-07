(() => {
  // Una tuplas es un arreglo cuyo número de elementos y el tipo de cada posición están definidos.

  // Se usa en funciones para devolver valores con tipos definidos

  // En React se usan tuplas para devolver el estado y la función que lo modifica

  // Se utilizan para crear pares clave-valor, como en un diccionario pequeño

  // Las tuplas son inmutables

  // Las tuplas no se utilizan mucho, aparecen principalmente cuando el orden de los elementos tiene un significado fijo.

  const hero: [string, number, boolean] = ["Dr Strange", 100, true];

  hero[0] = "Ironman";
  hero[1] = 50;
  hero[2] = false;

  console.log(hero);
})();
