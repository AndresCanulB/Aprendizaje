import axios from "axios";
import { Pokemon } from "../interfaces";

export const getPokemon = async (pokemonId: number): Promise<Pokemon> => {
  const { data } = await axios.get<Pokemon>(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
  // console.log( data )

  return data;
};

getPokemon(5)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("Fin de la ejecución");
  });
