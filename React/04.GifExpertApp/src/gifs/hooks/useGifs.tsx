import { useState } from "react";
import type { Gif } from "../interfaces/gif.interface";
import { getGifsByQuery } from "../actions/get-gifs-by-query.action";

const useGifs = () => {
  const [gifs, setGifs] = useState<Gif[]>([]);

  // Se establece un useState para los terminos de busqueda.
  // Usestate es el Hook que permite guardar y manejar el estado dentro de un componente
  // <string[]> es la anotacion que indica que el estado es un array de strings
  // ([]) es el valor inicial del estado, que en este caso es un array vacio
  const [previousTerms, setPreviousTerms] = useState<string[]>([]);

  const handleTermClicked = (term: string) => {
    console.log({ term });
  };

  // El componente hijo "SearchBar" es el que va a ejecutar la funcion y enviar el valor del parametro
  const handleSearch = async (query: string = "") => {
    query = query.trim().toLowerCase();

    if (query.length === 0) return;

    if (previousTerms.includes(query)) return;

    setPreviousTerms([query, ...previousTerms].splice(0, 8));

    const gifs = await getGifsByQuery(query);
    setGifs(gifs);
  };

  return {
    // Values
    gifs,
    previousTerms,

    // Methods
    handleTermClicked,
    handleSearch
  };
};

export default useGifs;
