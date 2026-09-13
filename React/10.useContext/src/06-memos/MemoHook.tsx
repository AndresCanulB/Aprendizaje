import { useCallback, useState } from "react";
import { MyTitle } from "./ui/MyTitle";
import { MySubTitle } from "./ui/MySubTitle";

// Si la funcion esta afuera del componente y no depende de ninguna prop del componente, no se necesita useCallback.
// Si la funcion esta dentro del componente, se necesita useCallback para que no se vuelva a crear en cada render.

// const handleMyApiCall = (myValue: string) => {
//   console.log('Llamar a mi API ' + myValue);
// };

export const MemoHook = () => {
  const [title, setTitle] = useState("Hola");
  const [subTitle, setSubTitle] = useState("Mundo");

  // Los objetos (funciones) rompen la memorizacion de React Memo.
  // Por eso se usa useCallback para memorizar la funcion y recuperar la memorizacion de React.memo.
  const handleMyAPICall = useCallback(() => {
    console.log("Llamar a mi API - ", subTitle);
  }, [subTitle]);

  return (
    <div className="bg-gradient flex flex-col gap-4">
      <h1 className="text-2xl font-thin text-white">MemoApp</h1>

      <MyTitle title={title} />
      <MySubTitle subtitle={subTitle} callMyAPI={handleMyAPICall} />

      <button className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer" onClick={() => setTitle("Hello, " + new Date().getTime())}>
        Cambiar título
      </button>

      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer"
        // onClick={() => setSubTitle('World, ' + new Date().getTime())}
        onClick={() => setSubTitle("World")}
      >
        Cambiar subtitulo
      </button>
    </div>
  );
};

/*

¿Qué es React.memo?

React.memo es un Higher-Order Component (HOC).

Es una función que memoriza un componente. 

Le dice a React: "Solo vuelve a re-renderizar este componente si sus props cambiaron."

¿Qué problema resuelve?

Por defecto, cuando un componente padre se re-renderiza, todos sus hijos se re-renderizan también, aunque sus props sean exactamente las mismas. 

Esto puede ser innecesario y costoso.

¿Cómo funciona?

React.memo envuelve tu componente y antes de re-renderizarlo hace una comparación superficial (shallow comparison) de las props anteriores vs las nuevas:

Props iguales → ❌ No re-renderiza, usa el resultado anterior.

Props diferentes → ✅ Se re-renderiza normalmente.

Ejemplo de React Memo:

Padre: se re-renderiza cada vez que se hace clic en el botón

const App = () => {
  const [contador, setContador] = useState(0);
  return (
    <div>
      <button onClick={() => setContador(c => c + 1)}>
        Clicks: {contador}
      </button>
      <Saludo nombre="Andrés" />
    </div>
  );
};

Hijo: SOLO se re-renderiza si "nombre" cambia

const Saludo = React.memo(({ nombre }: Props) => {
  console.log("🟢 Saludo se renderizó");
  return <h2>Hola, {nombre}</h2>;
});

Ahora, al hacer clic en el botón:

App se re-renderiza ✅

Saludo NO se re-renderiza ✅ (porque nombre sigue siendo "Andrés")

¿Cuándo usarlo?

✅ Componentes que se renderizan frecuentemente con las mismas props

✅ Componentes con renders costosos (listas largas, gráficas, etc.)

❌ No lo uses en todos lados — la comparación de props también tiene un costo. 
Si el componente es simple y ligero, el memo puede ser más costoso que el propio re-render.

⚠️ Cuidado con objetos y funciones

React.memo compara props usando igualdad superficial (===). 

Esto funciona perfecto con strings, números y booleans. 

Pero con objetos y funciones, se crea una nueva referencia en cada render rompiendo la memorizacion:

Solución: usar useCallback para funciones y useMemo para objetos:

const handleClick = useCallback(() => console.log("click"), []);

const estilos = useMemo(() => ({ color: "blue" }), []);

¿Qué es useCallback?

useCallback memoriza una función para que mantenga la misma referencia entre renders, evitando re-renders innecesarios en componentes hijos memorizados.

¿Qué problema resuelve useCallback?

Cada vez que un componente se re-renderiza, todas las funciones declaradas dentro de él se vuelven a crear. 

Aunque tengan el mismo código, son objetos nuevos en memoria.

useCallback memoriza la función y devuelve la misma referencia entre renders, a menos que cambien sus dependencias.

Las dependencias

Si la función usa valores externos, debes declararlos como dependencias. 

La función se re-creará solo cuando esas dependencias cambien:

const filtrar = useCallback((items) => {
  return items.filter(item => item.categoria === categoria);
}, [categoria]); // Se re-crea solo si "categoria" cambia

¿Cuándo usar useCallback?

La función se pasa a un hijo envuelto en React.memo	✅ Sí

La función es dependencia de un useEffect	✅ Sí

La función solo se usa en el mismo componente	❌ No (costo innecesario)

Usar useCallback sin necesidad añade complejidad sin beneficio real, porque React de todas formas tiene que comparar las dependencias en cada render.

*/
