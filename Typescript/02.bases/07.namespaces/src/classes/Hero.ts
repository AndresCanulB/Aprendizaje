import powers from "../data/powers";

export class Hero {
  constructor(
    public name: string,
    public powerId: number,
    public age: number
  ) {}

  get power(): string {
    // Se usa Optional chaining ? para evitar errores
    // El ?. hace que si .find() retorna undefined, toda la expresión devuelva undefined en lugar de lanzar un error, y entonces el || "not found" entra en acción.
    return powers.find((power) => power.id === this.powerId)?.description || "not found";
  }
}

export class Hero2 {}
export class Hero3 {}
export class Hero4 {}

export const PI = 3.1416;
export const miNombre = "Fernando";
