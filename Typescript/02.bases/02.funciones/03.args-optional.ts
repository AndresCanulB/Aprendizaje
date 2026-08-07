(() => {

    // Los parametros opcionales deben ir al final y se marcan con un signo ?

    // En javascript todos los parametros son opcionales, pero en typescript no lo son

    const fullName = ( firstName: string, lastName?:string ): string => {

        return `${ firstName } ${ lastName || '----' }`;

    }

    const name = fullName( 'Tony' );

    console.log({ name });


})()


