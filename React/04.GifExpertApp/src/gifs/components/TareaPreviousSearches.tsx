import React from "react";

interface Props {
  title: string;
  searches: string[];
}

const TareaPreviousSearches = ({ title, searches }: Props) => {
  return (
    <div className="previous-searches">
      <h2>{title}</h2>
      <ul className="previous-searches-list">
        {/* Cuando se usa .map siempre se debe retornar los resultados en React 
        {searches.map((search) => {
          return <li>{search}</li>;
        })}
        */}
        {/* Otra sintaxis equivalente */}
        {searches.map((term) => (
          <li key={term}>{term}</li>
        ))}
      </ul>
    </div>
  );
};

export default TareaPreviousSearches;
