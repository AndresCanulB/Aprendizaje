(() => {

    // Los parametros rest se usan para cuando no sabemos cuantos parametros vamos a recibir

    // Los parametros rest deben ser el ultimo parametro de la funcion

    // A diferencia de los parametros opcionales no podemos poner un ? a los parametros rest

    // Solo puede haber un parametro rest por funcion

    // Los parametros rest se reciben como un array

    const fullName = ( firstName: string, ...restArgs: string[] ): string => {
        return `${ firstName } ${ restArgs.join(' ') }` // El join es un array method para unir elementos de un array 
    }

    

    const superman = fullName( 'Clark','Joseph','Kent' );


    console.log({ superman })


})()