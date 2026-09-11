import { useCounter } from "@/hooks/useCounter";
import { useMemo } from "react";

const heavyStuff = (iterationNumber: number) => {
  console.time("Heavy_stuff_started");

  for (let index = 0; index < iterationNumber; index++) {
    console.log("ahí vamos...");
  }

  console.timeEnd("Heavy_stuff_started");

  return `${iterationNumber} iteraciones realizadas`;
};

export const MemoCounter = () => {
  const { counter, increment } = useCounter(40_000);
  const { counter: counter2, increment: increment2 } = useCounter(10);

  // useMemo espera dos argumentos:
  // 1. La función que devuelve el valor memorizado
  // 2. Las dependencias, si cambian se re-ejecuta la función
  const myHeavyValue = useMemo(() => heavyStuff(counter), [counter]);

  return (
    <div className="bg-gradient flex flex-col gap-4">
      <h1 className="text-2xl font-bold">Memo - useMemo - {myHeavyValue}</h1>
      <hr />

      <h4>Counter: {counter}</h4>
      <h4>Counter2: {counter2}</h4>

      <button className="bg-blue-500 text-white px-4 rounded-md py-2 cursor-pointer" onClick={increment}>
        +1
      </button>
      <button className="bg-blue-500 text-white px-4 rounded-md py-2 cursor-pointer" onClick={increment2}>
        +1 - Counter2
      </button>
    </div>
  );
};

/*

¿Qué es useMemo?

useMemo memoriza el resultado de un cálculo para no repetirlo innecesariamente entre renders, recalculando solo cuando cambian sus dependencias.

¿Qué problema resuelve useMemo?

Cada vez que un componente se re-renderiza, todo el código dentro de él se vuelve a ejecutar. 

Esto incluye cálculos costosos que podrían dar el mismo resultado si sus datos no cambiaron.

useMemo memoriza el resultado de un cálculo y solo lo recalcula cuando cambian sus dependencias.

const valorMemorizado = useMemo(() => calcular(), [dependencias]);

Otro uso: estabilizar referencias

Los objetos y arrays se re-crean en cada render (igual que las funciones). useMemo mantiene la misma referencia

❌ Objeto nuevo en cada render → rompe React.memo en hijos
const estilos = { color: "blue", fontSize: 20 };

✅ Misma referencia entre renders
const estilos = useMemo(() => ({ color: "blue", fontSize: 20 }), []);

⚠️ Cuándo NO usarlo

Cálculos costosos (loops grandes, transformaciones pesadas)	✅ Sí

Objetos/arrays pasados a hijos con React.memo	✅ Sí

Cálculos simples (sumas, concatenaciones)	❌ No

Valores primitivos que no cambian	❌ No

Usar useMemo en cálculos triviales añade overhead sin beneficio, porque la comparación de dependencias también tiene un costo.

*/
