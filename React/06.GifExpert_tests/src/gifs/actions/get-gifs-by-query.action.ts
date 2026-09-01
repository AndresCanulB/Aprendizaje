import { giphyApi } from "../api/giphy.api";

import type { GiphyResponse } from "../interfaces/giphy.response";
import type { Gif } from "../interfaces/gif.interface";

export const getGifsByQuery = async (query: string): Promise<Gif[]> => {
  // Validación temprana (early return)
  // Evita hacer una llamada innecesaria a la API
  // query.trim() — Elimina los espacios en blanco al inicio y final del string.
  // .length === 0 — Verifica si el string resultante está vacío.
  // return [] — Si está vacío, retorna un array vacío inmediatamente.
  if (query.trim().length === 0) {
    return [];
  }

  // Se manejan errores como respuesta 400, 500 etc.
  try {
    const response = await giphyApi<GiphyResponse>("/search", {
      params: {
        q: query,
        limit: 10
      }
    });

    return response.data.data.map((gif) => ({
      id: gif.id,
      title: gif.title,
      url: gif.images.original.url,
      width: Number(gif.images.original.width),
      height: Number(gif.images.original.height)
    }));
  } catch (error) {
    console.error(error);
    return [];
  }
};
