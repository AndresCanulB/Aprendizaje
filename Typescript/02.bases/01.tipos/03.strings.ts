(() => {

    const batman: string = 'Batman';
    const linternaVerde: string = "Linterna Verde";
    const volcanNegro: string = `Héroe: Volcan Negro`;

    console.log(` I'm ${ batman } `);
    console.log( batman.toUpperCase() );


    // Typescript no soluciona todos los errores que podemos crear programando la logica

    // Se utiliza el null check operator para evitar errores de ejecución en tiempo de ejecución, ya que si el valor es null o undefined, no se ejecutará el método y retornará undefined.
    console.log( batman[10]?.toUpperCase() || 'No está presente' )


})()