(() => {
  // Se recomienda nunca usar el tipo any

  let avenger: any = 123;
  let exists;
  let power;

  avenger = "Dr Strange";
  // console.log( avenger.charAt(0) );

  // Se utiliza Casting de tipos
  // Sirve para decirle a Typescript que un tipo de dato es otro tipo de dato, pero no lo convierte, solo le dice a Typescript que lo trate como otro tipo de dato.
  // Esta tecnica no es recomendable, ya que puede generar errores en tiempo de ejecución si el tipo de dato no es el esperado.
  console.log((avenger as string).charAt(0));

  avenger = 150.23256415;
  console.log(<number>avenger.toFixed(2));

  console.log(exists);
  console.log(power);
})();
