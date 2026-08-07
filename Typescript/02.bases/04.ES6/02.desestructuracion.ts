(() => {
  // La desestructuracion es una forma de extraer valores de un objeto o un array

  // En la desestructuracion de objetos, las propiedades deben coincidir con el nombre de las variables, pero su posicion no importa

  // En la desestructuracion de arrays, los valores se extraen en el orden en que se encuentran, pero sus nombres no importan

  // Se puede usar : para cambiar el nombre de la variable

  type Avengers = {
    nick: string;
    ironman: string;
    vision: string;
    activo: boolean;
    poder: number;
  };

  const avengers: Avengers = {
    nick: "Samuel L. Jackson",
    ironman: "Robert Downey Jr.",
    vision: "Paul Bettany",
    activo: true,
    poder: 1500.123123
  };

  const { poder, vision } = avengers;

  console.log(poder.toFixed(2), vision.toUpperCase());

  const printAvenger = ({ ironman, ...resto }: Avengers) => {
    console.log(ironman, resto);
  };

  // printAvenger( avengers );

  const avengersArr: [string, boolean, number] = ["Cap. América", true, 150.15];

  const [capitan, ironman, seriaUnNumero] = avengersArr;
  // console.log({ ironman, capitan })
})();
