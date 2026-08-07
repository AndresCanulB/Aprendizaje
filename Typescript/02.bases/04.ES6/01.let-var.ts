(() => {
  // Siempre se debe usar constantes Const

  // Si se observa que el contenido puede cambiar, se puede usar Let

  // console.log(a);

  const nombre: string = "Fernando";

  const getName = (): void => {
    console.log("viejo getName");
  };

  // getName = () => { console.log('Nuevo getName') };
  // getName()
})();
