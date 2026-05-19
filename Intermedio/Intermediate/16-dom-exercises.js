/*
Clase 71 - DOM
Vídeo: https://youtu.be/iJvLAZ8MJ2E?t=23010
*/

// 1. Crea un elemento (por ejemplo, un <h1 id="title">) y cambia su contenido a "¡Hola Mundo!"" al cargar la página

let newH1 = document.createElement("h1");
newH1.textContent = "Primer texto";
let body = document.querySelector("body");

document.addEventListener("DOMContentLoaded", () => {
  newH1.textContent = "¡Hola Mundo!";
  body.prepend(newH1);
});

// 2. Inserta una imagen con id="myImage" y cambia su atributo src a otra URL

let newImage = document.createElement("img");
newImage.setAttribute("id", "myImage");
newImage.setAttribute(
  "src",
  "https://images.ctfassets.net/hrltx12pl8hq/28ECAQiPJZ78hxatLTa7Ts/2f695d869736ae3b0de3e56ceaca3958/free-nature-images.jpg?fit=fill&w=1200&h=630",
);

body.append(newImage);

// 3. Crea un <div id="box"> sin clases y agrega la clase resaltado cuando se cargue la página

let newDiv = document.createElement("div");
newDiv.setAttribute("id", "box");

document.addEventListener("DOMContentLoaded", () => {
  newDiv.setAttribute("class", "resaltado");
  body.prepend(newDiv);
});

// 4. Crea un párrafo con id="paragraph" y cambia su color de texto a azul

let newParagraph = document.createElement("p");
newParagraph.setAttribute("id", "paragraph");
newParagraph.textContent = "Esto es un parrafo";
newParagraph.style.color = "blue";

body.prepend(newParagraph);

// 5. Agrega un botón que, al hacer clic, cree un nuevo elemento <li> con el texto "Nuevo elemento y lo agregue a una lista <ul id="list">

let newList = document.createElement("ul");
newList.setAttribute("id", "list");
let buttonAddLi = document.createElement("button");
buttonAddLi.textContent = "Agregar elemento";
body.prepend(newList);
body.prepend(buttonAddLi);

buttonAddLi.addEventListener("click", () => {
  let newElement = document.createElement("li");
  newElement.textContent = "Nuevo elemento";
  newList.prepend(newElement);
});

// 6. Crea un párrafo con id="deleteParagraph" y un botón. Al hacer clic en el botón, elimina el párrafo del DOM

let paragraphDeleted = document.createElement("p");
paragraphDeleted.setAttribute("id", "deleteParagraph");
paragraphDeleted.textContent = "Esto es un parrafo que se borrará";
let buttonDeleteParagraph = document.createElement("button");
buttonDeleteParagraph.textContent = "Borrar parrafo";

body.prepend(paragraphDeleted);
body.prepend(buttonDeleteParagraph);

buttonDeleteParagraph.addEventListener("click", () => {
  paragraphDeleted.remove();
});

// 7. Crea un <div id="content"> con algún texto y reemplaza su contenido por un <h2> con el mensaje "Nuevo Contenido"

let newDivContent = document.querySelector("#content");

newDivContent.innerHTML = "<h2>Nuevo contenido</h2>";

// 8. Crea un botón con id="greetBtn" y añade un evento que muestre una alerta con el mensaje "¡Hola!" al hacer clic

let msgButton = document.createElement("button");
msgButton.setAttribute("id", "greetBtn");
msgButton.textContent = "Mensaje";
body.prepend(msgButton);

msgButton.addEventListener("click", () => {
  alert("¡Hola!");
});

// 9. Crea un <input id="textInput"> y un <div id="result">. Al escribir en el input, el <div> se debe actualizarse mostrando lo que se escribe

let textInput = document.querySelector("#textInput");
let divResult = document.querySelector("#result");

textInput.addEventListener("input", () => {
  divResult.textContent = textInput.value;
});

// 10. Crea un botón con id="backgroundBtn" y, al hacer clic, cambia el color de fondo del <body> a un color diferente

let backgroundBtn = document.querySelector("#backgroundBtn");

backgroundBtn.addEventListener("click", () => {
  body.style.backgroundColor = "black";
});
