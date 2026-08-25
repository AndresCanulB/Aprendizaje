import type { FC } from "react";

interface Props {
  searches: string[];

  // Se puede crear una propiedad que sea funcion.
  // Se establecen el tipo de dato del parametro y su retorno.
  onLabelClicked: (term: string) => void;
}

export const PreviousSearches: FC<Props> = ({ searches, onLabelClicked }) => {
  return (
    <div className="previous-searches">
      <h2>Búsquedas previas</h2>
      <ul className="previous-searches-list">
        {searches.map((term) => (
          // Cuando se implementa una funcion en un prop, debe ir con un arrow function ejectuando la funcion.
          <li key={term} onClick={() => onLabelClicked(term)}>
            {term}
          </li>
        ))}
      </ul>
    </div>
  );
};

/*

Cuando se usa onClick se debe usar un arrow function, ya que los parametros que usan las dos funciones son distintos.

<li onClick={onLabelClicked(term)}> // Incorrecto

<li onClick={() => onLabelClicked(term)}> // Correcto

Cuando los parametros son iguales se puede pasar directamente la referencia sin arrow function.

<PreviousSearches searches={previousTerms} onLabelClicked={handleTermClicked} />

📌 Regla general simplificada

¿Necesitas pasar argumentos propios (como term, id, index)? → Usa arrow function.

¿La función puede recibir directamente lo que el evento le pasa (o nada)? → Puedes pasar la referencia sin arrow function.

*/
