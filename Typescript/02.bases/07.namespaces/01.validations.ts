// Un namespace es una forma de agrupar y organizar código bajo un mismo nombre, evitando conflictos de nombres en el scope global.

namespace Validations {
  // Se debe usar export para que la funcion pueda ser accesible desde fuera del namespace.
  export const validateText = (text: string): boolean => {
    return text.length > 3 ? true : false;
  };

  export const validateDate = (date: Date): boolean => {
    return isNaN(date.getTime()) ? false : true;
  };
}

console.log(Validations.validateText("Fernando"));
