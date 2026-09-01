import { describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { CustomHeader } from "./CustomHeader";

describe("CustomHeader", () => {
  const title = "Test Title";

  test("should render the title correctly", () => {
    render(<CustomHeader title={title} />);
    expect(screen.getByText(title)).toBeDefined();
  });

  test("should render the description when provided", () => {
    const description = "Test Description";

    render(<CustomHeader title={title} description={description} />);

    // screen se usa bastante ya cuando los elementos son renderizados o cambian, se pueden obtener facilmente.

    expect(screen.getByText(description)).toBeDefined();
    expect(screen.getByRole("paragraph")).toBeDefined();
    expect(screen.getByRole("paragraph").innerHTML).toBe(description);
  });

  test("should not render description when not provided", () => {
    // Cuando se usa screen el elemento debe de existir, por esto no se usa el 'screen' en este caso.
    // El container se usa cuando el componente no cambia desde su renderizacion inicial.
    const { container } = render(<CustomHeader title={title} />);

    const divElement = container.querySelector(".content-center");

    // El ? lo usamos por si la constante 'divElement' no existe, de modo que no lance un error.
    const h1 = divElement?.querySelector("h1");
    expect(h1?.innerHTML).toBe(title);

    const p = divElement?.querySelector("p");
    expect(p).toBeNull();
  });
});
