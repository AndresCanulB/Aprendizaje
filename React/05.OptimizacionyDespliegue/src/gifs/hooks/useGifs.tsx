import { useRef, useState } from "react";
import { getGifsByQuery } from "../actions/get-gifs-by-query.action";
import type { Gif } from "../interfaces/gif.interface";

// Cuando una funcion dispatcher como useState cambia de estado, todo el componente vuelve a renderizarse.
// Los valores normales de las variables dentro del componente se pierden en cada render.
// Solo los valores de los useState conservan sus valores entre renderizados.
// Por eso si se necesita que una variable normal guarde sus valores se debe sacar del ciclo de vida del componente.
// const gifsCache: Record<string, Gif[]> = {};

export const useGifs = () => {
  const [gifs, setGifs] = useState<Gif[]>([]);
  const [previousTerms, setPreviousTerms] = useState<string[]>([]);

  // useRef crea una referencia mutable que persiste durante el ciclo de vida, sin provocar re-renders cuando valores cambian.
  // Record<Keys, Type> es un Utility Type que se utiliza para definir el tipo de un objeto (diccionario o mapa clave-valor)
  const gifsCache = useRef<Record<string, Gif[]>>({});

  const handleTermClicked = async (term: string) => {
    // Se verifica si el termino de busqueda "Query" existe como clave del Record.
    if (gifsCache.current[term]) {
      // Si existe la clave, se muestra el array de Gifs correspondiente a ese termino.
      setGifs(gifsCache.current[term]);
      return;
    }

    // Si no existe la clave, se busca en la API y se muestran los Gifs.
    const gifs = await getGifsByQuery(term);
    setGifs(gifs);
  };

  const handleSearch = async (query: string = "") => {
    query = query.trim().toLowerCase();

    if (query.length === 0) return;

    if (previousTerms.includes(query)) return;

    setPreviousTerms([query, ...previousTerms].splice(0, 8));

    const gifs = await getGifsByQuery(query);
    setGifs(gifs);

    // Se guarda el termino de busqueda "Query" como clave del Record y el array de Gifs como valor.
    gifsCache.current[query] = gifs;
    console.log(gifsCache);
  };

  return {
    // Properties
    gifs,

    // Methods
    handleSearch,
    handleTermClicked,
    previousTerms
  };
};

/*

¿Que es useRef en React?

useRef es un Hook que te da una "caja" donde puedes guardar un valor que:

1. Persiste entre renders — no se pierde cuando el componente se re-renderiza (a diferencia de una variable normal).

2. No provoca re-renders — cambiar su valor no causa que el componente se vuelva a pintar (a diferencia de useState).

¿Qué es .current en useRef?

Cuando llamas useRef, React te devuelve un objeto { current: valorInicial }. 

Lo que React crea internamente es esto:

gifsCache = { current: {} }

React internamente guarda la referencia a ese objeto y en cada render te devuelve el mismo objeto. 

Como es el mismo objeto en memoria, cualquier cosa que hayas puesto en .current sigue ahí.

Casos de uso comunes de useRef

1. Guardar referencias al DOM — acceder directamente a un elemento HTML:

  const inputRef = useRef<HTMLInputElement>(null);

  ...

  <input ref={inputRef} />
  
  inputRef.current?.focus();

  ...

2. Guardar valores mutables (como tu caché, timers, IDs de intervalos):

  const timerId = useRef<number>();
  timerId.current = setTimeout(() => {}, 1000);

3. Guardar el valor anterior de un estado:

  const prevCount = useRef(count);
  useEffect(() => { prevCount.current = count; });

Regla de oro

  - Usa useState cuando el valor debe reflejarse en la UI.

  - Usa useRef cuando necesitas persistir un valor sin afectar la UI.

En resumen: useRef es como tener una variable de instancia (como en clases) pero en componentes funcionales — vive mientras el componente exista y cambiarla es "invisible" para React.



Qué es un Record en TypeScript?

Record<Keys, Type> es un Utility Type de TypeScript que se utiliza para definir el tipo de un objeto (diccionario o mapa clave-valor) donde:

El primer parámetro (Keys) define el tipo de las claves/propiedades.

El segundo parámetro (Type) define el tipo de los valores.

Record<string, Gif[]>

Significa: Un objeto donde las claves son strings y los valores son arrays de Gifs.



*/
