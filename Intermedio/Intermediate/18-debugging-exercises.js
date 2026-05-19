/*
Clases 74 - Depuración
Vídeo: https://youtu.be/iJvLAZ8MJ2E?t=24329
*/

// 1. Crea un código con un error lógico y usa VS Code para encontrarlo

const pokeURL = "https://pokeapi.co/api/v2/pokemon/";

function getSpecie(url) {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error al obtener los datos de especies");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Datos de la especie:");
        console.log(data);
        resolve(data.evolution_chain.url);
      })
      .catch((error) => reject(error));
  });
}

function getEvolutionChain(url) {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error al obtener los datos de la cadena evolutiva");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Datos de la cadena evolutiva:");
        resolve(data);
      })
      .catch((error) => reject(error));
  });
}

async function getPokemon(pokemon) {
  try {
    const response = await fetch(pokeURL + pokemon);
    if (!response.ok) {
      throw new Error("Los datos del pokemon no se pudieron obtener");
    }
    const data = await response.json();
    console.log("Nombre del pokemon:", data.nombre);
    const evolutionChainURL = await getSpecie(data.species.url);
    const evolutionData = await getEvolutionChain(evolutionChainURL);
    console.log(evolutionData);
  } catch (error) {
    console.log(error);
  }
}

getPokemon("Pikachu");

// 2. Experimenta con breakpoints y observa cómo cambia el flujo de ejecución
