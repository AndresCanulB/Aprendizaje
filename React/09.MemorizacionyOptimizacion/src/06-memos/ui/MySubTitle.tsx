import { memo } from "react";

interface Props {
  subtitle: string;

  // callMyAPI: (myValue: string) => void;
  callMyAPI: () => void;
}

// Se puede desestructurar y llamar la funcion memo de React directamente.
export const MySubTitle = memo(({ subtitle, callMyAPI }: Props) => {
  console.log("MySubTitle re-render");

  return (
    <>
      <h6 className="text-2xl font-bold">{subtitle}</h6>

      <button className="bg-indigo-500 text-white px-2 py-1 rounded-md cursor-pointer" onClick={callMyAPI}>
        Llamar a función
      </button>
    </>
  );
});
