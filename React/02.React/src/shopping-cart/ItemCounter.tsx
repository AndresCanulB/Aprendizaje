// Un componente es la unidad fundamental de construcción en React.

// Es básicamente una función (o clase) que recibe datos y devuelve JSX (la interfaz que se mostrará en pantalla).

// Son como bloques de LEGO reutilizables para la UI.

// Utilizar rafc para crear un componente automaticamente en un fichero .tsx.

import { useState } from "react";

// import './ItemCounter.css';
import styles from "./ItemCounter.module.css";

// 1️⃣ Se define la "forma" de los props con una interfaz (TypeScript)
interface Props {
  name: string;
  // Para determinar que una propiedad sea opcional se utiliza ? y no va a ser necesario entregar un valor a esta propiedad.
  quantity?: number;

  // Esta forma es recomendable para que sea obligatorio entregar un valor a la propiedad.
  // quantity: number | undefined;
}

// Las props son la forma en que los componentes reciben datos desde su componente padre.

// Son de solo lectura — un componente nunca debe modificar sus propios props.

// Analogía: Si un componente es una función, los props son sus argumentos.

// 2️⃣ Se reciben los props mediante destructuring en la función

// La desestructuracion es recomendable para no escribir props.name, props.quantity, etc. En su lugar se escribe name, quantity, etc.
export const ItemCounter = ({ name, quantity = 1 }: Props) => {
  // Los Hooks son funciones especiales de React que te permiten "enganchar" características de React (como estado, ciclo de vida, contexto) en componentes funcionales.
  // Todo hook empieza con la palabra reservada "use".
  // También se pueden crear hooks propios: Custom Hooks (funciones que empiezan con use y usan otros hooks internamente).

  // El hook useState permite guardar y actualizar el estado local del componente.
  // Este hook guarda un valor que, cuando cambia, hace que React re-renderice el componente.
  // useState retorna una tupla con 2 elementos:
  // 1. El estado actual
  // 2. Una funcion para actualizar el estado
  const [count, setCount] = useState(quantity);

  const handleAdd = () => {
    // Con setCount se puede actualizar el estado, al hacerlo React re-renderiza el componente.
    // Podemos obtener el estado actual del valor usando el nombre de la variable de estado (count).
    setCount(count + 1);
  };

  const handleSubtract = () => {
    if (count === 1) return;

    setCount(count - 1);
  };

  return (
    <section
      className={styles.itemRow}
      // style={{
      //   display: 'flex',
      //   alignItems: 'center',
      //   gap: 10,
      //   marginTop: 10,
      // }}
    >
      <span
        className={styles["item-text"]}
        style={{
          color: count === 1 ? "red" : "black"
        }}
      >
        {name}
      </span>

      {/* Para agregar un evento a un elemento JSX se utiliza on + nombre del evento y se le asigna una funcion CallBack a ejecutar como valor. */}
      <button onClick={handleAdd}>+1</button>

      <span>{count}</span>

      <button onClick={handleSubtract}>-1</button>
    </section>
  );
};
