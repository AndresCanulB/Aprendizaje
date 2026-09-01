import { describe, expect, test } from "vitest";
import { giphyApi } from "./giphy.api";

describe("giphyApi", () => {
  test("should be configured correctly", () => {
    // Defaults contiene todos los parametros que se le agregan a cualquier peticion realizada con axios
    // console.log(giphyApi.defaults);

    const params = giphyApi.defaults.params;

    expect(giphyApi.defaults.baseURL).toBe("https://api.giphy.com/v1/gifs");
    expect(params.lang).toBe("es");
    expect(params.api_key).toBe(import.meta.env.VITE_GIPHY_API_KEY);

    // toEqual se usa para datos primitivos
    // toStrictEqual se usa para objetos y arrays (compara que tenga las mismas propiedades y valores)
    expect(params).toStrictEqual({
      lang: "es",
      api_key: import.meta.env.VITE_GIPHY_API_KEY
    });
  });
});
