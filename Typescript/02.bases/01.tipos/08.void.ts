(()=> {

    // void representa la ausencia de valor de retorno en una función. 

    // Se usa para indicar explícitamente que una función no devuelve nada.

    function callBatman():void {
        return;
    }

    const callSuperman = ():void => {
        return;
    }


    const a = callBatman()
    console.log(a)


})()

/*

Casos de uso comunes:

✅ Funciones que solo ejecutan algo (side effects)
function logMessage(msg: string): void {
    console.log(msg);
}

✅ Event handlers
function handleClick(event: MouseEvent): void {
    console.log("Clicked!", event);
}

✅ Funciones que modifican estado
function updateUser(id: number): void {
    actualiza base de datos...
}

💡 Regla práctica

Usa : void siempre que tu función esté diseñada para producir un efecto (imprimir, guardar, emitir un evento) en lugar de calcular y devolver un valor.

*/