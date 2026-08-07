import { describe, expect, test } from "vitest";
import { add, divide, multiply, subtract } from "./math.helper";

describe("add", () => {
  test("should add two positives numbers", () => {
    // ! 1. Arrange
    const a = 1;
    const b = 2;

    // ! 2. Act
    const result = add(a, b);

    // ! 3. Assert
    expect(result).toBe(a + b);
  });

  test("should add two negative numbers", () => {
    // ! 1. Arrange
    const a = -2;
    const b = -4;

    // ! 2. Act
    const result = add(a, b);

    // ! 3. Assert
    expect(result).toBe(a + b);
  });
});

describe("substract", () => {
  test("Should substract two positive numbers", () => {
    // ! 1. Preparacion
    const a = 4;
    const b = 2;

    // ! 2. Accion
    const result = subtract(a, b);

    // ! 3. Acersion
    expect(result).toBe(a - b);
  });

  test("The const a should be greater than the const b", () => {
    // ! 1. Preparacion
    const a = 4;
    const b = 2;

    // ! 2. Accion
    const result = a > b ? subtract(a, b) : 0;

    // ! 3. Acersion
    expect(result).toBeGreaterThan(0);
  });
});

describe("multiply", () => {
  test("Should multiply two positive numbers", () => {
    // ! 1. Preparacion
    const a = 2;
    const b = 5;

    // ! 2. Accion
    const result = multiply(a, b);

    // ! 3. Acersion
    expect(result).toBe(a * b);
  });

  test("The const a or b should not be 0", () => {
    // ! 1. Preparacion
    const a: number = 15;
    const b: number = 5;

    // ! 2. Accion
    const result = a > 0 || b > 0 ? multiply(a, b) : 0;

    // ! 3. Acersion
    expect(result).toBeGreaterThan(0);
  });
});

describe("divide", () => {
  test("should divide two positive numbers", () => {
    const a = 2;
    const b = 4;

    const result = divide(a, b);

    expect(result).toBe(a / b);
  });
});

/*
describe('subtract', () => {
  test('should subtract two positive numbers', () => {
    const a = 2;
    const b = 4;

    const result = subtract(a, b);

    expect(result).toBe(a - b);
  });
  test('should subtract two negative numbers', () => {
    const a = -2;
    const b = -4;

    const result = subtract(a, b);

    expect(result).toBe(a - b);
  });
});

describe('multiply', () => {
  test('should multiply two positive numbers', () => {
    const a = 2;
    const b = 4;

    const result = multiply(a, b);

    expect(result).toBe(a * b);
  });
  test('should multiply two negative numbers', () => {
    const a = -2;
    const b = -4;

    const result = multiply(a, b);

    expect(result).toBe(a * b);
  });
});
describe('multiply', () => {
  test('should multiply two positive numbers', () => {
    const a = 2;
    const b = 4;

    const result = multiply(a, b);

    expect(result).toBe(a * b);
  });
  test('should multiply two negative numbers', () => {
    const a = -2;
    const b = -4;

    const result = multiply(a, b);

    expect(result).toBe(a * b);
  });
});
*/
