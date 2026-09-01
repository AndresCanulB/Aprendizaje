import { beforeEach, describe, expect, test, vi } from "vitest";
import AxiosMockAdapter from "axios-mock-adapter";

import { getGifsByQuery } from "./get-gifs-by-query.action";
import { giphyApi } from "../api/giphy.api";

import { giphySearchResponseMock } from "./../../../tests/mocks/giphy.response.data";

describe("getGifsByQuery", () => {
  // AxiosMockAdapter es una librería que permite simular (mockear) las peticiones HTTP hechas con Axios en tests.
  // Sin que se realicen llamadas reales a una API.
  let mock = new AxiosMockAdapter(giphyApi);

  beforeEach(() => {
    mock.reset();
    mock = new AxiosMockAdapter(giphyApi);
  });

  // Prueba con una lista de gifs hardcodeada.

  // test('should return a list of gifs', async () => {
  //   const gifs = await getGifsByQuery('goku');
  //   const [gif1] = gifs;

  //   Se prueba que la lista tenga 10 elementos.

  //   expect(gifs.length).toBe(10);

  // Se prueba que el objeto tenga la estructura correcta.

  //   expect(gif1).toStrictEqual({
  //     id: expect.any(String),
  //     height: expect.any(Number),
  //     width: expect.any(Number),
  //     title: expect.any(String),
  //     url: expect.any(String),
  //   });
  // });

  test("should return a list of gifs", async () => {
    // Se utiliza una muestra de la respuesta de la API de Giphy llamada giphySearchResponseMock.
    mock.onGet("/search").reply(200, giphySearchResponseMock); // AxiosMockAdapter simula un GET exitoso

    const gifs = await getGifsByQuery("goku");

    expect(gifs.length).toBe(10);

    gifs.forEach((gif) => {
      expect(typeof gif.id).toBe("string");
      expect(typeof gif.title).toBe("string");
      expect(typeof gif.url).toBe("string");
      expect(typeof gif.width).toBe("number");
      expect(typeof gif.height).toBe("number");
    });
  });

  test("should return an empty list of gifs if query is empty", async () => {
    // mock.onGet('/search').reply(200, { data: [] });
    mock.restore();

    const gifs = await getGifsByQuery("");

    expect(gifs.length).toBe(0);
  });

  test("should handle error when the API returns an error", async () => {
    // Usa un espia para interceptar el tipo de error de consola.
    // vi.spyOn(console, "error") — Observa las llamadas a console.error
    // .mockImplementation(() => {}) — Silencia la salida de error en la terminal durante el test.
    // consoleErrorSpy — Variable que usas luego para hacer assertions.
    const consoleErrorSpy = vi.spyOn(console, "error").mockImplementation(() => {});

    // AxiosMockAdapter emula un error
    mock.onGet("/search").reply(400, {
      data: {
        message: "Bad Request"
      }
    });

    const gifs = await getGifsByQuery("goku");

    expect(gifs.length).toBe(0);
    expect(consoleErrorSpy).toHaveBeenCalled();
    expect(consoleErrorSpy).toHaveBeenCalledTimes(1);

    // expect.anything() → Se cumple si la función spy recibió algún argumento del error.
    expect(consoleErrorSpy).toHaveBeenCalledWith(expect.anything());
  });
});

/*

¿Qué es axios-mock-adapter?

axios-mock-adapter es una librería que permite simular (mockear) las peticiones HTTP hechas con Axios en tus tests, 
sin que se realicen llamadas reales a una API.

¿Por qué usarlo?

- Sin llamadas reales: Tus tests no dependen de internet ni de la API de Giphy.

- Determinístico: Siempre devuelve los mismos datos, haciendo tus tests predecibles.

- Simular errores: Puedes probar qué pasa cuando la API falla.

- Rápido: No hay latencia de red.

*/
