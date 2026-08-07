(() => {
  // El for of se puede usar para iterar sobre arrays, strings, mapas, sets

  // A diferencia del for in que itera sobre las propiedades de un objeto

  type Avenger = {
    name: string;
    weapon: string;
  };

  const ironman: Avenger = {
    name: "Ironman",
    weapon: "Armorsuit"
  };

  const captainAmerica: Avenger = {
    name: "Capitán América",
    weapon: "Escudo"
  };

  const thor: Avenger = {
    name: "Thor",
    weapon: "Mjolnir"
  };

  const avengers: Avenger[] = [ironman, thor, captainAmerica];

  for (const avenger of avengers) {
    console.log(avenger.name, avenger.weapon);
  }
})();
