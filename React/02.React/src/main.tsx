import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { FirstStepsApp } from "./FirstStepsApp";
import { MyAwesomeApp } from "./MyAwesomeApp";
// import { MyAwesomeApp } from './MyAwesomeApp';

// Cuando se trabaja con react, se debe de retornar un unico elemento html, por eso se envuelve siempre en un <div> o <>
createRoot(document.getElementById("root")!).render(
  // StrictMode renderiza componentes en un contexto especial que detecta problemas potenciales
  // como efectos secundarios inesperados o clases obsoletas.
  <StrictMode>
    <FirstStepsApp />
    <MyAwesomeApp />
  </StrictMode>
);
