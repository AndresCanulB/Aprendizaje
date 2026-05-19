/*
Clase 60 - APIs
Vídeo: https://youtu.be/iJvLAZ8MJ2E?t=18710
*/

// 1. Realiza una petición GET con fetch() a JSONPlaceholder y muestra en la consola la lista de publicaciones

let getURL = "https://jsonplaceholder.typicode.com/posts";

// El Fetch retorna una promesa
fetch(getURL)
  .then((response) => {
    // Convertimos la respuesta de la promesa a formato json
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });

// 2. Modifica el ejercicio anterior para que verifique si la respuesta es correcta usando response.ok. Si no lo es, lanza y muestra un error

let errorURL = "https://jsonplaceholder.typicode.com/postss";

fetch(errorURL)
  .then((response) => {
    // El response.ok es true cuando el status de la respuesta es cualquier numero 200...
    if (!response.ok) {
      throw new Error("No se han podido obtener los datos");
    }
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });

// 3. Reescribe el ejercicio 1 usando la sintaxis async/await en lugar de promesas

async function getData() {
  // fetch() devuelve una promesa de una respuesta HTTP.
  const response = await fetch(getURL);

  if (!response.ok) {
    throw new Error("Error al obtener datos");
  }

  // response.json() también devuelve otra promesa.
  // Por eso normalmente hay dos await.
  return await response.json(); // Incluso el último await a veces se omite:

  // return response.json();

  // Porque una función async automáticamente envuelve el retorno en una promesa.
}

getData().then((result) => {
  console.log(result);
});

// 4. Realiza una petición POST a JSONPlaceholder para crear una nueva publicación. Envía un objeto con propiedades como title o body

let postURL = "https://jsonplaceholder.typicode.com/posts/1";

const newPost = {
  userId: 1,
  title: "Este es el título de mi post",
  body: "Este es el cuerpo de mi post",
};

async function postData(object) {
  try {
    const response = await fetch(postURL, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(object),
    });

    // Maneja errores HTTP (404, 500, etc.) al obtener los datos
    if (!response.ok) {
      throw new Error("Error al obtener datos");
    }

    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }

  // Con Fetch API pasa esto:

  // catch captura:

  // errores de red
  // problemas DNS
  // conexión caída
  // errores lanzados manualmente con throw

  // Pero fetch() NO considera un 404 o 500 como error.
}

postData(newPost);

// 5. Utiliza el método PUT para actualizar completamente un recurso (por ejemplo, modificar una publicación) en JSONPlaceholder

let putURL = "https://jsonplaceholder.typicode.com/posts/1";

const newColumns = {
  userId: 2,
  title: "Titulo actualizado",
  body: "Cuerpo del post actualizado",
};

async function putData(object) {
  try {
    const response = await fetch(putURL, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(object),
    });

    // Maneja errores HTTP (404, 500, etc.) al obtener los datos
    if (!response.ok) {
      throw new Error("Error al obtener datos");
    }

    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

putData(newColumns);

// 6. Realiza una petición PATCH para modificar únicamente uno o dos campos de un recurso existente

let patchURL = "https://jsonplaceholder.typicode.com/posts/1";

const newColumn = {
  body: "Cuerpo del post actualizado",
};

async function patchData(object) {
  try {
    const response = await fetch(patchURL, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(object),
    });

    // Maneja errores HTTP (404, 500, etc.) al obtener los datos
    if (!response.ok) {
      throw new Error("Error al obtener datos");
    }

    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

patchData(newColumn);

// 7. Envía una solicitud DELETE a la API para borrar un recurso (por ejemplo, una publicación) y verifica la respuesta

let deleteURL = "https://jsonplaceholder.typicode.com/posts/1";

async function patchData(object) {
  try {
    const response = await fetch(newPOSTURL, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(object),
    });

    // Maneja errores HTTP (404, 500, etc.) al obtener los datos
    if (!response.ok) {
      throw new Error("Error al obtener datos");
    }

    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

patchData(newColumn);

// 8. Crea una función que realice una solicitud GET (la que quieras) a OpenWeatherMap

async function getWeather(city) {
  const apiKey = "4b54b32ca09a4fe0f4ee7c457162fce8";
  const weatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

  try {
    const response = await fetch(weatherURL);
    if (!response.ok) {
      throw new Error("Los datos no se pudieron obtener");
    }
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

getWeather("Madrid");

// 9. Utiliza la PokéAPI para obtener los datos de un Pokémon concreto, a continuación los detalles de la especie y, finalmente, la cadena evolutiva a partir de la especie

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
    console.log("Nombre del pokemon:", data.name);
    const evolutionChainURL = await getSpecie(data.species.url);
    const evolutionData = await getEvolutionChain(evolutionChainURL);
    console.log(evolutionData);
  } catch (error) {
    console.log(error);
  }
}

getPokemon("Pikachu");

// 10. Utiliza una herramienta como Postman o Thunder Client para probar diferentes endpoint de una API
