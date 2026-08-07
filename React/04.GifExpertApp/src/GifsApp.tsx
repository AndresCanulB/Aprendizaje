// Nombrar siempre el componente principal como el nombre del proyecto

// import { useState } from "react";

import { GifList } from "./gifs/components/GifList";

import { CustomHeader } from "./shared/components/CustomHeader";
import CustomSearch from "./shared/components/CustomSearch";

// import { getGifsByQuery } from "./gifs/actions/get-gifs-by-query.action";
// import type { Gif } from "./gifs/interfaces/gif.interface";

export const GifsApp = () => {
  // const [gifs, setGifs] = useState<Gif[]>([]);
  // const [previousTerms, setPreviousTerms] = useState<string[]>([]);
  //
  // const handleTermClicked = (term: string) => {
  //   console.log({ term });
  // };

  // const handleSearch = async (query: string = "") => {
  //   query = query.trim().toLowerCase();
  //
  //   if (query.length === 0) return;
  //
  //   if (previousTerms.includes(query)) return;
  //
  //   setPreviousTerms([query, ...previousTerms].splice(0, 8));
  //
  //   const gifs = await getGifsByQuery(query);
  //   setGifs(gifs);
  // };

  return (
    <>
      {/* Header */}
      <CustomHeader title="Buscador de Gifs" description="Descubre y comparte el Gif perfecto" />

      {/* Search */}
      <CustomSearch></CustomSearch>

      {/* Búsquedas previas */}

      {/* Gifs */}
      {/* <GifList gifs={gifs} /> */}
    </>
  );
};
