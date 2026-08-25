import { useState } from "react";

// Se pueden obtener parametros en un custom hook.
// En este caso un parametro initialValue de tipo number y valor predeterminado de 10
export const useCounter = (initialValue: number = 10) => {
  // Se crea la logica que va a tener el custom hook

  const [counter, setCounter] = useState(initialValue);

  const handleAdd = () => {
    setCounter(counter + 1);
  };

  const handleSubtract = () => {
    // En el caso de no contar con el valor de Counter.
    // Se puede usar un callback que contiene el valor previo al último render.
    // Esto asegura que la operación se realice con el valor más reciente.
    setCounter((prevState) => prevState - 1);
  };

  const handleReset = () => {
    setCounter(initialValue);
  };

  return {
    // Se establecen los valores que se retornan con el custom hook
    // Los valores de retorno van a depender de la logica del custom hook

    // Values
    counter,

    // Methods / Actions
    handleAdd,
    handleSubtract,
    handleReset
  };
};
