import React, { type FC } from "react";
import type { Gif } from "../../mock-data/gifs.mock";

interface Props {
  gifs: Gif[];
}

// FC significa Functional Component
// Es un tipo de TypeScript que provee React para tipar componentes funcionales
// Es una forma de typar, aunque se puede tipar directamente en los parametros {}: Props
export const TareaGifList: FC<Props> = ({ gifs }) => {
  return (
    <div className="gifs-container">
      {gifs.map((gif) => (
        <div key={gif.id} className="gif-card">
          <img src={gif.url} alt={gif.title} />
          <h3>{gif.title}</h3>
          <p>
            {gif.width}x{gif.height} (1.5mb)
          </p>
        </div>
      ))}
    </div>
  );
};
