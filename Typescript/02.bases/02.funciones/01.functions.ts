(()=> {

    // Una función es un bloque de código reutilizable que realiza una tarea específica
    
    // En TypeScript, las funciones son similares a las de JavaScript, pero con la ventaja de poder tipar los parámetros y el valor de retorno.

    const hero: string = 'Flash';

    function returnName():string {
        return hero;
    }

    const activateBatisignal = ():string => {
        return 'Batiseñar activada!';
    }
    
    console.log(typeof activateBatisignal);

    const heroName = returnName();


})()

/*

Sintaxis básica:

function nombreFuncion(param1: tipo, param2: tipo): tipoRetorno {
  // cuerpo de la función
  return valor;
}


Formas de declarar funciones en typescript:

1. Función declarativa

function saludar(nombre: string): string {
  return `Hola, ${nombre}!`;
}

2. Función expresiva (arrow function)

const saludar = (nombre: string): string => {
  return `Hola, ${nombre}!`;
};

3. Parámetros opcionales (?)

function saludar(nombre: string, apellido?: string): string {
  return apellido ? `${nombre} ${apellido}` : nombre;
}

4. Parámetros con valor por defecto

function saludar(nombre: string = "Mundo"): string {
  return `Hola, ${nombre}!`;
}
  
5. Función sin retorno (void)

function imprimirMensaje(mensaje: string): void {
  console.log(mensaje);
}








*/