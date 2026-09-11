import React from "react";

interface Props {
  title: string;
}

// Se llama a la funcion memo de React, la cual su argumento es un functional component.
// Esto hace que el componente sea "memorizado" y no se vuelva a renderizar si sus props no cambian.
export const MyTitle = React.memo(({ title }: Props) => {
  console.log("MyTitle re-render");

  return <h1 className="text-3xl">{title}</h1>;
});
