import { useCounter } from "../hooks/useCounter";

export const MyCounterApp = () => {
  // Se obtienen los valores de retorno del custom hook por medio de la desestructuracion
  // En este caso se desestructura como un objeto {}, en caso de un arreglo [], o un tipo primitivo solo se usa una variable.
  const { counter, handleAdd, handleReset, handleSubtract } = useCounter(5);
  // En un custom hook se pueden pasar valores por medio de parametros en este caso useCounter(5)

  /*   
    No se pueden meter custom hooks dentro de condicionales, es mala practica.
    if (true) {  
      const { counter, handleAdd, handleReset, handleSubtract } = useCounter(5);
    }
   */

  // Los hooks son posicionales, primero se deben agregar hooks de estado y luego hooks de efectos.

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <h1>counter: {counter}</h1>

      <div style={{ display: "flex", gap: "10px" }}>
        <button onClick={handleAdd}>+1</button>
        <button onClick={handleSubtract}>-1</button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
};

/*

¿Qué es un Custom Hook en React?

Un custom hook es una función de React que reutiliza lógica con estado entre componentes.

Su nombre siempre empieza con use (por convención y requisito de React).

¿Por qué usarlos?

- Extraer lógica repetida de los componentes en una función reutilizable.

- Separar responsabilidades: el componente se enfoca en la UI, el hook en la lógica.

- Composición: puedes combinar hooks nativos (useState, useEffect, etc.) dentro de tu custom hook.

Reglas clave

- Prefijo use: Siempre nombrarlos con use al inicio

- Solo en el nivel superior: No llamarlos dentro de loops, condicionales o funciones anidadas

- Usan otros hooks: Pueden usar useState, useEffect, useRef, otros custom hooks, etc.

- Estado independiente: Cada componente que usa el hook obtiene su propia copia del estado

¿Cuándo crear uno?

Cuando dos o más componentes comparten la misma lógica con estado.

Cuando un componente tiene demasiada lógica y quieres simplificarlo.

Para encapsular side effects complejos (fetch de datos, suscripciones, timers, etc.).

*/
