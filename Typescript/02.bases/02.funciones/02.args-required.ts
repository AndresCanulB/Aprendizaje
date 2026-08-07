(() => {

    // En Typescript debemos declarar el tipo de dato de los parametros por defecto son obligatorios 

    const fullName = ( firstName: string, lastName:string ): string => {

        return `${ firstName } ${ lastName }`;

    }

    const name = fullName( 'Tony', 'Stark' );

    console.log({ name });


})()


