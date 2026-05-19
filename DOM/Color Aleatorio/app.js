// Seleccionar los elementos del DOM

const boton = document.getElementById("boton-color");

const color = document.getElementById("color");

function generarColorHexAleatorio() {
  let digitos = "0123456789ABCDEF";
  let colorHex = "#";

  for (let i = 0; i < 6; i++) {
    let indiceAleatorio = Math.floor(Math.random() * 16);
    // Math.random retorna un numero aleatorio entre el cero y el uno
    // Se multiplica por 16 porque es la cantidad de digitos de la lista digitos
    // Math.floor redondea el numero que se retorna
    colorHex += digitos[indiceAleatorio];
  }

  return colorHex;
}

boton.addEventListener("click", () => {
  let colorAleatorio = generarColorHexAleatorio();
  // Actualizar el texto
  color.textContent = colorAleatorio;
  // Actualizar el color de fondo
  document.body.style.backgroundColor = colorAleatorio;
});
