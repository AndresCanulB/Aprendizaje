import { useEffect, useState, type KeyboardEvent } from "react";

interface Props {
  placeholder?: string;

  // onQuery no devuelve nada porque el componente SearchBar solo ejecuta la funcion handleSearch pasandole como parametro el valor.
  onQuery: (query: string) => void;
}

// onQuery es un prop de tipo función que el componente padre pasa para recibir el texto que el usuario escribe.
// Es el canal de comunicación hijo → padre.

export const SearchBar = ({ placeholder = "Buscar", onQuery }: Props) => {
  const [query, setQuery] = useState("");

  // useEffect es un Hook que permite ejecutar código secundario (efectos) después de que React renderiza el componente.
  // Se usa para cosas que no son directamente renderizar UI, como llamadas a APIs, timers, suscripciones, etc.
  // Los efectos tienen que cumplir solo un proposito atomico
  useEffect(() => {
    // Se crea un Debouncer para que la funcion onQuery no se ejecute cada vez que el usuario escribe una letra.
    // Se espera 700ms para que el usuario termine de escribir.
    const timeoutId = setTimeout(() => {
      onQuery(query);
    }, 700);

    // Los efectos tienen un retorno especial que se ejecuta cuando el componente se desmonta o cuando cambia el valor de query.
    return () => {
      // Se limpia el timer para que no se ejecute después de que el componente se desmonta.
      clearTimeout(timeoutId);
    };
  }, [query, onQuery]);

  // Cuando una funcion se encarga de manejar una funcionalidad debe ser nombrada como handle + nombre de la funcionalidad (convención de React)
  const handleSearch = () => {
    // Cuando se establecen eventos en componentes se debe empezar por on (convención de React)
    onQuery(query);
    // setQuery('');
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="search-container">
      {/* Se crea un input controlado */}
      <input type="text" placeholder={placeholder} value={query} onChange={(event) => setQuery(event.target.value)} onKeyDown={handleKeyDown} />
      {/* Como el tipo handleKeyDown es igual a onKeyDown se puede pasar directamente la referencia sin arrow function. */}
      <button onClick={handleSearch}>Buscar</button>
    </div>
  );
};

/*

¿Qué es useEffect?

useEffect es un Hook que permite ejecutar código secundario (efectos) después de que React renderiza el componente. Se usa para cosas que no son directamente renderizar UI, como llamadas a APIs, timers, suscripciones, etc.

Estructura básica

useEffect(() => {
  1️⃣ Código que se ejecuta (el efecto)
  
  return () => {
  2️⃣ Cleanup — se ejecuta antes del próximo efecto o al desmontar
  };
}, [ 3️⃣ dependencias ]);

Las 3 formas según las dependencias

🔁 Sin array — se ejecuta en CADA render
useEffect(() => {
  console.log("Me ejecuto siempre");
});

1️⃣ Array vacío — se ejecuta solo al MONTAR el componente (una vez)
useEffect(() => {
  console.log("Me ejecuto solo al inicio");
}, []);

👀 Con dependencias — se ejecuta cuando cambian esos valores
useEffect(() => {
  console.log("query cambió:", query);
}, [query, onQuery]);

📌 Resumen

useEffect es básicamente: "Cada vez que X cambie, ejecuta este código"

¿Cuándo se usa?

1️⃣ useState => Para guardar datos que cambian en el componente

2️⃣ useEffect => Para ejecutar código en respuesta a cambios (timers, APIs, eventos externos)

*/
