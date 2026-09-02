import { useEffect, useState } from "react";

const colors = {
  red: "bg-red-500 animate-pulse",
  yellow: "bg-yellow-500 animate-pulse",
  green: "bg-green-500 animate-pulse"
};

type TrafficLightColor = keyof typeof colors;

const useTareaTraficLight = () => {
  const [light, setLight] = useState<TrafficLightColor>("red");
  const [countdown, setCountdown] = useState(5);

  // Cada useEffect debe tener un unico proposito atomico

  // Countdown effect
  useEffect(() => {
    // Caso base de la recursion
    if (countdown === 0) return;

    // Caso recursivo que decrementa el contador cada segundo
    const intervalId = setInterval(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);

    // Limpieza del efecto para que no se acumulen los intervalos
    return () => {
      clearInterval(intervalId);
    };
  }, [countdown]);

  // Change light color effect
  useEffect(() => {
    if (countdown > 0) return;

    setCountdown(5);

    if (light === "red") {
      setLight("green");
      return;
    }

    if (light === "yellow") {
      setLight("red");
      return;
    }

    if (light === "green") {
      setLight("yellow");
      return;
    }
  }, [countdown, light]);

  return {
    // Values
    colors,
    light,
    countdown

    // Methods
  };
};

export default useTareaTraficLight;
