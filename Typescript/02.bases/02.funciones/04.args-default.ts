(() => {

    // Los parametros por defecto deben ir al final y se marcan con un signo =

    // Los parametros por defecto se usan para agregar el valor en el mismo momento en el que se declara la funcion

    const fullName = ( firstName: string, lastName?:string, upper: boolean = false ): string => {

        if ( upper ) {
            return `${ firstName } ${ lastName || '----' }`.toUpperCase();
        } else {
            return `${ firstName } ${ lastName || '----' }`;
        }


    }

    const name = fullName( 'Tony', 'Stark', true );

    console.log({ name });


})()


