// Javascript tiene un modulo nativo API llamado fetch para hacer peticiones
// El fetch devuelve una promesa

// fetch("https://jsonplaceholder.typicode.com/posts")
//   .then((response) => {
//     return response.json(); // Convertir la respuesta a JSON, esto devuelve una promesa
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// Con async await

async function fetchPosts() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json(); // Convertir la respuesta a JSON, esto devuelve una promesa
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

fetchPosts();

// Top level await
// Se utiliza unicamente con ES Modules
// try {
//   const response = await fetch("https://jsonplaceholder.typicode.com/posts");
//   const data = await response.json(); // Convertir la respuesta a JSON, esto devuelve una promesa
//   console.log(data);
// } catch (error) {
//   console.log(error);
// }
