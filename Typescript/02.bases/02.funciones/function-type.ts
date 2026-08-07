(() => {

    // Un Function Type es una forma de declarar el tipo de una variable indicando que esa variable debe almacenar una función con una firma específica (parámetros y tipo de retorno).

    // Permiten tipar variables que guardan funciones, asegurando que solo se asignen funciones con la firma correcta (número de parámetros, tipos y valor de retorno)

    // TypeScript te dará un error en tiempo de compilación si intentas asignar una función incompatible.

    const addNumbers = ( a: number, b: number ) => a + b;
    const greet = ( name: string ) => `Hola ${ name }`;
    const saveTheWorld = () => `El mundo está salvado!`;

    // Estamos declarando una variable de tipo de dato funcion
    let myFunction: () => string;

    //* myFunction = 10;
    //* console.log(myFunction)

    // myFunction = addNumbers
    // console.log( myFunction(1, 2) )
    
    //? myFunction = greet
    //? console.log( myFunction( 'Fernando' ) )

    myFunction = saveTheWorld
    console.log( myFunction() )

    

})()