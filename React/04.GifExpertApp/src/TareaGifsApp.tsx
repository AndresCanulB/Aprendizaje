import React from "react";
import TareaPreviousSearches from "./gifs/components/TareaPreviousSearches";
import TareaSearch from "./shared/components/TareaSearch";
import { TareaGifList } from "./gifs/components/TareaGifList";
import { mockGifs } from "./mock-data/gifs.mock";
import { CustomHeader } from "./shared/components/CustomHeader";

const previousSearches = ["PewPew", "Naruto", "Dragon Ball"];

const handleSearch = (query: string = "") => {
  if (query === "") return;

  query = query.toLowerCase().trim();

  if (!previousSearches.includes(query)) previousSearches.unshift(query);

  if (previousSearches.length > 8) previousSearches.pop();
};

export const GifsApp = () => {
  return (
    <>
      {/* Header */}
      <CustomHeader title="Buscador de Gifs" description="Descubre y comparte el Gif perfecto" />

      {/* Search */}
      <TareaSearch placeholder="Busca lo que quieras" buttonName="Buscar" onQuery={handleSearch} />

      {/* Búsquedas previas */}
      <TareaPreviousSearches title="Búsquedas previas" searches={previousSearches} />

      {/* Gifs */}
      <TareaGifList gifs={mockGifs} />
    </>
  );
};
