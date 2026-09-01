import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";
import { SearchBar } from "./SearchBar";

describe("SearchBar", () => {
  test("should render searchbar correctly", () => {
    const { container } = render(<SearchBar onQuery={() => {}} />);

    expect(container).toMatchSnapshot();
    expect(screen.getByRole("textbox")).toBeDefined();
    expect(screen.getByRole("button")).toBeDefined();
  });

  test("should call onQuery with the correct value after 700ms", async () => {
    // const onQuery = vi.fn() crea una función mock (falsa).
    // No hace nada por sí sola, pero registra todas las llamadas que recibe
    const onQuery = vi.fn();

    // Renderiza el componente SearchBar en un DOM virtual de testing
    // Pasándole la función mock como prop onQuery
    render(<SearchBar onQuery={onQuery} />);

    // Busca el input por su rol y simula un cambio en su valor a 'test'
    const input = screen.getByRole("textbox");

    // Simula que el usuario escribe "test" en el input.
    fireEvent.change(input, { target: { value: "test" } });

    // await new Promise((resolve) => setTimeout(resolve, 701));
    // La funcion waitFor espera dinámicamente el tiempo necesario hasta que el debouncer termine.
    await waitFor(() => {
      expect(onQuery).toHaveBeenCalled();
      expect(onQuery).toHaveBeenCalledWith("test");
    });
  });

  test("should call only once with the last value (debounce)", async () => {
    const onQuery = vi.fn();
    render(<SearchBar onQuery={onQuery} />);

    // Se modifica el valor del input múltiples veces simulando el escribir.
    const input = screen.getByRole("textbox");
    fireEvent.change(input, { target: { value: "t" } });
    fireEvent.change(input, { target: { value: "te" } });
    fireEvent.change(input, { target: { value: "tes" } });
    fireEvent.change(input, { target: { value: "test" } });

    // Se verifica que el debouncer llama a onQuery solo una vez con el último valor.
    await waitFor(() => {
      expect(onQuery).toHaveBeenCalledTimes(1);
      expect(onQuery).toHaveBeenCalledWith("test");
    });
  });

  test("should call onQuery when button clicked with the input value", () => {
    const onQuery = vi.fn();
    render(<SearchBar onQuery={onQuery} />);

    const input = screen.getByRole("textbox");
    fireEvent.change(input, { target: { value: "test" } });

    const button = screen.getByRole("button");
    fireEvent.click(button);

    // Se verifica que el boton llama a onQuery solo una vez con el último valor.
    expect(onQuery).toHaveBeenCalledTimes(1);
    expect(onQuery).toHaveBeenCalledWith("test");
  });

  test("should the input has the correct placeholder value", () => {
    const value = "Buscar gif";

    render(<SearchBar onQuery={() => {}} placeholder={value} />);

    expect(screen.getByPlaceholderText(value)).toBeDefined();
  });
});
