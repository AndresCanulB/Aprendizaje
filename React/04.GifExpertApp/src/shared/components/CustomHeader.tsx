interface Props {
  title: string;
  description?: string;
}

export const CustomHeader = ({ title, description }: Props) => {
  return (
    <div className="content-center">
      <h1>{title}</h1>
      {/* renderizado condicional con el operador lógico AND (&&) (Es una abreviatura de un ternario) */}
      {/* {description ? <p>{description}</p> : null} */}
      {/* En resumen: es una forma elegante de decir "solo muestra el <p> si description tiene un valor". */}
      {description && <p>{description}</p>}
    </div>
  );
};
