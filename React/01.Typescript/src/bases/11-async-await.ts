// La sintaxis async/await es una forma más limpia y legible de manejar promesas
// Su objetivo es hacer que el codigo que maneja promesas se vea como codigo sincrono y se lea secuencialmente

import type { GiphyRandomResponse, Gif } from "../data/giphy.response";

const API_KEY = "EOkVlTm41v1dJn3aFYvY4GQyrNGHH6RH";

const createImageInsideDOM = (url: string) => {
  const imgElement = document.createElement("img");
  imgElement.src = url;

  document.body.append(imgElement);
};

// La palabra reservada 'async' se utiliza para declarar una función como asíncrona
const getRandomGifUrl = async (): Promise<string> => {
  // La palabra reservada 'await' se utiliza para esperar a que una promesa se resuelva
  const response = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`);

  // Para que no se repita una propiedad con el mismo nombre que la variable, se desestructura la variable y se soluciona el problema
  const { data }: GiphyRandomResponse = await response.json();

  return data.images.original.url;
};

// getRandomGifUrl().then((url) => {
//   createImageInsideDOM(url);
// });

// Si existe un parametro que unicamente es enviado a una funcion, no es necesario agregarlo
// Y se pasa directamente la funcion como parametro al .then (en caso de que solo se use un parametro)
getRandomGifUrl().then(createImageInsideDOM);
