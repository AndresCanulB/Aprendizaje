import { useRef } from "react";

export const FocusScreen = () => {
  // Cuando se usa useRef en elementos del DOM se agrega Ref al nombre de la variable
  const inputRef = useRef<HTMLInputElement>(null);

  // Siempre agregar hanlde a la funcionalidad que maneja el evento
  const handleClick = () => {
    console.log(inputRef.current?.value);

    // Mantiene seleccionado el input automaticamente
    inputRef.current?.select();
    // inputRef.current?.focus();
  };

  return (
    <div className="bg-gradient flex flex-col gap-4">
      <h1 className="text-2xl font-thin text-white">Focus Screen</h1>

      {/* Se vincula la referencia del input a la variable inputRef */}
      <input ref={inputRef} type="text" className="bg-white text-black px-4 py-2 rounded-md" autoFocus />

      <button className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer" onClick={handleClick}>
        Set focus
      </button>
    </div>
  );
};
