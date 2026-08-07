import { ItemCounter } from "./shopping-cart/ItemCounter";

interface ItemInCart {
  productName: string;
  quantity: number;
}

const itemsInCart: ItemInCart[] = [
  { productName: "Nintendo Switch 2", quantity: 1 },
  { productName: "Pro Controller", quantity: 2 },
  { productName: "Super Smash", quantity: 5 }
];

export function FirstStepsApp() {
  return (
    <>
      <h1>Carrito de compras</h1>

      {/* Usar .map para iterar sobre un array y renderizar muchos elementos iguales, para evitar la repeticion de codigo */}
      {itemsInCart.map(({ productName, quantity /* Usar desestructuracion cuando hay menos de 3 props */ }) => (
        // () Retorno implicito en funciones flecha, se usa para retornar un solo elemento.
        // {} Retorno explicito en funciones flecha, se usa cuando tienes lógica antes del return.
        <ItemCounter key={productName} name={productName} quantity={quantity} />
        // Cada elemento renderizado con .map debe tener una key unica, en este caso usamos el nombre del producto.
        // Esto ayuda a React a identificar cada elemento y a actualizarlo eficientemente.
      ))}

      {/* 
      // Para pasar un parametro numerico se necesitan llaves porque JSX necesita saber que debe evaluar una expresión JS.

      <ItemCounter name="Nintendo Switch 2" quantity={1} />

      // Los strings tienen una sintaxis especial con comillas y no necesitan llaves.

      <ItemCounter name="Pro Controller" quantity={2} />
      <ItemCounter name="Super Smash" quantity={3} />
      <ItemCounter name="Super Mario" quantity={3} /> 
      */}
    </>
  );
}
