import { readFile } from "node:fs/promises";

// Asincrono paralelo
// Para ejecutar todas las promesas en paralelo se usa Promise.all
Promise.all([
  readFile("./archivo1.txt", "utf-8"),
  readFile("./archivo2.txt", "utf-8"),
]).then(([text, secondText]) => {
  (console.log("Primer texto:", text),
    console.log("Segundo texto:", secondText));
});

// Puntos positivos:
// De esta forma va a ser mas rapido, ya que esta haciendo dos trabajos en paralelo
