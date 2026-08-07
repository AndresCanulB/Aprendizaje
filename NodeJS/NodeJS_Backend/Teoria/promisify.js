const { readFile, writeFile } = require("node:fs");
const { promisify } = require("node:util");

const readFileAsync = promisify(readFile);

/*

Promisify es una utilidad que convierte una función que utiliza callbacks en una función que devuelve promesas.

Asi que no es necesaria esta funcion, ya que readFileAsync hace lo mismo

const getText = (pathFile) => {
  return new Promise(function (resolve, reject) {
    readFile(pathFile, "utf-8", (error, data) => {
      if (error) {
        reject(error);
        return;
      }
      resolve(data);
    });
  });
};
*/

async function read() {
  try {
    const first = await readFileAsync("./data/first.txt", "utf-8");
    const second = await readFileAsync("./data/second.txt", "utf-8");
    const third = await readFileAsync("./data/third.txt", "utf-8");
    console.log(first);
    console.log(second);
    console.log(third);
  } catch (error) {
    console.log(error.message);
  }
}

read();
