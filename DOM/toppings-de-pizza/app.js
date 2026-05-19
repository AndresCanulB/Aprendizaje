// const contenedor = document.getElementById("contenedor");

// const titulo = document.getElementById("titulo");

// Ver los elementos que contiene el padre en html
// console.log(contenedor.innerHTML);

// Obtener el texto del elemento
// console.log(titulo.innerText);

// Obtener el nombre de la etiqueta
// console.log(titulo.tagName);

// Si se van a obtener muchos elementos, la variable debe ser plural
// const toppings = document.getElementsByClassName("topping");

// Obtener elementos por medio del tag html
// const misToppings = document.getElementsByTagName("li");

// Obtener elemento dependiendo del criterio especifico
// const aceituna = document.querySelector("#aceitunas");

// Se puede personalizar el criterio especifico
// const primerToppingNaranja = document.querySelector("topping.fondo-naranja");

// const primerToppingNaranja = document.querySelector("ul li.fondo-naranja");

// const primerToppingNoMarron = document.querySelector("ul li:not(.fondo-marron)");

// Obtener elementos dependiendo del criterio especifico
// const toppings = document.querySelectorAll(".topping");

// const toppingsNaranja = document.querySelectorAll(".topping.fondo-naranja");

// console.log(toppingsNaranja[0]);
// console.log(toppingsNaranja[1]);

// const primerTopping = document.querySelector(".topping");
// console.log(primerTopping);

// primerTopping.style.backgroundColor = "blue";
// primerTopping.style.color = "#6dff00";
// primerTopping.style.textTransform = "uppercase";

// .getElementById tambien puede retornar una lista si el elemento tiene muchos hijos
const listaDeToppings = document.getElementById("lista-toppings");

// Obtener el texto interno del elemento
console.log(listaDeToppings.innerText);

// Obtiene el texto del html incluyendo espacios de identacion
console.log(listaDeToppings.textContent);

// Obtiene el codigo de html
console.log(listaDeToppings.innerHTML);

// Cambiar el texto

const titulo = document.getElementById("titulo");
titulo.innerText = "Mis toppings favoritos";

// Obtener los valores de los atributos
const enlaces = document.getElementsByTagName("a");

console.log(enlaces[0].removeAttribute("href"));
console.log(enlaces[0].setAttribute("href", "https://www.google.com"));
console.log(enlaces[0].getAttribute("href"));

const primerTopping = document.querySelector(".topping");

// Agregar clases a elemento
primerTopping.classList.add("texto-verde");

// Obtener las clases del elemento
console.log(primerTopping.classList);

// verificar si una clase existe
console.log(primerTopping.classList.contains("fondo-marron"));

// Eliminar una clase de un elemento
primerTopping.classList.remove("texto-verde");

// Crear un elemento
const toppingNuevo = document.createElement("li");

// Agregar clases
toppingNuevo.classList.add("topping", "fondo-marron");

// Agregar texto
toppingNuevo.innerText = "Queso extra";

// Agregar un elemento html o texto
listaDeToppings.append(toppingNuevo); // Agregar al final

// Eliminar elemento
toppingNuevo.remove();

// .appendChild funciona para elementos html
listaDeToppings.appendChild(toppingNuevo);

// Recorrer el DOM hacia arriba
// .parentElement obtiene el padre html del elemento
console.log(listaDeToppings.parentElement);

// .parentNode es mas amplio, un nodo es cualquier elemento html, comentarios y texto plano
console.log(listaDeToppings.parentNode);

// Se puede encadenar los criterios para recorrer el DOM hacia arriba
console.log(listaDeToppings.parentElement.parentElement);

// Recorrer el DOM hacia abajo
// .children nos va a dar todos los nodos hijos en una coleccion html
console.log(listaDeToppings.children);

// Obtener el primer nodo hijo entre texto plano, espacios y elementos html
console.log(listaDeToppings.firstChild);

// Obtiene el primer elemento html por indice
console.log(listaDeToppings.children[0]);

// Obtiene el primer elemento html corectamente
console.log(listaDeToppings.firstElementChild);

// Ultimo elemento html
console.log(listaDeToppings.lastElementChild);

// Obtiene el nodo hermano anterior
console.log(listaDeToppings.previousSibling);

// Obtiene el nodo hermano posterior
console.log(listaDeToppings.nextSibling);

// Obtiene el elemento hermano anterior del elemento que estamos usando
console.log(listaDeToppings.previousElementSibling);

// Obtiene el elemento hermano posterior
console.log(listaDeToppings.nextElementSibling);

// Se puede concatenar los criterios de busqueda en el recorrido del DOM
console.log(listaDeToppings.firstElementChild.firstElementChild);

// Eventos

// Existen cuatro conceptos importantes

// Elemento target (Elemento objetivo) : Recibe la accion que desencadena el evento

// Trigger (Disparador) : Accion que desencadena el evento

// Event handler : Funcion que se ejecuta cuando ocurre un evento

// Event listener : Es la asociacion de un evento especifico en un elemento y la funcion que lo va a manejar

const toppings = document.getElementsByClassName("topping");

// Event handler
// function mostrarClick(e) {
//   El parametro e es el valor que se recibio del evento
//   console.log(e.target.innerText);
// }

// for (const topping of toppings) {
// Event listener
//   topping.addEventListener("click", mostrarClick); // No se deben incluir los parentesis en la funcion
// }

// Con arrow functions

for (const topping of toppings) {
  topping.addEventListener("click", (e) => {
    console.log(e.target.innerText);
  });
}
