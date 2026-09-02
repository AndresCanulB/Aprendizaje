import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// import { HooksApp } from './HooksApp';
// import { TrafficLight } from './01-useState/TrafficLight';
// import { TrafficLightWithEffect } from './02-useEffect/TrafficLightWithEffect';
// import { TrafficLightWithHook } from './02-useEffect/TrafficLightWithHook';
// import { PokemonPage } from './03-examples/PokemonPage';
// import { FocusScreen } from "./04-useRef/FocusScreen";
// import { Tarea_TrafficLight } from "./01-useState/Tarea_TrafficLight";

import "./index.css";
import { Tarea_TrafficLightWithEffect } from "./02-useEffect/Tarea_TrafficLightWithHook";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* <HooksApp /> */}
    {/* <TrafficLight /> */}
    {/* <TrafficLightWithEffect /> */}
    {/* <TrafficLightWithHook /> */}
    {/* <PokemonPage /> */}
    {/* <FocusScreen /> */}
    {/* <Tarea_TrafficLight /> */}
    <Tarea_TrafficLightWithEffect />
  </StrictMode>
);
