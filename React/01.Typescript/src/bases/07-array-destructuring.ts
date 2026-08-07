const characterNames = ["Goku", "Vegeta", "Trunks"];

// En los arreglos es importante la posicion, por eso se usan las comas para saltar los elementos que no se quieren
const [, , trunks] = characterNames;

console.log({ trunks });

const returnsArrayFn = () => {
  // Al declararlo como const, se fuerza a que el tipo de dato sea correcto
  return ["ABC", 123] as const;
};

const [letters, numbers] = returnsArrayFn();

console.log(letters, numbers);

/*

🧠 Tarea: Implementar useState
Crea una función llamada useState. Debe cumplir con los siguientes requisitos:

Requisitos
La función debe llamarse useState.

Debe retornar un arreglo con dos elementos:

#1 - Un string (el valor inicial).

#2 - Una función anónima de flecha que:

Recibe un string.
Imprime ese string en consola.

Ejemplo de uso esperado
const [name, setName] = useState('Goku');
console.log(name);       // Goku
setName('Vegeta');       // Imprime "Vegeta"

🛠️ Tips
No olvidar usar as const para decir que siempre regresará una estructura predefinida el arreglo.

*/

function useState(name: string) {
  return [name, (text: string) => console.log(text)] as const;
}

const [name, setName] = useState("Goku");
console.log(name); // Goku
setName("Vegeta"); // Imprime "Vegeta"
