// Si las variables no cambian se deben de dejar fuera del componente para evitar renderizados innecesarios

import type { CSSProperties } from "react";

// Si son datos que van a cambiar se debe de usar useState
const fistName = "Andres";
const lastName = "Canul";
const isActive = true;
const age = 25;
const address = {
  zipCode: "97205",
  city: "Merida",
  country: "Mexico"
};

const favoriteGames = ["Mario", "Zelda", "Pokemon", " Smash Bros"];

// Se crea un objeto con estilos para poder usarlo en el componente
// Si esta afuera del componente es necesario importar la interface CSSProperties para que funcione el Intellisense
const myStyle: CSSProperties = {
  backgroundColor: isActive ? "green" : "red",
  margin: "10px"
};

export function MyAwesomeApp() {
  return (
    <>
      {/* Se pueden agregar estilos condicionales en JSX */}
      <h1 style={{ backgroundColor: isActive ? "green" : "red" }}>{fistName}</h1>
      {/* O se puede crear un objeto con estilos y agregarlo */}
      <h3 style={myStyle}>{lastName}</h3>
      <p>{favoriteGames.join(", ")}</p>
      <p>{2 + 2}</p>
      <p>{age}</p>
      {/* El valor booleano no tiene una representacion visual en HTML, si queremos mostrarlo debemos de convertirlo en un string */}
      <p>{isActive ? "Activo" : "Inactivo"}</p>
      {/* No se puede usar un objeto directamente en JSX React, se debe de convertir a un json, string o a un array */}
      {/* <p>{address}</p> */}
      <p>{JSON.stringify(address)}</p>
    </>
  );
}
