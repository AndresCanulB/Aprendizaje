import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { ItemCounter } from "./ItemCounter";

// Tip: Probar lo mas pequeño y facil, luego ir creciendo en complejidad

describe("ItemCounter", () => {
  test("should render with default values", () => {
    const name = "Control de Nintendo";

    render(<ItemCounter name={name} />);

    // Buscar si un elemento con cierto nombre este definido
    expect(screen.getByText(name)).toBeDefined();

    // Buscar que un elemento con cierto nombre no sea nulo
    expect(screen.getByText(name)).not.toBeNull();
  });

  test("should render with custom quantity", () => {
    const name = "Control de Nintendo";
    const quantity = 10;

    render(<ItemCounter name={name} quantity={quantity} />);

    expect(screen.getByText(quantity)).toBeDefined();
  });

  test("should increase count when +1 button is pressed", () => {
    render(<ItemCounter name={"Test item"} quantity={1} />);

    const [buttonAdd] = screen.getAllByRole("button");

    // Se usa fireEvent para simular un evento click en el boton con Testing Library
    fireEvent.click(buttonAdd);

    expect(screen.getByText("2")).toBeDefined();
  });

  test("should decrease count when -1 button is pressed", () => {
    // quantity = 5
    const count = 5;

    render(<ItemCounter name={"Test item"} quantity={count} />);

    const [, buttonSubstract] = screen.getAllByRole("button");

    fireEvent.click(buttonSubstract);

    expect(screen.getByText("4")).toBeDefined();
  });

  test("should not decrease count when -1 button is pressed and quantity is 1", () => {
    const count: number = 1;

    render(<ItemCounter name={"Test item"} quantity={count} />);

    const [, buttonSubstract] = screen.getAllByRole("button");

    fireEvent.click(buttonSubstract);

    expect(screen.getByText("1")).toBeDefined();
  });

  test("should change to red when count is 1", () => {
    const quantity = 1;
    const name = "Test item";
    render(<ItemCounter name={name} quantity={quantity} />);

    const itemText = screen.getByText(name);

    expect(itemText.style.color).toBe("red");
  });

  test("should change to black when count is greater than 1", () => {
    const quantity = 2;
    const name = "Test item";
    render(<ItemCounter name={name} quantity={quantity} />);

    const itemText = screen.getByText(name);

    expect(itemText.style.color).toBe("black");
  });
});
