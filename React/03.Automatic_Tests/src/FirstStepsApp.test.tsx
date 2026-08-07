/* eslint-disable @typescript-eslint/no-unused-vars */
import { render, screen } from "@testing-library/react";
import { afterEach, describe, expect, test, vi } from "vitest";
import { FirstStepsApp } from "./FirstStepsApp";

// vi.fn es una funcion ficticia para conocer con que parametros fue llamada y simular retornos
// Se le suele llamar "spy" o "espia"
const mockItemCounter = vi.fn((_props: unknown) => {
  return <div data-testid="ItemCounter" />;
});

// Un mock es una simulación de algo real (función, módulo, API, etc.)
// Se usa en tests para reemplazar dependencias externas o complejas con versiones controladas y predecibles.
// Los mocks permiten aislar la unidad que se esta probando.
vi.mock("./shopping-cart/ItemCounter", () => ({
  ItemCounter: (props: unknown) => mockItemCounter(props)
}));

// vi.mock('./shopping-cart/ItemCounter', () => ({
// ItemCounter: (props: unknown) => (
// <div
//   data-testid="ItemCounter"
//   name={props.name}
//   quantity={props.quantity}
// />
// ),
// }));

describe("FirstStepsApp", () => {
  // Despues de cada test limpia el estado de todos los mocks
  // Esto es para que el estado no se contamine entre tests
  afterEach(() => {
    vi.clearAllMocks();
  });

  test("Should match snapshot", () => {
    const { container } = render(<FirstStepsApp />);
    expect(container).toMatchSnapshot();
  });

  test("should render the correct number of ItemCounter components", () => {
    render(<FirstStepsApp />);

    const itemCounters = screen.getAllByTestId("ItemCounter");

    expect(itemCounters.length).toBe(3);
  });

  test("should render ItemCounter with correct props", () => {
    render(<FirstStepsApp />);

    // Verificamos que el mock fue llamado 3 veces, es decir, que se renderizaron 3 componentes
    expect(mockItemCounter).toHaveBeenCalledTimes(3);

    // Verificamos que el mock fue llamado con los parametros correctos
    expect(mockItemCounter).toHaveBeenCalledWith({
      name: "Nintendo Switch 2",
      quantity: 1
    });
    expect(mockItemCounter).toHaveBeenCalledWith({
      name: "Pro Controller",
      quantity: 2
    });
    expect(mockItemCounter).toHaveBeenCalledWith({
      name: "Super Smash",
      quantity: 5
    });
  });
});
