// Fetch API es una interface para hacer peticiones http a servidores
// se ejecuta de forma asíncrona

import type { GiphyRandomResponse, Gif } from "../data/giphy.response";

const API_KEY = "EOkVlTm41v1dJn3aFYvY4GQyrNGHH6RH";

const myRequest = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`);

const createImageInsideDOM = (url: string) => {
  const imgElement = document.createElement("img");
  imgElement.src = url;

  document.body.append(imgElement);
};

myRequest
  // Cuando un .then inmediatamente regresa otra promesa, el resultado pasara al siguiente .then y se formara una cadena de promesas
  .then((response) => response.json()) // Se devuelve una promesa con el body convertido a json
  .then(({ data }: GiphyRandomResponse) => {
    // Se obtiene el resultado de la promesa anterior
    const imageUrl = data.images.original.url;
    createImageInsideDOM(imageUrl);
  })
  .catch((err) => {
    console.error(err);
  });

// Axios es una librería externa para hacer peticiones http a servidores
// Para usar axios, primero hay que instalarlo con el comando: npm install axios
// Luego, se importa con el comando: import axios from 'axios';
