import { GifList } from "./gifs/components/GifList";
import { PreviousSearches } from "./gifs/components/PreviousSearches";
import useGifs from "./gifs/hooks/useGifs";

import { CustomHeader } from "./shared/components/CustomHeader";
import { SearchBar } from "./shared/components/SearchBar";

export const GifsApp = () => {
  const { gifs, previousTerms, handleSearch, handleTermClicked } = useGifs();

  return (
    <>
      {/* Header */}
      <CustomHeader title="Buscador de Gifs" description="Descubre y comparte el Gif perfecto" />

      {/* Search */}
      {/* El componente padre envia una funcion como prop para que sea el componente hijo el que la ejecute */}
      <SearchBar placeholder="Busca lo que quieras" onQuery={handleSearch} />

      {/* Búsquedas previas */}
      <PreviousSearches searches={previousTerms} onLabelClicked={handleTermClicked} />

      {/* Gifs */}
      <GifList gifs={gifs} />
    </>
  );
};

/*

Los props van de padre a hijo, pero cuando se envia una funcion como prop ocurre algo especial.

 ─── PADRE (GifsApp.tsx) ───────────────────────────────

const handleSearch = (query: string) => {
                          ↑
                  Este parámetro lo llenará el hijo
    console.log(query); // "cats" ← lo recibe del hijo
};
<SearchBar onQuery={handleSearch} />
                 ↑
   Le entrega la función al hijo para que la ejecute

 ─── HIJO (SearchBar.tsx) ──────────────────────────────

 El hijo tiene el texto "cats" en su estado
const [query, setQuery] = useState("cats");

 El hijo EJECUTA la función del padre pasándole el texto
onQuery(query);
        ↑
      "cats" — el hijo llena el parámetro

Analogía del mensajero 📬
Imagina que el padre le da al hijo una nota en blanco con instrucciones:

"Cuando tengas el texto listo, escríbelo aquí y entrégame la nota"

Padre → le pasa la función (nota en blanco) → Hijo
Padre ←   hijo llama onQuery("cats")        ← Hijo
          (devuelve la nota con el texto)
          
El padre no "recibe un prop de vuelta", sino que su propia función se ejecuta desde el hijo y al hacerlo, el dato llega al parámetro.

*/
